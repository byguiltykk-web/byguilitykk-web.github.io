import "./globals.css";

export const metadata = {
  title: {
    default: "Maison Corgi — Boutique dédiée aux corgis",
    template: "%s | Maison Corgi",
  },
  description:
    "Maison Corgi propose des accessoires, jouets, vêtements, cadeaux et objets lifestyle soigneusement sélectionnés pour les corgis et leurs humains.",
  keywords: [
    "boutique corgi",
    "accessoires corgi",
    "cadeaux corgi",
    "jouets corgi",
    "vêtements corgi",
    "Maison Corgi",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}