// Sends enquiry-form submissions to Web3Forms, which emails them straight to
// the inbox tied to this access key — no backend of our own to run. Change
// the destination email from the Web3Forms dashboard any time; the key stays
// the same.
const WEB3FORMS_ACCESS_KEY = "6befd474-4273-429e-8caa-a9b69028ae8a";

export async function submitForm({ subject, data }) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      ...data,
    }),
  });
  const result = await res.json();
  if (!result.success) {
    throw new Error(result.message || "Submission failed");
  }
  return result;
}
