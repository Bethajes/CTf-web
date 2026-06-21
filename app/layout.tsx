import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Create Future Technologies | Engineering the Future Through Software",
    template: "%s | Create Future Technologies",
  },
  description:
    "Create Future Technologies is a global software solutions company building enterprise platforms, AI systems, cloud products, mobile apps, and the Atlas software portfolio.",
  keywords: [
    "Create Future Technologies",
    "CTF software company",
    "Enterprise software development",
    "AI software solutions",
    "Cloud and DevOps services",
    "Atlas Portal",
    "Custom software development",
  ],
  openGraph: {
    title: "Create Future Technologies",
    description: "Engineering the future through software, AI, cloud platforms, and enterprise systems.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/images/logo.png", // 👈 Or use your logo name like '/logo.png' if it's placed in the public/ folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
