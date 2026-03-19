import Link from "next/link";

const packages = [
  {
    name: "Starter",
    volume: "Tot 150 facturen per maand",
    price: "Vanaf €279 / maand",
    time: "Gemiddeld 3–6 uur per week · 12–24 uur per maand besparing",
    description:
      "Voor kleinere bedrijven die hun facturatie professioneler willen inrichten en terugkerende administratieve handelingen structureel willen terugdringen.",
    points: [
      "Automatische opbouw van facturen",
      "Genereren en verzenden zonder onnodig handmatig werk",
      "Minder fouten en meer grip op terugkerende processen",
      "Koppeling met Moneybird waar relevant",
    ],
  },
  {
    name: "Groei",
    volume: "150 – 750 facturen per maand",
    price: "Vanaf €449 / maand",
    time: "Gemiddeld 5–12 uur per week · 20–48 uur per maand besparing",
    description:
      "Voor groeiende bedrijven waar facturatie steeds meer tijd begint te kosten en waar snelheid, overzicht en schaalbaarheid belangrijk worden.",
    points: [
      "Meer procescontrole bij hoger volume",
      "Snellere verwerking en minder foutgevoeligheid",
      "Sterkere aansluiting op bestaande workflows",
      "Geschikt voor bedrijven met terugkerende factuurstromen",
    ],
  },
  {
    name: "Scale",
    volume: "750+ facturen per maand",
    price: "Vanaf €699 / maand",
    time: "Gemiddeld 10–20+ uur per week · 40–80+ uur per maand besparing",
    description:
      "Voor organisaties met grotere volumes en complexere processen, waar automatisering directe impact heeft op capaciteit, opvolging en efficiëntie.",
    points: [
      "Sterke tijdswinst op grotere aantallen",
      "Geschikt voor complexere en terugkerende processen",
      "Procesgerichte automatisering met meer grip op uitvoering",
      "Meer rust en minder administratieve druk op het team",
    ],
  },
];

export default function FacturatiePage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <section className="bg-[#21467f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/" className="text-sm text-[#b7cae3] hover:text-white">
            ← Terug naar home
          </Link>
          <div className="mt-6 text-sm uppercase tracking-[0.2em] text-[#b7cae3]">
            Facturatie automatisering
          </div>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Minder handmatig werk, snellere facturatie en meer grip op terugkerende processen.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            Voor bedrijven die facturatie niet alleen willen digitaliseren, maar structureel slimmer willen laten verlopen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#21467f]">
              Pakketten facturatie automatisering
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Kies het pakket dat past bij uw volume, procescomplexiteit en gewenste mate van automatisering.
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
              In een kort gesprek kijken we welke werkwijze u nu heeft, hoeveel tijd daar wekelijks in gaat zitten
              en welk pakket daar logisch bij past.
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