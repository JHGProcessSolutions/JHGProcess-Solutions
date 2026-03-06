export default function JHGProcessSolutionsWebsite() {
  const pricing = [
    {
      name: 'Starter',
      setup: '€2.500 setup',
      monthly: '€495 / maand',
      volume: 'Tot 150 facturen en 500 e-mails per maand',
      featured: false,
    },
    {
      name: 'Professional',
      setup: '€5.000 setup',
      monthly: '€995 / maand',
      volume: 'Tot 750 facturen en 2.500 e-mails per maand',
      featured: true,
    },
    {
      name: 'Enterprise',
      setup: 'Vanaf €10.000 setup',
      monthly: 'Vanaf €1.950 / maand',
      volume: 'Maatwerk volumes, extra support en SLA',
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
              className="h-12 w-auto"
            />
            <div>
              <div className="text-xl font-semibold tracking-tight text-[#21467f]">JHG Process Solutions</div>
              <div className="text-sm text-slate-500">Automatisering van facturatie en klantcommunicatie</div>
            </div>
          </div>
          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#diensten" className="transition hover:text-[#21467f]">Diensten</a>
            <a href="#hoe-het-werkt" className="transition hover:text-[#21467f]">Hoe het werkt</a>
            <a href="#prijzen" className="transition hover:text-[#21467f]">Prijzen</a>
            <a href="#demo" className="transition hover:text-[#21467f]">Demo</a>
          </nav>
          <a
            href="#demo"
            className="rounded-2xl bg-[#21467f] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb]"
          >
            Plan een demo
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(63,137,203,0.14),_transparent_28%),radial-gradient(circle_at_left,_rgba(33,70,127,0.12),_transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#d9e4f2] bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                Voor bedrijven die minder tijd kwijt willen zijn aan administratie en e-mailverwerking
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#21467f] sm:text-5xl lg:text-6xl">
                Facturatie en klantmails volledig geautomatiseerd.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Uw team hoeft alleen nog maar een formulier in te vullen of een e-mail binnen te krijgen. Daarna regelt het systeem automatisch de rest: van facturen en PDF’s tot verzending, opvolging en slimme inboxverwerking.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#demo"
                  className="rounded-2xl bg-[#21467f] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb]"
                >
                  Plan een demo
                </a>
                <a
                  href="#prijzen"
                  className="rounded-2xl border border-[#b7cae3] px-6 py-3 text-center text-sm font-medium text-[#21467f] transition hover:border-[#3f89cb] hover:text-[#3f89cb]"
                >
                  Bekijk prijzen
                </a>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#21467f]">A-Z</div>
                  <div className="mt-1 text-sm text-slate-500">Van aanvraag tot betalingsherinnering</div>
                </div>
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#21467f]">Tijdwinst</div>
                  <div className="mt-1 text-sm text-slate-500">Minder handmatig werk en minder fouten</div>
                </div>
                <div className="rounded-2xl border border-[#d9e4f2] bg-white p-4 shadow-sm">
                  <div className="text-2xl font-semibold text-[#21467f]">Schaalbaar</div>
                  <div className="mt-1 text-sm text-slate-500">Groeit mee met factuur- en e-mailvolume</div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d9e4f2] bg-white p-6 shadow-xl shadow-[#d7e5f7]">
              <div className="rounded-[1.5rem] bg-[#21467f] p-6 text-white">
                <div className="text-sm uppercase tracking-[0.2em] text-[#b7cae3]">Workflow voorbeeld</div>
                <div className="mt-6 space-y-4">
                  {[
                    'Formulier ingevuld of e-mail ontvangen',
                    'Het systeem analyseert en verwerkt automatisch',
                    'Factuur wordt opgebouwd en PDF wordt gegenereerd',
                    'Factuur of conceptantwoord wordt automatisch verzonden',
                    'Boekhouding, logging en opvolging worden bijgewerkt',
                    'Herinneringen en slimme inboxacties lopen vanzelf door',
                  ].map((step, index) => (
                    <div key={step} className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
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
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">Diensten</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
              Eén compleet systeem voor facturatie én klantcommunicatie.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Alle pakketten bevatten het volledige plaatje. Het verschil zit niet in functies, maar in volume, support en schaalbaarheid.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">Facturatie automatisering</div>
              <h3 className="mt-3 text-2xl font-semibold text-[#21467f]">Van formulier tot betaling automatisch geregeld</h3>
              <p className="mt-4 text-slate-600">
                Uw medewerkers vullen alleen een formulier in. Daarna loopt het hele proces automatisch door: factuurregels, PDF, verzending, boekhouding en betalingsherinneringen.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• Facturen automatisch genereren</li>
                <li>• PDF’s automatisch maken en verzenden</li>
                <li>• Koppeling met uw boekhouding</li>
                <li>• Automatische betalingsherinneringen</li>
                <li>• Sneller betaald en minder handmatig werk</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">AI inbox automatisering</div>
              <h3 className="mt-3 text-2xl font-semibold text-[#21467f]">Klantvragen slimmer en consistenter verwerken</h3>
              <p className="mt-4 text-slate-600">
                Binnenkomende e-mails worden automatisch geanalyseerd, gecategoriseerd en samengevat. Het systeem kan acties starten of conceptantwoorden voorbereiden.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• Klantvragen automatisch analyseren</li>
                <li>• Urgentie en intentie herkennen</li>
                <li>• Samenvattingen en conceptantwoorden</li>
                <li>• Berichten naar de juiste afdeling routeren</li>
                <li>• Snellere en consistenter klantcommunicatie</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="hoe-het-werkt" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">Hoe het werkt</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
                Eenvoudig voor uw team, krachtig achter de schermen.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: '1. Invoer of e-mail',
                  text: 'Een medewerker vult een formulier in of een klantmail komt binnen.',
                },
                {
                  title: '2. Automatische verwerking',
                  text: 'Het systeem analyseert de informatie en bepaalt automatisch de juiste vervolgstappen.',
                },
                {
                  title: '3. Uitvoering',
                  text: 'Facturen, conceptantwoorden, routing en opvolging worden automatisch klaargezet of uitgevoerd.',
                },
                {
                  title: '4. Inzicht en controle',
                  text: 'U houdt overzicht zonder losse handelingen, foutgevoelige stappen of vertraging.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-[#d9e4f2] bg-[#f8fbff] p-6 shadow-sm">
                  <div className="text-lg font-semibold text-[#21467f]">{item.title}</div>
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
                title: 'Minder administratie',
                text: 'Taken die normaal uren per week kosten worden grotendeels automatisch verwerkt.',
              },
              {
                title: 'Sneller betaald',
                text: 'Facturen gaan sneller de deur uit en opvolging gebeurt automatisch.',
              },
              {
                title: 'Betere klantcommunicatie',
                text: 'Klantvragen worden sneller en consistenter opgevolgd zonder extra druk op het team.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#21467f]">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="prijzen" className="bg-[#21467f] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#b7cae3]">Prijzen</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Alle pakketten bevatten het volledige systeem.
              </h2>
              <p className="mt-4 text-lg text-slate-200">
                Elk pakket bevat zowel facturatie automatisering als AI inbox automatisering. Het prijsverschil zit in het aantal facturen, e-mails en de mate van support en schaalbaarheid.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[2rem] border p-8 shadow-sm ${
                    plan.featured
                      ? 'border-white bg-white text-slate-950'
                      : 'border-white/10 bg-white/10 text-white'
                  }`}
                >
                  <div className="text-lg font-semibold">{plan.name}</div>
                  <div className={`mt-4 text-sm ${plan.featured ? 'text-slate-500' : 'text-slate-200'}`}>{plan.setup}</div>
                  <div className="mt-2 text-3xl font-semibold">{plan.monthly}</div>
                  <div className={`mt-4 rounded-2xl px-4 py-3 text-sm ${plan.featured ? 'bg-[#f4f7fb] text-[#21467f]' : 'bg-white/10 text-white'}`}>
                    {plan.volume}
                  </div>
                  <ul className={`mt-6 space-y-3 text-sm ${plan.featured ? 'text-slate-700' : 'text-slate-100'}`}>
                    <li>• Volledige facturatie automatisering</li>
                    <li>• Volledige AI inbox automatisering</li>
                    <li>• Implementatie en inrichting</li>
                    <li>• Monitoring, logging en onderhoud</li>
                    <li>• Doorlopende support</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-[#d9e4f2] bg-white p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#3f89cb]">Demo aanvragen</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#21467f] sm:text-4xl">
                Ontdek in 10 minuten hoeveel tijd uw bedrijf kan besparen.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                In een korte demo laten we zien hoe uw facturatie en klantmails grotendeels automatisch verwerkt kunnen worden.
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
              <button
                type="button"
                className="rounded-2xl bg-[#21467f] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#3f89cb]"
              >
                Demo aanvragen
              </button>
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
              className="h-10 w-auto"
            />
            <div>
              <div className="font-medium text-[#21467f]">JHG Process Solutions</div>
              <div>Automatisering van facturatie en klantcommunicatie</div>
            </div>
          </div>
          <div>© 2026 JHG Process Solutions. Alle rechten voorbehouden.</div>
        </div>
      </footer>
    </div>
  );
}
