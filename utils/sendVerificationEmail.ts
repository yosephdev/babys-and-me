import nodemailer from 'nodemailer';

export async function sendVerificationEmail(email: string, token: string): Promise<void> {
    // Create Zoho transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true,
        auth: {
            user: 'contact@babysme.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://www.babysme.com'}/verify-email?token=${token}`;

    // Email content
    const mailOptions = {
        from: '"Baby\'s & Me" <contact@babysme.com>',
        to: email,
        subject: 'Verifiera din e-postadress',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Välkommen till Baby's & Me!</h2>
        <p>Tack för att du registrerade dig. Klicka på länken nedan för att verifiera din e-postadress:</p>
        <p><a href="${verificationUrl}" style="display: inline-block; background-color: #f8bbd0; color: #000; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verifiera e-postadress</a></p>
        <p>Om du inte registrerade dig på Baby's & Me, kan du ignorera detta meddelande.</p>
        <p>Vänliga hälsningar,<br>Baby's & Me-teamet</p>
      </div>
    `
    };

    // Send email
    await transporter.sendMail(mailOptions);
}
