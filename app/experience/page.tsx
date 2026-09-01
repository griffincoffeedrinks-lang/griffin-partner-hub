"use client";

import { useState } from "react";

type Product = {
  name: string;
  roast: string;
  notes: string;
  image: string;
  url: string;
};

const CATALOG_URL =
  "https://griffincoffeedrinks.coffeestore.app/catalog";

const products: Product[] = [
  {
    name: "Evanston Reserve",
    roast: "LIGHT ROAST",
    notes: "Blackberry • Caramel • Plum",
    image: "/evanston-reserve.webp",
    url: "https://griffincoffeedrinks.coffeestore.app/catalog/ibcMvat1pkFRt0XUxZfRl",
  },
  {
    name: "Bronzeville Roast",
    roast: "MEDIUM ROAST",
    notes: "Milk Chocolate • Honey • Roasted Peanuts",
    image: "/bronzeville-roast.webp",
    url: "https://griffincoffeedrinks.coffeestore.app/catalog/t82hubRhPPQH_vn3wcdPC",
  },
  {
    name: "Humboldt Blend",
    roast: "DARK ROAST",
    notes: "Cocoa • Toffee • Chocolate",
    image: "/humboldt-blend.webp",
    url: "https://griffincoffeedrinks.coffeestore.app/catalog/lABMWbKaXnVqENa5OUexS",
  },
  {
    name: "Riverdale Decaf",
    roast: "DARK ROAST • DECAF",
    notes: "Smooth • Rich • Balanced",
    image: "/riverdale-decaf.webp",
    url: "https://griffincoffeedrinks.coffeestore.app/catalog/2Qsgaduj-HxvDcGFPZS83",
  },
  {
    name: "Evanston Reserve Pods",
    roast: "COFFEE PODS",
    notes: "Blackberry • Caramel • Plum",
    image: "/evanston-pods.webp",
    url: "https://griffincoffeedrinks.coffeestore.app/catalog/m7cxV2HtIOBvzN_THpZFC",
  },
  {
    name: "Humboldt Blend Pods",
    roast: "COFFEE PODS",
    notes: "Cocoa • Toffee • Chocolate",
    image: "/humboldt-pods.webp",
    url: "https://griffincoffeedrinks.coffeestore.app/catalog/y9UhVqIbCDE6S_Ne6_CTK",
  },
];

