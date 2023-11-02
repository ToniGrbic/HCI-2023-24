import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sitemap-project",
  description: "Generated by create next app",
};
const pages = {
  home: "/",
  services: "/services",
  designs: "/designs",
  portfolio: "/portfolio",
  tools: "/tools",
  blogs: "/blogs",
  contact: "/contact",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} "flex min-h-screen items-center justify-between p-24`}
      >
        <nav>
          <ul className="flex justify-center gap-10 text-lg">
            {Object.entries(pages).map(([name, path]) => {
              return (
                <li>
                  <Link href={path}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <main className="flex justify-center mt-12">{children}</main>
      </body>
    </html>
  );
}