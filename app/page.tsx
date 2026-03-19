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
              className="h-[26px] w-auto sm:h-[34px]"
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
                Voor bedrijven die 5 tot 25+ uur per week willen besparen op terugkerende administratie en mailboxbeheer
              </div>

              <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-[#21467f] sm:text-5xl lg:text-6xl">
                Bespaar structureel tijd door facturatie en mailboxbeheer slimmer te automatiseren.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                JHGProcess-Solutions helpt bedrijven om terugkerende processen rondom
                facturatie en mailboxbeheer structureel slimmer te laten verlopen.
                Geen losse tool, maar een praktische automatiseringsoplossing die
                handmatig werk vermindert, opvolging versnelt en meer grip geeft op
                processen die iedere week terugkomen.
              </p>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Zo ontstaat er minder losse administratie, minder foutgevoeligheid,
                meer overzicht en meer capaciteit om te groeien zonder extra chaos.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#afspraak"
                  className="rounded-2xl bg-[#21467f] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb]"
                >
                  Vrijblijvende afspraak maken
                </a>
                <a
                  href="#pakketten"
                  className="rounded-2xl border border-[#b7cae3] px-6 py-3 text-center text-sm font-medium text-[#21467f] transition hover:border-[#3f89cb] hover:text-[#3f89cb]"
                >
                  Bekijk onze oplossingen
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-lg font-semibold text-[#21467f]">Facturatie</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Minder handmatige stappen, snellere verwerking en meer grip op terugkerende factuurstromen
                  </div>
                </div>
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-lg font-semibold text-[#21467f]">Mailbox</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Slimme verwerking, voorgestelde antwoorden en snellere opvolging
                  </div>
                </div>
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-lg font-semibold text-[#21467f]">Dashboard</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Inzicht en controle voor klanten die gebruikmaken van mailbox automatisering
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
                    "Informatie komt automatisch binnen via formulieren, e-mail of bestaande systemen",
                    "Het systeem analyseert automatisch wat er binnenkomt en bepaalt direct de juiste vervolgactie",
                    "Facturen worden automatisch opgebouwd, inclusief klantgegevens, regels en bedragen",
                    "Facturen en herinneringen worden automatisch verzonden zonder handmatige acties",
                    "Binnenkomende klantmails worden geanalyseerd, gesorteerd en voorbereid voor opvolging",
                    "Antwoorden kunnen automatisch worden voorgesteld en verzonden op basis van de inhoud en context",
                    "Via een eigen dashboard blijft altijd zichtbaar wat er gebeurt en waar actie nodig is",
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
                Praktische automatisering voor processen die iedere week tijd, rust en capaciteit kosten.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Onze oplossingen richten zich op processen waar binnen bedrijven vaak
                ongemerkt veel capaciteit verloren gaat: facturatie en mailboxbeheer.
                Door deze processen slimmer te automatiseren ontstaat meer snelheid,
                meer structuur en minder afhankelijkheid van handmatig werk.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-[#d9e4f2] bg-[#f8fbff] p-8 shadow-sm">
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                  Facturatie automatisering
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-[#21467f]">
                  Van invoer tot verzending slimmer, sneller en consistenter geregeld
                </h3>
                <p className="mt-4 text-slate-600">
                  Facturen worden automatisch opgebouwd op basis van aangeleverde gegevens
                  of binnenkomende informatie. Het systeem genereert de factuur, maakt
                  het document aan, verstuurt deze en verwerkt relevante gegevens direct
                  door in de administratie. Zo verdwijnt een groot deel van het terugkerende
                  handmatige werk uit het proces.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li>• Automatische opbouw van factuurregels</li>
                  <li>• Genereren en verzenden zonder onnodige handmatige stappen</li>
                  <li>• Minder fouten en minder losse administratie</li>
                  <li>• Koppeling met Moneybird waar relevant</li>
                  <li>• Geschikt voor bedrijven met terugkerend volume</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#d9e4f2] bg-[#f8fbff] p-8 shadow-sm">
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                  Mailbox automatisering
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-[#21467f]">
                  Meer overzicht, snellere opvolging en minder druk op het team
                </h3>
                <p className="mt-4 text-slate-600">
                  Binnenkomende e-mails worden automatisch geanalyseerd en verwerkt.
                  Het systeem herkent de context van berichten, bepaalt wat ermee moet
                  gebeuren en kan slimme antwoorden voorstellen of direct versturen.
                  Zo ontstaat er minder mailbox chaos, minder vertraging en meer grip
                  op wat echt aandacht nodig heeft.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li>• Automatische analyse van binnenkomende e-mails</li>
                  <li>• Herkennen van onderwerp, prioriteit en vervolgstappen</li>
                  <li>• Antwoorden automatisch voorstellen en versturen waar passend</li>
                  <li>• Eigen dashboard voor mailbox automatisering</li>
                  <li>• Minder mailbox chaos en snellere opvolging</li>
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
                Duidelijk voor uw team, krachtig op de achtergrond.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                De werkwijze blijft overzichtelijk, terwijl automatisering op de achtergrond
                zorgt voor verwerking, opvolging, integratie en inzicht.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "1. Invoer en signalering",
                  text: "Gegevens komen binnen via formulier, bestaande systemen of e-mail.",
                },
                {
                  title: "2. Analyse en besluitvorming",
                  text: "Het systeem beoordeelt automatisch de inhoud en bepaalt welke actie nodig is.",
                },
                {
                  title: "3. Verwerking en opvolging",
                  text: "Facturatie of mailboxbeheer wordt uitgevoerd zonder onnodige handmatige tussenstappen.",
                },
                {
                  title: "4. Inzicht en controle",
                  text: "Belangrijke informatie wordt bijgewerkt in gekoppelde systemen en dashboards.",
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
            <div className="max-w-4xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#b7cae3]">
                Pakketten
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Kies de oplossing die past bij uw proces en groeifase.
              </h2>
              <p className="mt-4 text-lg text-slate-200">
                Bekijk per oplossing de bijbehorende pagina met uitleg, prijzen en verwachte tijdsbesparing.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-5">
                <Link
                  href="/pakketten/facturatie"
                  className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#3f89cb,#21467f)] p-8 shadow-lg transition hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative flex items-center justify-between gap-6">
                    <div>
                      <div className="text-3xl font-semibold text-white">Facturatie automatisering</div>
                      <div className="mt-2 max-w-xl text-sm leading-7 text-slate-100">
                        Minder handmatige verwerking, snellere facturatie en meer grip op terugkerende administratieve processen.
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-sm font-medium text-white/90">Meer informatie</div>
                      <div className="mt-2 text-3xl text-white transition group-hover:translate-x-1">→</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/pakketten/mailbox"
                  className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#2e5f9f,#19365f)] p-8 shadow-lg transition hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative flex items-center justify-between gap-6">
                    <div>
                      <div className="text-3xl font-semibold text-white">Mailbox automatisering</div>
                      <div className="mt-2 max-w-xl text-sm leading-7 text-slate-100">
                        Slimme verwerking van inkomende e-mails, voorgestelde antwoorden en snellere opvolging zonder standaardmatige mailbox chaos.
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-sm font-medium text-white/90">Meer informatie</div>
                      <div className="mt-2 text-3xl text-white transition group-hover:translate-x-1">→</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/pakketten/combinatie"
                  className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#547fba,#21467f)] p-8 shadow-lg transition hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative flex items-center justify-between gap-6">
                    <div>
                      <div className="text-3xl font-semibold text-white">Combinatiepakket</div>
                      <div className="mt-2 max-w-xl text-sm leading-7 text-slate-100">
                        Voor bedrijven die facturatie en mailboxbeheer tegelijk willen ontlasten en direct capaciteit willen terugwinnen.
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-sm font-medium text-white/90">Meer informatie</div>
                      <div className="mt-2 text-3xl text-white transition group-hover:translate-x-1">→</div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8">
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#b7cae3]">
                  Wat u hier vindt
                </div>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  Bekijk per traject wat het oplevert.
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  Op iedere pagina ziet u welke pakketten beschikbaar zijn, vanaf welke maandprijs
                  ze starten, hoeveel tijd ze gemiddeld kunnen besparen en voor welk type bedrijf
                  ze het best passen.
                </p>
                <a
                  href="#afspraak"
                  className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-medium text-[#21467f] transition hover:bg-[#eaf1fa]"
                >
                  Vrijblijvend kennismaken
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="over-ons" className="bg-[#f4f7fb] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
                  Over ons
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
                  Praktische automatisering, gebouwd vanuit echte procesdruk.
                </h2>
              </div>
              <div className="text-slate-600">
                <p className="leading-8">
                  JHGProcess-Solutions helpt bedrijven om terugkerende processen rondom
                  facturatie en mailboxbeheer structureel slimmer te laten verlopen.
                  Niet met algemene software die overal een beetje op past, maar met
                  praktische automatisering die aansluit op de werkwijze, het volume
                  en de complexiteit van het bedrijf.
                </p>
                <p className="mt-4 leading-8">
                  Wij richten ons op processen waar wekelijks ongemerkt veel tijd in
                  verdwijnt: facturen opbouwen, gegevens verwerken, mailboxen bijhouden,
                  opvolging bewaken en uitzonderingen handmatig oplossen.
                </p>
                <p className="mt-4 leading-8">
                  Voor facturatie kunnen we waar relevant koppelen met Moneybird. Voor
                  mailbox automatisering leveren we daarnaast een eigen dashboard, zodat
                  klanten niet alleen automatiseren, maar ook meer controle houden op
                  wat er binnenkomt en wat er opgevolgd moet worden.
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
                Ontdek waar binnen uw bedrijf direct tijd, rust en efficiëntie te winnen is.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                In een kort gesprek kijken we samen waar facturatie of mailboxbeheer
                onnodig veel tijd kost, en hoe automatisering daar direct verschil
                kan maken in tijdswinst, overzicht en opvolging.
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
              className="h-[34px] w-auto"
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