export default function ExperiencePage() {
  const [shared, setShared] = useState<string | null>(null);

  async function shareProduct(product: Product) {
    const shareData = {
      title: `${product.name} | Griffin Coffee`,
      text: `Discover ${product.name} from Griffin Coffee — coffee worth gathering for.`,
      url: product.url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(product.url);
        setShared(product.name);

        setTimeout(() => {
          setShared(null);
        }, 2000);
      }
    } catch {
      // User cancelled the native share sheet.
    }
  }

  return (
    <main className="page">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <a href="/" className="brand">
            <img
              src="/griffin-logo.png"
              alt="Griffin Coffee"
              className="logo"
            />

            <div className="brand-copy">
              <span className="brand-label">Coffee Worth Gathering For</span>
              <span className="brand-name">Griffin Coffee</span>
            </div>
          </a>

          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-link"
          >
            SHOP
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <img
          src="/brand-moment.webp"
          alt="A Griffin Coffee moment"
          className="hero-image"
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="eyebrow"></div>

          <h1>
            Coffee for the
            <br />
            moments that matter.
          </h1>

          <p>
            
            <br />
            Find your Roast.
          </p>

          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            SHARE GRIFFIN THE EXPERIENCE
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="eyebrow">DISCOVER YOUR ROAST</div>

        <h2>Four great roasts, one Griffin experience.</h2>

        <p>
          From bright and expressive to deep and comforting,
          there&apos;s a Griffin Coffee for every moment.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-image-link"
                aria-label={`View ${product.name}`}
              >
                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
              </a>

              <div className="product-info">
                <div className="product-top">
                  <div>
                    <div className="product-roast">
                      {product.roast}
                    </div>

                    <h3>{product.name}</h3>
                  </div>

                  <button
                    type="button"
                    className="share-button"
                    onClick={() => shareProduct(product)}
                    aria-label={`Share ${product.name}`}
                    title={`Share ${product.name}`}
                  >
                    <ShareIcon />
                  </button>
                </div>

                <p className="notes">{product.notes}</p>

                {shared === product.name && (
                  <div className="copied-message">
                    Link copied
                  </div>
                )}

                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-button"
                >
                  EXPERIENCE {product.name.toUpperCase()}
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="eyebrow">Coffee worth gathering for.</div>

        <h2>
          There&apos;s a cup
          <br />
          for every moment.
        </h2>

        <p>
          Discover Griffin Coffee and find the roast
          <br />
          that belongs in your moment.
        </p>

        <a
          href={CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="final-button"
        >
          SHARE THE GRIFFIN EXPERIENCE
          <span>↗</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <img
          src="/griffin-logo-wht.png"
          alt="Griffin Coffee"
          className="footer-logo"
        />

        <p>Coffee worth gathering for.</p>

        <span>© {new Date().getFullYear()} Griffin Coffee</span>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #0d0d0d;
          color: #ffffff;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(13, 13, 13, 0.94);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .header-inner {
          max-width: 1240px;
          height: 82px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          color: white;
          text-decoration: none;
        }

        .logo {
          width: 68px;
          height: 52px;
          object-fit: contain;
        }

        .brand-copy {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand-label {
          color: #f58b1f;
          font-size: 10px;
          letter-spacing: 4px;
          margin-bottom: 6px;
        }

        .brand-name {
          font-size: 22px;
          font-weight: 700;
        }

        .shop-link {
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          padding: 12px 22px;
          font-size: 12px;
          letter-spacing: 3px;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .shop-link:hover {
          background: #f58b1f;
          border-color: #f58b1f;
          color: #000;
        }

        .hero {
          position: relative;
          min-height: 700px;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.88) 0%,
              rgba(0, 0, 0, 0.62) 42%,
              rgba(0, 0, 0, 0.16) 100%
            ),
            linear-gradient(
              0deg,
              rgba(13, 13, 13, 0.95) 0%,
              transparent 35%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1240px;
          min-height: 700px;
          margin: 0 auto;
          padding: 110px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .eyebrow {
          color: #f58b1f;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 5px;
          margin-bottom: 22px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(52px, 7vw, 92px);
          line-height: 0.95;
          letter-spacing: -3px;
          font-weight: 700;
        }

        .hero p {
          color: rgba(255, 255, 255, 0.72);
          font-size: 20px;
          line-height: 1.6;
          margin: 28px 0 38px;
        }

        .hero-button,
        .final-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          background: #f58b1f;
          color: #080808;
          padding: 18px 30px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .hero-button:hover,
        .final-button:hover {
          transform: translateY(-2px);
          background: #ff9d38;
        }

        .hero-button span,
        .final-button span,
        .product-button span {
          font-size: 18px;
        }

        .intro {
          max-width: 1240px;
          margin: 0 auto;
          padding: 105px 32px 55px;
        }

        .intro h2 {
          margin: 0;
          font-size: clamp(38px, 5vw, 62px);
          letter-spacing: -2px;
        }

        .intro p {
          max-width: 650px;
          margin: 18px 0 0;
          color: #888;
          font-size: 18px;
          line-height: 1.6;
        }

        .products {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 32px 110px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .product-card {
          background: #171717;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          overflow: hidden;
          transition: 0.25s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
          border-color: rgba(245, 139, 31, 0.4);
        }

        .product-image-link {
          display: block;
          text-decoration: none;
        }

        .product-image-wrap {
          height: 470px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1c1c1c;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.035);
        }

        .product-info {
          padding: 28px;
        }

        .product-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .product-roast {
          color: #f58b1f;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          margin-bottom: 10px;
        }

        .product-info h3 {
          margin: 0;
          font-size: 30px;
          letter-spacing: -0.8px;
        }

        .notes {
          margin: 12px 0 24px;
          color: #8d8d8d;
          font-size: 15px;
        }

        .share-button {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: transparent;
          color: white;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .share-button:hover {
          background: #f58b1f;
          border-color: #f58b1f;
          color: #000;
        }

        .product-button {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #242424;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 7px;
          padding: 15px 18px;
          color: white;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          transition: 0.2s ease;
        }

        .product-button:hover {
          background: #f58b1f;
          color: #000;
        }

        .copied-message {
          color: #f58b1f;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .final-cta {
          position: relative;
          padding: 120px 32px;
          text-align: center;
          background:
            radial-gradient(
              circle at center,
              rgba(245, 139, 31, 0.12),
              transparent 45%
            ),
            #111111;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .final-cta h2 {
          margin: 0;
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .final-cta p {
          color: #888;
          font-size: 17px;
          line-height: 1.6;
          margin: 25px 0 35px;
        }

        .footer {
          padding: 65px 32px 45px;
          text-align: center;
          background: #0a0a0a;
        }

        .footer-logo {
          width: 100px;
          height: auto;
          opacity: 0.75;
          margin-bottom: 20px;
        }

        .footer p {
          color: #777;
          margin: 0 0 12px;
        }

        .footer span {
          color: #444;
          font-size: 12px;
        }

        @media (max-width: 800px) {
          .header-inner {
            height: 70px;
            padding: 0 18px;
          }

          .logo {
            width: 55px;
          }

          .brand-name {
            font-size: 18px;
          }

          .shop-link {
            padding: 10px 15px;
            font-size: 10px;
          }

          .hero,
          .hero-content {
            min-height: 650px;
          }

          .hero-content {
            padding: 80px 22px;
            justify-content: flex-end;
            padding-bottom: 80px;
          }

          .hero h1 {
            letter-spacing: -2px;
          }

          .hero p {
            font-size: 17px;
          }

          .hero p br {
            display: none;
          }

          .hero-button {
            width: 100%;
            box-sizing: border-box;
          }

          .intro {
            padding: 75px 22px 40px;
          }

          .products {
            padding: 0 22px 75px;
          }

          .product-grid {
            grid-template-columns: 1fr;
          }

          .product-image-wrap {
            height: 390px;
          }

          .product-info {
            padding: 22px;
          }

          .product-info h3 {
            font-size: 25px;
          }

          .final-cta {
            padding: 90px 22px;
          }

          .final-button {
            width: 100%;
            box-sizing: border-box;
          }
        }

        @media (max-width: 480px) {
          .hero {
            min-height: 680px;
          }

          .hero-content {
            min-height: 680px;
          }

          .product-image-wrap {
            height: 340px;
          }

          .intro h2 {
            font-size: 40px;
          }
        }
      `}</style>
    </main>
  );
}

function ShareIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.6" y1="10.7" x2="15.4" y2="6.3" />
      <line x1="8.6" y1="13.3" x2="15.4" y2="17.7" />
    </svg>
  );
}