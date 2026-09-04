// Turns a submitted enquiry form into a pre-filled WhatsApp message, so the
// same enquiry can go out over both channels — the mailbox via submitForm,
// and a WhatsApp draft the visitor reviews and sends themselves.

function humanize(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());
}

function formatValue(v) {
  if (typeof v === "boolean") return v ? "Yes" : "No";
  return String(v).trim();
}

export function buildWhatsAppUrl({ phone, subject, data, skip = [] }) {
  const lines = Object.entries(data)
    .filter(([k, v]) => !skip.includes(k) && v !== "" && v != null)
    .map(([k, v]) => `*${humanize(k)}:* ${formatValue(v)}`);

  const text = [subject, "", ...lines].join("\n");
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
