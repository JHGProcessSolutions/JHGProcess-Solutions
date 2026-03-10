"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormState = {
  company: string;
  name: string;
  email: string;
  message: string;
};

type ApiResponse = {
  success?: boolean;
  error?: string;
};

export default function JHGProcessSolutionsWebsite() {
  const [form, setForm] = useState<FormState>({
    company: "",
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const packages = [
    {
      name: "Tot 150 facturen",
      description:
        "Geschikt voor kleinere organisaties die hun facturatie en mailbox processen willen automatiseren.",
      points: [
        "Voor bedrijven met een lager volume",
        "Snellere verwerking zonder extra handmatig werk",
        "Overzichtelijke automatisering van facturatie en mailbox",
      ],
    },
    {
      name: "150 – 750 facturen",
      description:
        "Voor groeiende bedrijven waar administratieve processen steeds meer tijd beginnen te kosten.",
      points: [
        "Voor bedrijven met structureel volume",
        "Meer procescontrole en minder foutgevoeligheid",
        "Geschikt voor verdere opschaling",
      ],
    },
    {
      name: "750+ facturen",
      description:
        "Voor organisaties met grotere volumes waar automatisering een grote impact heeft op efficiëntie en opvolging.",
      points: [
        "Voor bedrijven met hoge aantallen en complexere workflows",
        "Sterke tijdsbesparing op facturatie en mailbox verwerking",
        "Inrichting afgestemd op proces en schaalbaarheid",
      ],
    },
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      const response = await fetch("/api/afspraak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Er ging iets mis.");
      }

      setStatus("Bedankt! Uw aanvraag is verzonden. We nemen snel contact met u op.");
      setForm({
        company: "",
        name: "",
        email: "",
        message: "",
      });
    } catch {
      setStatus("Er ging iets mis bij het verzenden. Probeer het opnieuw.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#d9e4f2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 lg:px-8">
          <div className="flex min-w-0 items-center gap-4">
            <img
              src="/LOGO - JHGProcess-Solutions.png"
              alt="JHGProcess-Solutions"
              className="h-26 w-auto sm:h-34"
            />
            <div className="min-w-0">
              <div className="text-2xl font-semibold tracking-tight text-[#21467f]">
                JHGProcess-Solutions
              </div>
              <div className="text-sm text-slate-500">
                Facturatie automatisering en mailbox automatisering
              </div>
            </div>
          </div>

          <nav className="hidden shrink-0 items-center gap-7 text-sm text-slate-600 md:flex">
            <a href="#diensten" className="font-semibold transition hover:text-[#21467f]">
              Diensten
            </a>
            <a href="#hoe-het-werkt" className="font-semibold transition hover:text-[#21467f]">
              Hoe het werkt
            </a>
            <a href="#pakketten" className="font-semibold transition hover:text-[#21467f]">
              Pakketten
            </a>
            <a href="#over-ons" className="font-semibold transition hover:text-[#21467f]">
              Over ons
            </a>
          </nav>

          <a
            href="#afspraak"
            className="shrink-0 rounded-2xl bg-[#21467f] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb]"
          >
            Vrijblijvende afspraak maken
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(63,137,203,0.14),_transparent_28%),radial-gradient(circle_at_left,_rgba(33,70,127,0.12),_transparent_25%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#d9e4f2] bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                Voor bedrijven die administratieve processen concreet willen automatiseren
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#21467f] sm:text-5xl lg:text-6xl">
                Automatiseer facturatie en mailbox processen met minder handmatig werk.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                JHGProcess-Solutions ontwikkelt automatiseringsoplossingen voor bedrijven
                die hun facturatie en mailbox verwerking efficiënter willen organiseren.
                Denk aan het automatisch opbouwen en verzenden van facturen, koppelingen
                met Moneybird en het verwerken, routeren en opvolgen van binnenkomende e-mails.
              </p>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Het resultaat: minder administratie, minder foutgevoeligheid,
                snellere opvolging en meer structuur in dagelijkse processen.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#afspraak"
                  className="rounded-2xl bg-[#21467f] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb]"
                >
                  Vrijblijvende afspraak maken
                </a>
                <a
                  href="#diensten"
                  className="rounded-2xl border border-[#b7cae3] px-6 py-3 text-center text-sm font-medium text-[#21467f] transition hover:border-[#3f89cb] hover:text-[#3f89cb]"
                >
                  Bekijk onze oplossingen
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-lg font-semibold text-[#21467f]">Facturatie</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Automatisch opbouwen, genereren, verzenden en opvolgen
                  </div>
                </div>
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-lg font-semibold text-[#21467f]">Mailbox</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Slim verwerken, routeren en voorbereiden van acties
                  </div>
                </div>
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-lg font-semibold text-[#21467f]">Integratie</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Koppelingen met bestaande systemen zoals Moneybird
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d9e4f2] bg-white p-6 shadow-xl shadow-[#d7e5f7]">
              <div className="rounded-[1.5rem] bg-[#21467f] p-6 text-white">
                <div className="text-sm uppercase tracking-[0.2em] text-[#b7cae3]">
                  Workflow voorbeeld
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Gegevens komen binnen via formulier, systeem of e-mail",
                    "Het systeem analyseert automatisch de inhoud en bepaalt de juiste vervolgactie",
                    "Facturen worden opgebouwd, gegenereerd en verzonden zonder handmatig tussenwerk",
                    "Mailbox berichten worden gecategoriseerd, doorgestuurd of klaargezet voor opvolging",
                    "Gegevens worden bijgewerkt in gekoppelde systemen zoals Moneybird",
                    "Opvolging en administratieve verwerking lopen gestructureerd door",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-4 rounded-2xl bg-white/10 p-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#21467f]">
                        {index + 1}
                      </div>
                      <div className="text-sm leading-6 text-slate-100">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="diensten" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                Diensten
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
                Praktische automatisering voor processen die dagelijks tijd kosten.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Onze oplossingen richten zich op processen waar binnen bedrijven vaak
                veel capaciteit verloren gaat: facturatie en mailbox verwerking.
                Door deze processen slim te automatiseren ontstaat meer snelheid,
                meer structuur en minder afhankelijkheid van handmatig werk.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-[#d9e4f2] bg-[#f8fbff] p-8 shadow-sm">
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                  Facturatie automatisering
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-[#21467f]">
                  Van invoer tot verzending automatisch geregeld
                </h3>
                <p className="mt-4 text-slate-600">
                  Facturen worden automatisch opgebouwd op basis van aangeleverde gegevens
                  of binnenkomende informatie. Het systeem genereert de factuur, maakt
                  het document aan, verstuurt deze en verwerkt relevante gegevens direct
                  door in de administratie.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li>• Automatische opbouw van factuurregels</li>
                  <li>• Genereren en verzenden van facturen</li>
                  <li>• Minder handmatige verwerking en minder fouten</li>
                  <li>• Koppeling met bestaande systemen zoals Moneybird</li>
                  <li>• Geschikt voor bedrijven met structureel factuurvolume</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#d9e4f2] bg-[#f8fbff] p-8 shadow-sm">
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                  Mailbox automatisering
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-[#21467f]">
                  Meer overzicht en snellere verwerking van binnenkomende e-mails
                </h3>
                <p className="mt-4 text-slate-600">
                  Binnenkomende e-mails worden automatisch geanalyseerd en verwerkt.
                  Het systeem kan berichten categoriseren, prioriteren, doorsturen
                  en klaarzetten voor opvolging, zodat mailboxen overzichtelijk blijven
                  en communicatie sneller wordt afgehandeld.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li>• Automatische analyse van binnenkomende e-mails</li>
                  <li>• Herkennen van onderwerpen, prioriteit en vervolgstappen</li>
                  <li>• Slim routeren naar de juiste plek binnen het proces</li>
                  <li>• Minder mailbox chaos en minder losse handelingen</li>
                  <li>• Betere structuur in communicatie en opvolging</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="hoe-het-werkt" className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                Hoe het werkt
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
                Eenvoudig in gebruik, krachtig in de uitvoering.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                De werkwijze blijft overzichtelijk voor uw team, terwijl op de achtergrond
                automatisering zorgt voor verwerking, opvolging en integratie.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "1. Invoer",
                  text: "Gegevens komen binnen via een formulier, bestaande systemen of e-mail.",
                },
                {
                  title: "2. Analyse",
                  text: "Het systeem analyseert de inhoud en bepaalt automatisch welke actie nodig is.",
                },
                {
                  title: "3. Uitvoering",
                  text: "Facturatie of mailbox verwerking wordt automatisch gestart en afgehandeld.",
                },
                {
                  title: "4. Integratie",
                  text: "Relevante gegevens worden bijgewerkt in gekoppelde software zoals Moneybird.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#d9e4f2] bg-white p-6 shadow-sm"
                >
                  <div className="text-lg font-semibold text-[#21467f]">{item.title}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pakketten" className="bg-[#21467f] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#b7cae3]">
                Pakketten
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Oplossingen afgestemd op volume en proces.
              </h2>
              <p className="mt-4 text-lg text-slate-200">
                Onze pakketten worden afgestemd op het aantal facturen, de complexiteit
                van het proces en de mate van automatisering die nodig is binnen uw organisatie.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {packages.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[2rem] border border-[#d9e4f2] bg-white p-8 text-slate-950 shadow-sm"
                >
                  <div className="text-lg font-semibold">{item.name}</div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 rounded-2xl bg-[#f4f7fb] px-4 py-3 text-sm text-[#21467f]">
                    Inrichting afgestemd op uw bedrijf en gewenste automatisering
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    {item.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="over-ons" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 rounded-[2rem] border border-[#d9e4f2] bg-[#f8fbff] p-8 shadow-sm lg:grid-cols-2 lg:p-12">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                  Over ons
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
                  Gericht op concrete automatisering met directe impact.
                </h2>
              </div>
              <div className="text-slate-600">
                <p className="leading-8">
                  JHGProcess-Solutions ontwikkelt praktische automatiseringsoplossingen
                  voor bedrijven die terugkerende administratieve processen efficiënter
                  willen organiseren. De focus ligt op facturatie en mailbox verwerking,
                  omdat juist daar binnen veel organisaties structureel tijd verloren gaat.
                </p>
                <p className="mt-4 leading-8">
                  Onze aanpak is gericht op duidelijkheid, betrouwbaarheid en schaalbaarheid:
                  processen worden niet ingewikkelder gemaakt, maar juist concreter en beter uitvoerbaar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="afspraak" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                Vrijblijvende afspraak
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
                Bespreek waar binnen uw bedrijf de meeste efficiëntiewinst te behalen is.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                In een kort gesprek kijken we samen naar uw huidige werkwijze rond
                facturatie en mailbox verwerking, en waar automatisering direct
                waarde kan toevoegen in tijd, overzicht en opvolging.
              </p>

              <div className="mt-8 space-y-3 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-[#21467f]">E-mail:</span>{" "}
                  info@jhgprocess-solutions.com
                </p>
                <p>
                  <span className="font-semibold text-[#21467f]">Telefoon:</span>{" "}
                  +31 646341101
                </p>
                <p>
                  <span className="font-semibold text-[#21467f]">Plaats:</span>{" "}
                  Roosendaal
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                type="text"
                placeholder="Bedrijfsnaam"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="rounded-2xl border border-[#c8d8ec] px-4 py-3 outline-none transition focus:border-[#21467f]"
                required
              />
              <input
                type="text"
                placeholder="Naam"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-2xl border border-[#c8d8ec] px-4 py-3 outline-none transition focus:border-[#21467f]"
                required
              />
              <input
                type="email"
                placeholder="E-mailadres"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="rounded-2xl border border-[#c8d8ec] px-4 py-3 outline-none transition focus:border-[#21467f]"
                required
              />
              <textarea
                placeholder="Vertel kort wat u momenteel handmatig verwerkt in facturatie of mailbox"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-2xl border border-[#c8d8ec] px-4 py-3 outline-none transition focus:border-[#21467f]"
                required
              />

              <button
                type="submit"
                disabled={isSending}
                className="inline-block rounded-2xl bg-[#21467f] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Versturen..." : "Vrijblijvende afspraak maken"}
              </button>

              {status ? <p className="text-sm text-slate-600">{status}</p> : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d9e4f2] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-slate-500 lg:grid-cols-3 lg:px-8">
          <div className="flex items-start gap-3">
            <img
              src="/LOGO - JHGProcess-Solutions.png"
              alt="JHGProcess-Solutions"
              className="h-34 w-auto"
            />
            <div>
              <div className="font-medium text-[#21467f]">JHGProcess-Solutions</div>
              <div className="mt-1">
                Facturatie automatisering en mailbox automatisering
              </div>
            </div>
          </div>

          <div>
            <div className="font-medium text-[#21467f]">Contact</div>
            <div className="mt-2 space-y-2">
              <div>info@jhgprocess-solutions.com</div>
              <div>+31 646341101</div>
              <div>Roosendaal</div>
            </div>
          </div>

          <div>
            <div className="font-medium text-[#21467f]">Informatie</div>
            <div className="mt-2 space-y-2">
              <div>
                <Link href="/privacy" className="transition hover:text-[#21467f]">
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link
                  href="/algemene-voorwaarden"
                  className="transition hover:text-[#21467f]"
                >
                  Algemene voorwaarden
                </Link>
              </div>
              <div className="pt-2">
                Samenwerkend met Moneybird voor slimme facturatie automatisering.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d9e4f2] px-6 py-5 text-center text-sm text-slate-500 lg:px-8">
          © 2026 JHGProcess-Solutions. Alle rechten voorbehouden.
        </div>
      </footer>
    </div>
  );
}