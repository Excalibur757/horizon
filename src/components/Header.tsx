// src/app/components/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-header p-1 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Horizon VTubers Logo" className="h-15 mx-0" />
        </Link>

        <nav className="flex gap-5 text-white font-medium">
          <Link href="/">Encontre Seu Vtuber</Link>
          <Link href="/criador">Criadores</Link>
          <Link href="/login">Login/User</Link>
        </nav>
      </div>
    </header>
  );
}
