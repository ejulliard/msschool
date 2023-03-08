import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  name: string;
  email: string;
  message: string;
}

export default async function ContactApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const nodemailer = require("nodemailer");
  const data: Data = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    secure: true,
    host: "",
    auth: {
      user: "",
      pass: "",
    },
    tls: { rejectUnauthorized: false },
  });
  try {
    await transporter.sendMail({
      from: data["email"],
      to: "",
      subject: "",
      html:
        data["message"] + "</br></br>" + data["name"] + "</br>" + data["email"],
    });
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: "an error occured" });
    console.log(err);
  }
}
