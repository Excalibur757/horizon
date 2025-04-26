// src/app/components/Header.tsx

export default function Header() {
    return (
      <header className="w-full bg-header p-1 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
        <a href="">
          <img src="/logo.png" alt="Horizon VTubers Logo" className="h-15 mx-0" />
        </a>          
        <nav className="flex gap-5 text-white font-medium">
            <a href="">Encontre Seu Vtuber</a>
            <a href="">Criadores</a>
            <a href="">Login/User</a>
          </nav>
        </div>
      </header>
    );
  }
  