import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Chata Polska Rawicz | Zakupy blisko Ciebie",
  description: "Chata Polska w Rawiczu przy ulicy Spokojnej. Sprawdź informacje o sklepie, aktualne promocje i lokalizację.",
  openGraph: {
    title: "Chata Polska Rawicz | Zakupy blisko Ciebie",
    description: "Informacje o sklepie Chata Polska w Rawiczu, promocje i wskazówki dojazdu.",
    locale: "pl_PL",
    type: "website",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pl"><body>{children}</body></html>;
}
