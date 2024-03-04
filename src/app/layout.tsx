import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

export const metadata = {
  metadataBase: new URL("https://invoicify-scloudes.vercel.app"),
  robots: {
    follow: true,
    index: true,
    googleBot: {
      follow: true,
      index: true,
    },
  },
};


export default function RootLayout({ children }: Props) {
  return children;
}