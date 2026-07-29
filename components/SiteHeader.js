"use client";

import { useState } from "react";
import Link from "next/link";
import CartLink from "@/components/CartLink";

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH || "";

const navigation = [
  {
    href: "/",
    label: "Accueil",
  },
  {
    href: "/boutique",
    label: "Boutique",
  },
  {
    href: "/guide-corgi",
    label: "Guide corgi",
  },
  {
    href: "/a-propos",
    label: "À propos",
  },
  {
    href: "/faq",
    label: "FAQ",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="announcement">
        Livraison offerte dès 59 € · Retours sous 30 jours ·
        Paiement sécurisé
      </div>

      <header className="site-header">
        <div className="container header-inner shared-header-inner">
          <Link
            className="logo coincorgi-logo"
            href="/"
            aria-label="CoinCorgi, accueil"
            onClick={closeMenu}
          >
            <img
              src={`${basePath}/images/logo-coincorgi.png`}
              alt="CoinCorgi"
            />
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((current) => !current)
            }
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            className={
              menuOpen
                ? "shared-nav shared-nav-open"
                : "shared-nav"
            }
            aria-label="Navigation principale"
          >
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <CartLink className="button button-small shared-cart-link" />
        </div>
      </header>
    </>
  );
}