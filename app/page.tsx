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
      name: "Facturatie automatisering",
      description:
        "Voor bedrijven die hun facturatieproces van invoer tot verzending en opvolging automatisch willen laten verlopen.",
      points: [
        "Automatische factuuropbouw",
        "PDF generatie en verzending",
        "Koppeling met boekhouding",
        "Betalingsherinneringen en opvolging",
      ],
    },
    {
      name: "Inbox automatisering",
      description:
        "Voor bedrijven die inkomende e-mails slimmer willen verwerken, routeren en voorbereiden zonder onnodig handmatig werk.",
      points: [
        "Automatische e-mailanalyse",
        "Urgentie en intentie herkennen",
        "Samenvattingen en conceptantwoorden",
        "Routing naar de juiste afdeling of vervolgactie",
      ],
    },
    {
      name: "Combinatieoplossing",
      description:
        "Voor bedrijven die zowel facturatie als inboxverwerking willen automatiseren in één compleet en schaalbaar systeem.",
      points: [
        "Facturatie en inbox in één workflow",
        "Minder administratie en snellere opvolging",
        "Inrichting op basis van uw proces",
        "Prijs op aanvraag en afgestemd op uw situatie",
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <img
              src="/LOGO - JHGProcess-Solutions.png"
              alt="JHGProcess-Solutions"
              className="h-20 w-auto sm:h-28"
            />
            <div>
              <div className="text-2xl font-semibold tracking-tight text-[#21467f]">
                JHGProcess-Solutions
              </div>
              <div className="text-sm text-slate-500">
                Facturatie automatisering, inbox automatisering en klantmails automatisering
              </div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#diensten" className="transition hover:text-[#21467f]">
              Diensten
            </a>
            <a href="#hoe-het-werkt" className="transition hover:text-[#21467f]">
              Hoe het werkt
            </a>
            <a href="#pakketten" className="transition hover:text-[#21467f]">
              Pakketten
            </a>
            <a href="#over-ons" className="transition hover:text-[#21467f]">
              Over ons
            </a>
          </nav>

          <a
            href="#afspraak"
            className="rounded-2xl bg-[#21467f] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb]"
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
                Slimme automatisering voor bedrijven die minder handmatig werk willen
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#21467f] sm:text-5xl lg:text-6xl">
                Automatiseer uw facturatie, inbox en klantmails.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                JHGProcess-Solutions helpt bedrijven met facturatie automatisering,
                moneybird automatisering, facturen automatiseren mkb en inbox automatisering.
                Zo bespaart uw team tijd, worden processen sneller opgevolgd en neemt
                handmatig werk sterk af.
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
                  <div className="text-2xl font-semibold text-[#21467f]">Minder werk</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Minder handmatige taken en minder fouten
                  </div>
                </div>
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#21467f]">Sneller</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Facturen en e-mails sneller verwerkt en opgevolgd
                  </div>
                </div>
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#21467f]">Schaalbaar</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Een oplossing die meegroeit met uw bedrijf
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
                    "Formulier ingevuld of e-mail ontvangen",
                    "Het systeem analyseert en verwerkt automatisch",
                    "Factuur wordt opgebouwd of inboxactie wordt gestart",
                    "Factuur of conceptantwoord wordt automatisch voorbereid of verzonden",
                    "Boekhouding, logging en opvolging worden bijgewerkt",
                    "Herinneringen en slimme inboxacties lopen vanzelf door",
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

        <section id="problemen" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                Herkenbaar?
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
                Veel bedrijven verliezen ongemerkt uren per week aan terugkerend handmatig werk.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Juist in facturatie, inboxverwerking en klantmails gaat vaak onnodig veel tijd
                verloren. Dat vertraagt opvolging, verhoogt de foutkans en kost capaciteit.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Facturen worden nog handmatig opgebouwd of gecontroleerd",
                "Klantmails blijven liggen of worden niet consistent opgevolgd",
                "Inboxverwerking kost veel tijd en vraagt steeds opnieuw aandacht",
                "Er gaat tijd verloren aan losse stappen, controles en opvolging",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-[#d9e4f2] bg-[#f8fbff] p-6 shadow-sm"
                >
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="diensten" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
              Diensten
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
              Oplossingen voor facturatie automatisering, inbox automatisering en klantmails automatisering.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              U kiest voor alleen facturatie automatisering, alleen inbox automatisering
              of een combinatie van beide. De oplossing wordt afgestemd op uw proces,
              werkwijze en volume.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                Facturatie automatisering
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#21467f]">
                Van invoer tot verzending automatisch geregeld
              </h3>
              <p className="mt-4 text-slate-600">
                Uw medewerkers vullen alleen een formulier in. Daarna loopt het proces
                automatisch door: opbouw van factuurregels, PDF generatie, verzending,
                boekhouding en opvolging. Ideaal voor bedrijven die facturen willen automatiseren.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• Facturen automatisch genereren</li>
                <li>• PDF&apos;s automatisch maken en verzenden</li>
                <li>• Koppeling met boekhouding of moneybird automatisering</li>
                <li>• Automatische betalingsherinneringen</li>
                <li>• Minder handmatig werk en sneller betaald</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                Inbox automatisering
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-[#21467f]">
                E-mails slimmer, sneller en consistenter verwerken
              </h3>
              <p className="mt-4 text-slate-600">
                Binnenkomende e-mails worden automatisch geanalyseerd, gecategoriseerd en
                samengevat. Het systeem kan vervolgacties starten, routeren en
                conceptantwoorden voorbereiden.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• E-mails automatisch analyseren</li>
                <li>• Urgentie en intentie herkennen</li>
                <li>• Samenvattingen en conceptantwoorden</li>
                <li>• Berichten naar de juiste plek routeren</li>
                <li>• Snellere en consistentere communicatie</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="hoe-het-werkt" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                Hoe het werkt
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
                Eenvoudig voor uw team, krachtig achter de schermen.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                De werkwijze blijft eenvoudig voor uw medewerkers, terwijl op de achtergrond
                automatisering het proces overneemt.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "1. Invoer of e-mail",
                  text: "Een medewerker vult een formulier in of er komt een e-mail binnen.",
                },
                {
                  title: "2. Automatische verwerking",
                  text: "Het systeem analyseert de informatie en bepaalt automatisch de juiste vervolgstappen.",
                },
                {
                  title: "3. Uitvoering",
                  text: "Facturen, routing, opvolging en conceptacties worden automatisch klaargezet of uitgevoerd.",
                },
                {
                  title: "4. Inzicht en controle",
                  text: "U houdt overzicht zonder losse handelingen, foutgevoelige stappen of vertraging.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[#d9e4f2] bg-[#f8fbff] p-6 shadow-sm"
                >
                  <div className="text-lg font-semibold text-[#21467f]">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="voordelen" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
              Wat levert het op?
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
              Minder administratie, snellere opvolging en meer rust in uw processen.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Minder administratie",
                text: "Taken die normaal uren per week kosten worden grotendeels automatisch verwerkt.",
              },
              {
                title: "Snellere opvolging",
                text: "Facturen, e-mails en vervolgstappen worden sneller verwerkt zonder vertraging.",
              },
              {
                title: "Minder fouten",
                text: "Door minder handmatige stappen daalt de kans op fouten en blijft het proces consistenter.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#21467f]">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#21467f]">
              Voor bedrijven die facturen willen automatiseren en klantmails slimmer willen afhandelen
            </h3>
            <p className="mt-4 max-w-4xl text-slate-600">
              Of het nu gaat om facturatie automatisering, moneybird automatisering,
              facturen automatiseren mkb of inbox automatisering: het doel is altijd hetzelfde.
              Minder losse handelingen, meer snelheid en een proces dat beter schaalbaar wordt.
            </p>
          </div>
        </section>

        <section id="pakketten" className="bg-[#21467f] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#b7cae3]">
                Pakketten
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Oplossingen afgestemd op uw proces en behoefte.
              </h2>
              <p className="mt-4 text-lg text-slate-200">
                U kunt kiezen voor alleen facturatie automatisering, alleen
                inbox automatisering of een combinatie van beide. De prijs wordt
                bepaald op basis van uw situatie, volume, gewenste inrichting en
                mate van support.
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
                    Prijs op aanvraag, afgestemd op uw bedrijf en wensen
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
                  Praktische automatisering die direct tijd oplevert.
                </h2>
              </div>
              <div className="text-slate-600">
                <p className="leading-8">
                  JHGProcess-Solutions helpt bedrijven met het automatiseren van
                  facturatie, inboxverwerking en klantcommunicatie. Wij bouwen
                  oplossingen die terugkerend werk verminderen, opvolging versnellen
                  en processen overzichtelijker maken.
                </p>
                <p className="mt-4 leading-8">
                  Geen onnodig ingewikkelde trajecten, maar praktische automatisering
                  die aansluit op uw werkwijze en direct waarde toevoegt in de dagelijkse praktijk.
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
                Ontdek in een kort gesprek wat automatisering voor uw bedrijf kan opleveren.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                In een vrijblijvende afspraak kijken we samen waar de meeste tijd verloren
                gaat in facturatie, inboxverwerking en klantmails — en waar de grootste winst te behalen valt.
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
                placeholder="Vertel kort waar momenteel de meeste tijd in gaat zitten"
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
              className="h-28 w-auto"
            />
            <div>
              <div className="font-medium text-[#21467f]">JHGProcess-Solutions</div>
              <div className="mt-1">
                Facturatie automatisering, inbox automatisering en klantmails automatisering
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