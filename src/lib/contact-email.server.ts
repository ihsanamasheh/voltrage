import { sendLovableEmail } from "@lovable.dev/email-js";

// Inbox that receives contact form submissions.
export const ADMIN_EMAIL = "amashehihsan73@gmail.com";

// Verified sender (delegated) subdomain, e.g. "notify.voltrage.com".
// Set once the brand's email domain is verified.
function senderDomain(): string {
  const domain = process.env["SENDER_DOMAIN"];
  if (!domain) {
    throw new Error("SENDER_DOMAIN is not configured");
  }
  return domain;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new Error("LOVABLE_API_KEY is not configured");

  const domain = senderDomain();
  const safeMessage = escapeHtml(input.message).replace(/\n/g, "<br />");

  const text = [
    `New contact form message — ${input.subject}`,
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    "",
    input.message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#ffffff;color:#111111;padding:24px">
      <h1 style="font-size:18px;margin:0 0 16px">New contact form message</h1>
      <p style="margin:0 0 8px"><strong>Subject:</strong> ${escapeHtml(input.subject)}</p>
      <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(input.name)}</p>
      <p style="margin:0 0 16px"><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <div style="border-top:1px solid #e5e5e5;padding-top:16px;line-height:1.6">${safeMessage}</div>
    </div>
  `;

  await sendLovableEmail(
    {
      to: ADMIN_EMAIL,
      from: `Voltrage Website <contact@${domain}>`,
      sender_domain: domain,
      reply_to: input.email,
      subject: `[Voltrage] ${input.subject} — ${input.name}`,
      html,
      text,
      purpose: "transactional",
      label: "contact-form",
    },
    { apiKey },
  );
}
