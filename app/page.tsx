export default function JHGProcessSolutionsWebsite() {
  const afspraakMailto =
    "mailto:info@jhgprocess-solutions.com?subject=Vrijblijvende%20afspraak%20aanvragen%20JHG%20Process%20Solutions";

  const packages = [
    {
      name: "Facturatie automatisering",
      description:
        "Voor bedrijven die hun facturatieproces van invoer tot verzending en opvolging grotendeels automatisch willen laten verlopen.",
      points: [
        "Automatische factuuropbouw",
        "PDF generatie en verzending",
        "Koppeling met boekhouding",
        "Betalingsherinneringen en opvolging",
      ],
      featured: false,
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
      featured: true,
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
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#d9e4f2] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <img
              src="/LOGO - JHGProcess-Solutions.png"
              alt="JHG Process Solutions"
              className="h-24 w-auto"
            />
            <div>
              <div className="text-2xl font-semibold tracking-tight text-[#21467f]">
                JHG Process Solutions
              </div>
              <div className="text-sm text-slate-500">
                Automatisering van facturatie, inbox en klantcommunicatie
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
            <a href="#afspraak" className="transition hover:text-[#21467f]">
              Afspraak
            </a>
          </nav>

          <a
            href={afspraakMailto}
            className="rounded-2xl bg-[#21467f] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb]"
          >
            Vrijblijvende afspraak
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(63,137,203,0.14),_transparent_28%),radial-gradient(circle_at_left,_rgba(33,70,127,0.12),_transparent_25%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#d9e4f2] bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                Voor bedrijven die slimmer willen werken met minder handmatig werk
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#21467f] sm:text-5xl lg:text-6xl">
                Facturatie en inbox volledig geautomatiseerd.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Automatiseer terugkerende processen rondom facturatie,
                inboxverwerking en klantcommunicatie. Uw team hoeft alleen nog
                maar een formulier in te vullen of een e-mail binnen te krijgen.
                Daarna regelt het systeem automatisch de rest: van verwerking en
                opvolging tot verzending, samenvattingen en slimme workflow-acties.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={afspraakMailto}
                  className="rounded-2xl bg-[#21467f] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb]"
                >
                  Plan een vrijblijvende afspraak
                </a>
                <a
                  href="#pakketten"
                  className="rounded-2xl border border-[#b7cae3] px-6 py-3 text-center text-sm font-medium text-[#21467f] transition hover:border-[#3f89cb] hover:text-[#3f89cb]"
                >
                  Bekijk mogelijkheden
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#21467f]">A-Z</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Van invoer tot opvolging automatisch geregeld
                  </div>
                </div>
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#21467f]">Tijdwinst</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Minder handmatig werk en minder fouten
                  </div>
                </div>
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#21467f]">Schaalbaar</div>
                  <div className="mt-1 text-sm text-slate-500">
                    Groeit mee met uw volume en processen
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

        <section id="diensten" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">
              Diensten
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
              Eén slimme oplossing voor facturatie en inboxverwerking.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              U kiest voor alleen facturatie, alleen inbox automatisering of een
              combinatie van beide. De inrichting wordt afgestemd op uw bedrijf,
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
                Uw medewerkers vullen alleen een formulier in. Daarna loopt het hele proces
                automatisch door: opbouw van factuurregels, PDF generatie, verzending,
                boekhouding en opvolging.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• Facturen automatisch genereren</li>
                <li>• PDF’s automatisch maken en verzenden</li>
                <li>• Koppeling met boekhouding</li>
                <li>• Automatische betalingsherinneringen</li>
                <li>• Sneller betaald en minder handmatig werk</li>
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

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
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
                title: "Professionelere communicatie",
                text: "Berichten worden consistenter en overzichtelijker opgevolgd zonder extra druk op het team.",
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
                  className={`rounded-[2rem] border p-8 shadow-sm ${
                    item.featured
                      ? "border-white bg-white text-slate-950"
                      : "border-white/10 bg-white/10 text-white"
                  }`}
                >
                  <div className="text-lg font-semibold">{item.name}</div>
                  <p
                    className={`mt-4 text-sm leading-6 ${
                      item.featured ? "text-slate-600" : "text-slate-100"
                    }`}
                  >
                    {item.description}
                  </p>

                  <div
                    className={`mt-6 rounded-2xl px-4 py-3 text-sm ${
                      item.featured
                        ? "bg-[#f4f7fb] text-[#21467f]"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    Prijs op aanvraag, afgestemd op uw bedrijf en wensen
                  </div>

                  <ul
                    className={`mt-6 space-y-3 text-sm ${
                      item.featured ? "text-slate-700" : "text-slate-100"
                    }`}
                  >
                    {item.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
                In een vrijblijvende afspraak kijken we samen waar de meeste
                tijd verloren gaat in facturatie, inboxverwerking en
                klantcommunicatie — en waar de grootste winst te behalen valt.
              </p>
            </div>

            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Bedrijfsnaam"
                className="rounded-2xl border border-[#c8d8ec] px-4 py-3 outline-none transition focus:border-[#21467f]"
              />
              <input
                type="text"
                placeholder="Naam"
                className="rounded-2xl border border-[#c8d8ec] px-4 py-3 outline-none transition focus:border-[#21467f]"
              />
              <input
                type="email"
                placeholder="E-mailadres"
                className="rounded-2xl border border-[#c8d8ec] px-4 py-3 outline-none transition focus:border-[#21467f]"
              />
              <textarea
                placeholder="Vertel kort waar momenteel de meeste tijd in gaat zitten"
                rows={5}
                className="rounded-2xl border border-[#c8d8ec] px-4 py-3 outline-none transition focus:border-[#21467f]"
              />
              <a
                href={afspraakMailto}
                className="inline-block rounded-2xl bg-[#21467f] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb]"
              >
                Vrijblijvende afspraak aanvragen
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d9e4f2] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/LOGO - JHGProcess-Solutions.png"
              alt="JHG Process Solutions"
              className="h-16 w-auto"
            />
            <div>
              <div className="font-medium text-[#21467f]">JHG Process Solutions</div>
              <div>Automatisering van facturatie, inbox en klantcommunicatie</div>
            </div>
          </div>
          <div>© 2026 JHG Process Solutions. Alle rechten voorbehouden.</div>
        </div>
      </footer>
    </div>
  );
}