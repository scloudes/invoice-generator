import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: { default: "Invoice Generator", template: `%s | Invoice Generator` },
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