// Sends enquiry-form submissions to Web3Forms, which emails them straight to
// the inbox tied to this access key — no backend of our own to run. Change
// the destination email from the Web3Forms dashboard any time; the key stays
// the same.
const WEB3FORMS_ACCESS_KEY = "6befd474-4273-429e-8caa-a9b69028ae8a";

// A submission that never returns leaves the button stuck on "Sending…", so
// give the request a ceiling and surface it as a normal failure.
const TIMEOUT_MS = 15000;

export async function submitForm({ subject, data }) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      // Web3Forms drops anything that fills this hidden field, which is how
      // it separates bots from buyers. The forms render it visually hidden.
      botcheck: "",
      ...data,
    }),
  });
  const result = await res.json();
  if (!result.success) {
    throw new Error(result.message || "Submission failed");
  }
  return result;
}
