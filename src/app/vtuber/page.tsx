"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VtuberPage() {
  //back futuro
  const nome = "Nome da VTuber";
  const sobre = "Adicione um sobre bem chamativo";
  const fotoUrl = "/placeholder.png"; 
  const lives = "Faço lives de jogos, arte e conversa!";
  const cronograma = "Seg, Qua e Sex às 20h";
  const conteudo = "Jogos, reacts, fanarts e bate-papo!";
  const redes = ["@teste", "@teste2", "@teste3"];

  return (
    <div className="min-h-screen flex flex-col text-black bg-white">
      <Header />

      <main className="flex flex-col items-center py-10 px-4 flex-grow gap-10">
        <section className="bg-gray-300 p-6 rounded-xl w-full max-w-4xl flex flex-col items-center gap-4">
          <img
            src={fotoUrl}
            alt="Foto da VTuber"
            className="w-40 h-40 object-cover rounded-full"
          />
          <h2 className="text-xl font-bold">{nome}</h2>
          <p className="text-center">{sobre}</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="bg-gray-300 rounded-xl p-4">
            <h3 className="font-semibold mb-2">Faço lives de:</h3>
            <p>{lives}</p>
          </div>
          <div className="bg-gray-300 rounded-xl p-4">
            <h3 className="font-semibold mb-2">Meu Cronograma:</h3>
            <p>{cronograma}</p>
          </div>
          <div className="bg-gray-300 rounded-xl p-4">
            <h3 className="font-semibold mb-2">Coisas que rolam nas lives:</h3>
            <p>{conteudo}</p>
          </div>
        </section>

        <section className="bg-gray-300 rounded-xl p-6 w-full max-w-2xl">
          <h3 className="font-semibold mb-4">Minhas Redes Sociais</h3>
          <ul className="space-y-2">
            {redes.map((rede, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white rounded-full" />
                <span>{rede}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
