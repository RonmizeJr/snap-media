import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "~/components/navbar";

export const metadata: Metadata = {
  title: "SnapMedia",
  description:
    "SnapMedia is a powerful media optimization library designed for developers to streamline file uploads, compress images and videos, and deliver media seamlessly across any platform.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
