import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: {
    default: "CoinCorgi — Boutique dédiée aux corgis",
    template: "%s | CoinCorgi",
  },
  description:
    "CoinCorgi propose des accessoires, jouets, vêtements, cadeaux et objets lifestyle pour les corgis et leurs humains.",
  keywords: [
    "boutique corgi",
    "accessoires corgi",
    "cadeaux corgi",
    "jouets corgi",
    "vêtements corgi",
    "CoinCorgi",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}