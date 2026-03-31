import { Resend } from 'resend';

type ContactPayload = {
  fullName?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  interest?: string[];
  description?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { fullName, businessName, email, phone, interest, description } = body;

  if (!fullName || !email || !description) {
    return Response.json(
      { error: 'Full name, email, and description are required.' },
      { status: 400 }
    );
  }

  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!from || !to) {
    return Response.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const interestLabel =
    interest && interest.length > 0 ? interest.join(', ') : 'Not selected';
  const descriptionLabel = description.trim();

  const textBody = [
    'New Contact Request',
    '',
    `Name: ${fullName}`,
    `Business: ${businessName || 'N/A'}`,
    `Email: ${email}`,
    `Phone: ${phone || 'N/A'}`,
    `Interest: ${interestLabel}`,
    '',
    'Description:',
    descriptionLabel,
  ].join('\n');

  const htmlBody = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Request</title>
  </head>
  <body style="margin:0;padding:0;background-color:#fff7d1;font-family:Arial,sans-serif;color:#111827;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#fff7d1;padding:24px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border:1px solid #fde68a;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:24px;background:linear-gradient(90deg,#FEE685 0%,#FFD230 100%);">
                <h1 style="margin:0;font-size:22px;line-height:1.3;color:#111827;">New Contact Request</h1>
                <p style="margin:8px 0 0 0;font-size:14px;color:#111827;">A new contact form submission was received.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 24px 24px 24px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;font-size:14px;">
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;width:160px;">Name</td>
                    <td style="padding:8px 0;color:#111827;font-weight:600;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Business</td>
                    <td style="padding:8px 0;color:#111827;">${businessName || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Email</td>
                    <td style="padding:8px 0;color:#111827;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Phone</td>
                    <td style="padding:8px 0;color:#111827;">${phone || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;">Interest</td>
                    <td style="padding:8px 0;color:#111827;">${interestLabel}</td>
                  </tr>
                </table>
                <div style="margin-top:16px;padding:16px;background:#fff8db;border-radius:10px;border:1px solid #fde68a;">
                  <p style="margin:0 0 8px 0;font-weight:600;font-size:14px;color:#111827;">Description</p>
                  <p style="margin:0;font-size:14px;white-space:pre-line;color:#111827;">${descriptionLabel}</p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  try {
    await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New contact request from ${fullName}`,
      text: textBody,
      html: htmlBody,
    });

    return Response.json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Resend error', error);
    return Response.json(
      { error: 'Unable to send message right now.' },
      { status: 500 }
    );
  }
}
