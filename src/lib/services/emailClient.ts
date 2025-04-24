"use server";
import { google } from "googleapis";
import { FormSchema, formSchema } from "@/schema/formSchema";
import process from "process";

const createEmail = (
  to: string,
  from: string,
  subject: string,
  message: string,
) => {
  const encodedSubject = `=?UTF-8?B?${Buffer.from(subject).toString("base64")}?=`;

  // Nahrazení nových řádků za <br>
  const formattedMessage = message.replace(/\n/g, "<br>");

  const emailBody = [
    `Content-Type: text/html; charset="UTF-8"`,
    `MIME-Version: 1.0`,
    `Content-Transfer-Encoding: base64`,
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${encodedSubject}`,
    ``,
    Buffer.from(
      `
            <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f9f9f9;
                            color: #333;
                            padding: 20px;
                        }
                        .message {
                            background-color: #ffffff;
                            border-radius: 5px;
                            padding: 20px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #4CAF50;
                        }
                        p {
                            font-size: 16px;
                            line-height: 1.5;
                        }
                    </style>
                </head>
                <body>
                    <div class="message">
                        <h1>${subject}</h1>
                        <p>${formattedMessage}</p> 
                    </div>
                </body>
            </html>
        `,
      "utf-8",
    ).toString("base64"),
  ].join("\n");

  return Buffer.from(emailBody)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

export const emailClient = async (data: FormSchema) => {
  console.log("server fire test", data);

  try {
    // Validace dat
    const validatedData = formSchema.parse(data);
    console.log("validovaná data:", validatedData);

    // OAuth2 klient pro autentifikaci
    const oauth2Client = new google.auth.OAuth2(
      process.env.client_id,
      process.env.client_secret,
      "http://localhost:3000/api/oauth2callback",
    );

    // Nastavení access tokenu
    oauth2Client.setCredentials({
      access_token: process.env.access_token, // Použití access tokenu
    });

    // Inicializace Gmail API
    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    // Vytvoření e-mailu
    const raw = createEmail(
      "radekmorong@gmail.com", // Příjemce
      validatedData.email, // Odesílatel
      "Testovací e-mail", // Předmět
      validatedData.note, // Tělo e-mailu
    );

    // Odeslání e-mailu
    const res = await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw },
    });

    console.log("Message sent:", res.data);

    return { success: true, message: "E-mail úspěšně odeslán!" };
  } catch (error) {
    console.log("Chyba ve funkci emailClient:", error);
    return { success: false, message: "Došlo k chybě při odesílání e-mailu." };
  }
};
