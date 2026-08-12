import { Resend } from 'resend';

// Without a verified custom domain, Resend only allows this sender address,
// and only delivers to the address the Resend account was created with.
const FROM = process.env.CONTACT_FROM ?? 'Portfolio <onboarding@resend.dev>';
const TO = process.env.CONTACT_TO;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  // Constructed here, not at module scope: the Resend constructor throws on a
  // missing key, which would take down the whole route before we can respond.
  if (!apiKey || !TO) {
    return Response.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, subject, message } = (body ?? {}) as Record<
    string,
    unknown
  >;

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string' ||
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim()
  ) {
    return Response.json({ error: 'All fields are required.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  if (message.length > 5000 || subject.length > 200 || name.length > 100) {
    return Response.json({ error: 'Content is too long.' }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `
      <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #000;">
        <p style="margin: 0 0 4px;"><strong>${escapeHtml(name)}</strong></p>
        <p style="margin: 0 0 24px;">
          <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
        </p>
        <p style="margin: 0 0 8px; font-weight: bold;">${escapeHtml(subject)}</p>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return Response.json({ error: 'Failed to send message.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
