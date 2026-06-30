import Link from "next/link";
import Ambient from "./Ambient";
import Footer from "./Footer";
import Icon from "./Icon";
import type { ReactNode } from "react";

export default function LegalShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Ambient />
      <main className="container-px px-6 pb-24 pt-28 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-orange"
        >
          <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
          Zurück zur Startseite
        </Link>
        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <div className="prose-legal mt-10 max-w-3xl space-y-6 text-white/70">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
