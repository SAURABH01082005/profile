import { sendContactReplyEmail,sendContactReplyEmailSender } from "./email/emailController"


const sendContactReplyEmailFunction = async (req: any, res: any) => {
    try {
        const {email, name, subject, message} = req.body;
        console.log('Received contact form data:', { email, name, subject, message }); // Debug log
        await sendContactReplyEmail(email, name, subject, message);
        await sendContactReplyEmailSender(email, name, subject, message);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.log('Email error', error);
        res.status(500).json({ message: 'Error sending email' });
    }
}

export { sendContactReplyEmailFunction }