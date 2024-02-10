import React, { ReactNode } from "react";
import "@/styles/globals.scss";
import { Layout } from "@/components";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "tonigrbic portfolio",
  description: " my portfolio website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
