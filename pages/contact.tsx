import { useState } from "react";
import Header from "../component/header";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    console.log("Sending");
    let data = {
      name,
      email,
      subject,
      message,
    };
    fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status == 200) {
        alert("Votre email a été envoyé");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert(
          "Désolé. Une erreur est survenue. Merci de contacter votre Admin."
        );
      }
    });
  };

  return (
    <>
      <Header />

      <form method="post" onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name || ""}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <br />

        <label>Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email || ""}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br />

        <label>Sujet :</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject || ""}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          required
        />
        <br />

        <label>Message :</label>
        <textarea
          id="message"
          name="message"
          value={message || ""}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        />
        <br />

        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
}
