const coffees = [
  {
    name: "Evanston Reserve",
    category: "LIGHT ROAST",
    format: "Ground Coffee",
    notes: "Honey • Citrus • Cocoa",
    description:
      "A bright, refined light roast with a smooth sweetness and a clean, expressive finish.",
    image: "/evanston-reserve.webp",
    link: "https://griffincoffeedrinks.coffeestore.app/catalog/ibcMvat1pkFRt0XUxZfRl",
    accent: "#D89A16",
  },
  {
    name: "Bronzeville Roast",
    category: "MEDIUM ROAST",
    format: "Ground Coffee",
    notes: "Milk Chocolate • Honey • Roasted Peanuts",
    description:
      "Balanced and approachable, with comforting chocolate notes, gentle sweetness, and roasted character.",
    image: "/bronzeville-roast.webp",
    link: "https://griffincoffeedrinks.coffeestore.app/catalog/t82hubRhPPQH_vn3wcdPC",
    accent: "#C75B20",
  },
  {
    name: "Humboldt Blend",
    category: "DARK ROAST",
    format: "Ground Coffee",
    notes: "Dark Cocoa • Toasted Walnut • Caramelized Brown Sugar",
    description:
      "Bold and full-bodied with deep cocoa, toasted nuttiness, and a rich caramelized sweetness.",
    image: "/humboldt-blend.webp",
    link: "https://griffincoffeedrinks.coffeestore.app/catalog/lABMWbKaXnVqENa5OUexS",
    accent: "#1759D1",
  },
  {
    name: "Riverdale Decaf",
    category: "DARK ROAST • DECAF",
    format: "Ground Coffee",
    notes: "Dark Chocolate • Smooth • Full",
    description:
      "A rich, satisfying dark roast experience for those moments when you want the coffee without the caffeine.",
    image: "/riverdale-decaf.webp",
    link: "https://griffincoffeedrinks.coffeestore.app/catalog/2Qsgaduj-HxvDcGFPZS83",
    accent: "#7BAF36",
  },
  {
    name: "Evanston Reserve",
    category: "LIGHT ROAST",
    format: "Coffee Pods",
    notes: "Honey • Citrus • Cocoa",
    description:
      "The bright character of Evanston Reserve in a convenient pod made for your everyday ritual.",
    image: "/evanston-pods.webp",
    link: "https://griffincoffeedrinks.coffeestore.app/catalog/m7cxV2HtIOBvzN_THpZFC",
    accent: "#D89A16",
  },
  {
    name: "Humboldt Blend",
    category: "DARK ROAST",
    format: "Coffee Pods",
    notes: "Dark Cocoa • Toasted Walnut • Caramelized Brown Sugar",
    description:
      "Bold Humboldt character in a convenient pod, bringing depth and richness to every cup.",
    image: "/humboldt-pods.webp",
    link: "https://griffincoffeedrinks.coffeestore.app/catalog/y9UhVqIbCDE6S_Ne6_CTK",
    accent: "#1759D1",
  },
];

export default function CoffeePage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#111111]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[68vh] overflow-hidden bg-[#111111] text-white">

        <img
          src="/hero-gathering.png"
          alt="Griffin Coffee"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-7xl flex-col px-6 py-5">

          {/* Header */}

          <header className="flex items-center justify-between">
            <a href="/" aria-label="Griffin Coffee home">
              <img
                src="/gc-bird-name.png"
                alt="Griffin Coffee"
                className="h-32 w-auto sm:h-40"
              />
            </a>
          </header>

          {/* Hero Copy */}

          <div className="mt-auto max-w-4xl pb-12 pt-24">

            <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#f28c28] sm:text-2xl sm:tracking-[0.35em]">
              Coffee Worth Gathering For
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Coffee for the
              <br />
              moments that matter.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Griffin Coffee was created for more than the cup. It&apos;s
              coffee for the mornings that start something, the afternoons
              that keep you going, the conversations that bring people
              together, and the moments worth slowing down for.
            </p>

            <a
              href="#collection"
              className="mt-9 inline-flex rounded-full bg-[#f28c28] px-7 py-4 text-sm font-semibold text-[#111111] transition hover:scale-[1.02]"
            >
              Explore the Coffee
            </a>

          </div>
        </div>
      </section>

      {/* =========================================================
          COLLECTION INTRO
      ========================================================= */}

      <section
        id="collection"
        className="bg-[#f5f3ef] px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f28c28]">
                The Griffin Coffee Collection
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.035em] sm:text-6xl">
                Six coffees.
                <br />
                One Griffin experience.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-black/55 lg:pb-2">
              From bright light roasts to bold dark blends and convenient
              coffee pods, Griffin Coffee gives you more ways to enjoy a cup
              worth gathering for.
            </p>

          </div>

          {/* Product Grid */}

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {coffees.map((coffee, index) => (

              <article
                key={`${coffee.name}-${coffee.format}`}
                className="group overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Product Image */}

                <div className="relative flex h-[360px] items-center justify-center overflow-hidden bg-[#111111]">

                  <img
                    src={coffee.image}
                    alt={`${coffee.name} ${coffee.format}`}
                    className="h-full w-full object-contain p-7 transition duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>

                {/* Product Information */}

                <div className="p-7">

                  <div className="flex items-center justify-between gap-3">

                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: coffee.accent }}
                    >
                      {coffee.category}
                    </p>

                    <span className="rounded-full bg-[#f5f3ef] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/55">
                      {coffee.format}
                    </span>

                  </div>

                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">
                    {coffee.name}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-6 text-black/70">
                    {coffee.notes}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-black/50">
                    {coffee.description}
                  </p>

                  <a
                    href={coffee.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#111111] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#f28c28] hover:text-[#111111]"
                  >
                    Shop {coffee.name}
                    <span className="ml-2">→</span>
                  </a>

                </div>

              </article>

            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          BRAND MOMENT
      ========================================================= */}

      <section className="bg-[#111111] px-6 py-24 text-white sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f28c28]">
              Coffee Worth Gathering For
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.04em] sm:text-6xl">
              Some moments call for coffee.
              <br />
              Some moments become better because of it.
            </h2>

          </div>

          <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">

            <div>
              <p className="text-lg font-semibold">
                Start strong.
              </p>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Make the first cup count.
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold">
                Keep going.
              </p>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Find your rhythm and stay in motion.
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold">
                Gather together.
              </p>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Because the best moments are often shared.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-[#f5f3ef] px-6 py-20 sm:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f28c28]">
            Griffin Coffee
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
            Make room for the moment.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/55">
            Explore the collection and bring Griffin Coffee into your next
            morning, conversation, celebration, or quiet moment.
          </p>

          <a
            href="#collection"
            className="mt-8 inline-flex rounded-full bg-[#111111] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#f28c28] hover:text-[#111111]"
          >
            Shop Griffin Coffee
          </a>

        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-black/10 bg-[#f5f3ef] px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-black/45 sm:flex-row">

          <span>
            © 2026 Griffin Coffee. All rights reserved.
          </span>

          <span>
            Coffee worth gathering for.
          </span>

        </div>

      </footer>

    </main>
  );
}