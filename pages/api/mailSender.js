const nodemailer = require("nodemailer");
export default async function Handler(req, res) {
  if (req.method == "POST") {
    let { body } = req;
    const transported = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_APP_MAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    body = JSON.parse(body);
    var toMe = {
      from: process.env.GMAIL_APP_MAIL,
      to: "bk3648734@gmail.com",
      subject: `Hi👋 ${body.name} has sent you a message`,
      text: `
            ${body.name} with email: ${body.email} has sent you the following message through your Website:

            ${body.message}
          `,
    };
    await transported.sendMail(toMe, function (error, info) {
      if (error) {
        console.log(error);
        res.json({
          status: "error",
        });
      } else if (info) {
        res.json({ status: "success" });
      }
    });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
};
