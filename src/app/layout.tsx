import type { Metadata } from "next";
import "./ui/theme/globals.scss";
import { openSans } from "./ui/theme/fonts";

export const metadata: Metadata = {
  title: "Untalinfo - website",
  description: "En esta pagina podras conocer mas sobre quien es untalinfo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  );
}
