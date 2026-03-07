import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY ontbreekt in .env.local");
}

const resend = new Resend(apiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const company =
      typeof body.company === "string" ? body.company.trim() : "";

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim() : "";

    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!company || !name || !email || !message) {
      return NextResponse.json(
        { error: "Vul alle velden in." },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "JHGProcess-Solutions Website <info@jhgprocess-solutions.com>",
      to: "info@jhgprocess-solutions.com",
      replyTo: email,
      subject: "Nieuwe aanvraag vrijblijvende afspraak",
      text: `Nieuwe aanvraag via de website

Bedrijfsnaam: ${company}
Naam: ${name}
E-mailadres: ${email}

Bericht:
${message}`,

      html: `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2>Nieuwe aanvraag via de website</h2>

        <p><strong>Bedrijfsnaam:</strong> ${company}</p>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mailadres:</strong> ${email}</p>

        <p><strong>Bericht:</strong><br/>
        ${message.replace(/\n/g, "<br />")}
        </p>
      </div>
      `,
    });

    if (result.error) {
      console.error(result.error);
      return NextResponse.json(
        { error: "Verzenden mislukt." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Serverfout tijdens verzenden." },
      { status: 500 }
    );
  }
}