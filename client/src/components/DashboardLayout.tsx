import { ReactNode } from "react";
import { Link } from "wouter";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-background p-4">
        <div className="mb-8">
          <Link href="/" className="font-serif text-xl tracking-wide">
            VELORA
          </Link>
        </div>
        <nav className="space-y-2 text-sm">
          <Link href="/" className="block rounded-md px-3 py-2 hover:bg-muted">
            Home
          </Link>
          <Link href="/#collection" className="block rounded-md px-3 py-2 hover:bg-muted">
            Collection
          </Link>
          <Link href="/#contact" className="block rounded-md px-3 py-2 hover:bg-muted">
            Contact
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
