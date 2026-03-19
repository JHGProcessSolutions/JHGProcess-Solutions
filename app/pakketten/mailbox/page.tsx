import Link from "next/link";

const packages = [
  {
    name: "Starter",
    volume: "Tot 1.000 e-mails per maand",
    price: "Vanaf €329 / maand",
    time: "Gemiddeld 4–8 uur per week · 16–32 uur per maand besparing",
    description:
      "Voor bedrijven die mailboxbeheer overzichtelijker willen maken en minder tijd willen verliezen aan verwerken, routeren en opvolgen van berichten.",
    points: [
      "Automatische analyse van binnenkomende e-mails",
      "Slim routeren en klaarzetten voor opvolging",
      "Voorgestelde antwoorden op basis van inhoud en context",
      "Eigen dashboard voor mailbox automatisering",
    ],
  },
  {
    name: "Groei",
    volume: "1.000 – 3.000 e-mails per maand",
    price: "Vanaf €599 / maand",
    time: "Gemiddeld 8–15 uur per week · 32–60 uur per maand besparing",
    description:
      "Voor bedrijven waar mailboxbeheer steeds zwaarder op de organisatie drukt en waar snelheid, prioritering en processtructuur belangrijk zijn.",
    points: [
      "Herkennen van onderwerpen, prioriteit en vervolgstappen",
      "Snellere verwerking van grotere volumes",
      "Automatisch voorgestelde en verzendbare antwoorden waar passend",
      "Geschikt voor teams met terugkerende mailboxdruk",
    ],
  },
  {
    name: "Scale",
    volume: "3.000+ e-mails per maand",
    price: "Vanaf €899 / maand",
    time: "Gemiddeld 15–25+ uur per week · 60–100+ uur per maand besparing",
    description:
      "Voor organisaties waar mailboxbeheer veel capaciteit kost en waar automatisering direct helpt om rust, overzicht en snelheid terug te brengen.",
    points: [
      "Sterke ontlasting van mailboxprocessen",
      "Meer overzicht bij hoge volumes en uitzonderingen",
      "Slimme verwerking en opvolging zonder standaardmatige mailboxafhandeling",
      "Eigen dashboard voor controle en inzicht",
    ],
  },
];

export default function MailboxPage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <section className="bg-[#21467f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/" className="text-sm text-[#b7cae3] hover:text-white">
            ← Terug naar home
          </Link>
          <div className="mt-6 text-sm uppercase tracking-[0.2em] text-[#b7cae3]">
            Mailbox automatisering
          </div>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Meer overzicht, snellere opvolging en minder mailboxdruk op uw team.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            Voor bedrijven die mailboxbeheer niet alleen overzichtelijker willen maken, maar structureel slimmer willen laten verlopen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#21467f]">
              Pakketten mailbox automatisering
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Gericht op minder chaos, snellere verwerking en meer grip op berichten die echt aandacht nodig hebben.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((item) => (
              <div key={item.name} className="rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm">
                <div className="text-lg font-semibold text-[#21467f]">{item.name}</div>
                <div className="mt-2 text-sm font-medium text-slate-600">{item.volume}</div>

                <div className="mt-4">
                  <div className="text-3xl font-semibold text-[#21467f]">{item.price}</div>
                  <div className="mt-1 text-xs text-slate-500">excl. btw</div>
                </div>

                <div className="mt-3 rounded-2xl bg-[#f4f7fb] px-4 py-3 text-sm text-[#21467f] border border-[#d9e4f2]">
                  {item.time}
                </div>
                <p className="mt-5 min-h-[120px] text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-[#d9e4f2] bg-[#f8fbff] p-8">
            <h3 className="text-2xl font-semibold text-[#21467f]">
              Vrijblijvend bespreken wat past
            </h3>
            <p className="mt-4 max-w-3xl text-slate-600">
              In een kort gesprek kijken we hoeveel tijd mailboxbeheer nu kost, hoe het team werkt
              en welk pakket het beste aansluit op de werkwijze en het volume.
            </p>
            <Link
              href="/#afspraak"
              className="mt-6 inline-flex rounded-2xl bg-[#21467f] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#3f89cb]"
            >
              Vrijblijvende afspraak maken
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}