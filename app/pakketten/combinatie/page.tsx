import Link from "next/link";

const packages = [
  {
    name: "Starter",
    volume: "Tot 150 facturen + tot 1.000 e-mails per maand",
    price: "Vanaf €549 / maand",
    time: "Gemiddeld 8–14 uur per week · 32–56 uur per maand besparing",
    description:
      "Voor bedrijven die zowel facturatie als mailboxbeheer slimmer willen organiseren en direct merkbaar tijd willen terugwinnen in de dagelijkse operatie.",
    points: [
      "Facturatie en mailboxbeheer in één werkwijze",
      "Minder losse administratie en minder handmatig werk",
      "Snellere opvolging en meer structuur",
      "Eigen dashboard voor mailbox automatisering",
    ],
  },
  {
    name: "Groei",
    volume: "150 – 750 facturen + 1.000 – 3.000 e-mails per maand",
    price: "Vanaf €899 / maand",
    time: "Gemiddeld 12–22 uur per week · 48–88 uur per maand besparing",
    description:
      "Voor groeiende bedrijven waar meerdere terugkerende processen tegelijk beginnen te drukken op tijd, overzicht en interne capaciteit.",
    points: [
      "Combinatie van facturatie- en mailbox automatisering",
      "Meer procescontrole en minder foutgevoeligheid",
      "Sterkere koppeling tussen administratie en communicatie",
      "Geschikt voor bedrijven die willen opschalen zonder extra chaos",
    ],
  },
  {
    name: "Scale",
    volume: "750+ facturen + 3.000+ e-mails per maand",
    price: "Vanaf €1.349 / maand",
    time: "Gemiddeld 20–35+ uur per week · 80–140+ uur per maand besparing",
    description:
      "Voor organisaties met grotere volumes en complexere workflows, waar brede automatisering directe impact heeft op rust, capaciteit en winstgevendheid.",
    points: [
      "Maximale tijdswinst op meerdere processen tegelijk",
      "Geschikt voor hogere volumes en complexere uitzonderingen",
      "Meer grip op opvolging, verwerking en dashboarding",
      "Sterke premium oplossing voor bedrijven met structurele druk",
    ],
  },
];

export default function CombinatiePage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <section className="bg-[#21467f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/" className="text-sm text-[#b7cae3] hover:text-white">
            ← Terug naar home
          </Link>
          <div className="mt-6 text-sm uppercase tracking-[0.2em] text-[#b7cae3]">
            Combinatiepakket
          </div>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Facturatie en mailboxbeheer in één slimme, schaalbare werkwijze.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            Voor bedrijven die meerdere terugkerende processen tegelijk willen ontlasten en daar direct capaciteit mee willen terugwinnen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#21467f]">
              Pakketten combinatie automatisering
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Voor bedrijven die facturatie en mailboxbeheer tegelijk structureel slimmer willen laten verlopen.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((item) => (
              <div key={item.name} className="rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm">
                <div className="text-lg font-semibold text-[#21467f]">{item.name}</div>
                <div className="mt-2 text-sm font-medium text-slate-600">{item.volume}</div>
                <div className="mt-4 text-3xl font-semibold text-[#21467f]">{item.price}</div>
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
              In een kort gesprek kijken we waar facturatie en mailboxbeheer nu samen druk geven op het team
              en welk pakket daar logisch op aansluit.
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