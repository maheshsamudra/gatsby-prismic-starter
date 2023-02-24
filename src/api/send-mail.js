import formData from "form-data";
import Mailgun from "mailgun.js";

const domain = process.env.MAILGUN_DOMAIN;

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY
});

const to = process.env.EMAIL_RECIPIENTS

export default async function handler(req, res) {
    const { fields, attachment } = req.body || {};

    const config = {
        from: `noreply <noreply@${domain}>`,
        to,
        subject: "Form Submission from Careers Page",
        text: "Form Submission from Careers Page",
        html: getEmailBody(fields),
    };

    if (attachment?.file && attachment?.filename) {
        config.attachment = {
            data: Buffer.from(attachment?.file, "base64"),
            filename: attachment?.filename,
        };
    }

    await mg.messages
        .create(domain, config)
        .then((msg) => console.log(msg)) // logs response data
        .catch((err) => console.error(err)); // logs any error

    res.status(200).json({ status: "success" });
}

const getEmailBody = (fields = []) => {
    return  `
    <b>Form data:</b>
    <ul style="list-style-type: none; padding-left: 10px">
    ${fields
        .map(({ key, value }) => {
            return `<li>${key}: ${value}</li>`;
        })
        .join("")}
    </ul>
    <br/>`;
};
