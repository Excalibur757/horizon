"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Perfil() {
  const [email, setEmail] = useState("vtuber@exemplo.com");
  const [username, setUsername] = useState("vtuber_exemplo");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [socials, setSocials] = useState([
    { name: "Twitch", link: "twitch.tv/vtuber" },
    { name: "YouTube", link: "youtube.com/@vtuberBR" },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [statusTela, setStatusTela] = useState("Pronta para edição");

  const salvarPerfil = async () => {
    const dados = {
      email,
      username,
      socials,
      statusTela,
    };

    console.log("📦 Enviar para backend:", dados);
  };

  return (
    <div className="min-h-screen bg-fundo text-white flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4 flex-grow">
        <h2 className="text-5xl font-bold text-center mb-16">Olá, User</h2>

        <div className="flex flex-col md:flex-row gap-50">
          <section className="bg-custom-gradient-vertical rounded-[2rem] p-6 shadow-lg w-full max-w-md flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Informações da conta:</h3>

            <div className="flex items-center gap-2">
              <span>📧</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b border-white outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span>🔐</span>
              <button className="bg-white/20 px-3 py-1 rounded hover:bg-white/30 transition">
                Alterar senha
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span>👤</span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent border-b border-white outline-none"
              />
            </div>

            <div className="mt-4">
              <p className="font-semibold mb-2">🌐 Redes Sociais:</p>
              <ul className="text-sm space-y-1">
                {socials.map((s, i) => (
                  <li key={i}>
                    [{s.name}] {s.link}{" "}
                    <span className="text-cyan-200 cursor-pointer hover:underline">
                      [editar]
                    </span>
                  </li>
                ))}
                <li className="text-cyan-300 mt-2 cursor-pointer hover:underline">
                  [+] Adicionar nova rede social
                </li>
              </ul>
            </div>

            <div className="flex justify-between mt-6">
              <button className="bg-card2 px-4 py-2 rounded hover:bg-fundo">
                Sair
              </button>
              <div className="flex gap-2">
                <button className="bg-card2 px-4 py-2 rounded hover:bg-red-700">
                  Cancelar
                </button>
                <button
                  onClick={salvarPerfil}
                  className="bg-card2 px-4 py-2 rounded hover:bg-green-600"
                >
                  Salvar
                </button>
              </div>
            </div>
          </section>

          <section className="bg-custom-gradient-vertical-reverse rounded-[2rem] p-6 shadow-lg w-full max-w-md flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Gerenciar minha tela</h3>

            <p className="text-sm">Status da minha tela:</p>
            <div className="bg-purple-300 w-full h-32 rounded-xl shadow-inner flex items-center justify-center text-purple-900 font-bold">
              {statusTela}
            </div>

            <div className="flex justify-between mt-6 gap-5">
              <p className="bg-card1 self-center px-4 py-2 rounded hover:bg-purple-900">
                <a href="/vtuber">Acessar Minha Tela</a>
              </p>
              <p className="bg-card1 self-center px-4 py-2 rounded hover:bg-purple-900">
                <a href="/editar_tela">Editar Tela</a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
