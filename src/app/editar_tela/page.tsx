"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function EditorVtuber() {
  const [nome, setNome] = useState("");
  const [sobre, setSobre] = useState("");
  const [foto, setFoto] = useState<string | null>(null);

  const [sidePanelAberto, setSidePanelAberto] = useState(false);
  const [corTexto, setCorTexto] = useState("#000000");
  const [corCards, setCorCards] = useState("#cccccc");
  const [corFundo, setCorFundo] = useState("#ffffff");

  const [lives, setLives] = useState("");
  const [cronograma, setCronograma] = useState("");
  const [conteudoLives, setConteudoLives] = useState("");
  const [redes, setRedes] = useState([""]);

  const handleFotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFoto(url);
    }
  };

  const atualizarRede = (index: number, value: string) => {
    const novas = [...redes];
    novas[index] = value;
    setRedes(novas);
  };

  const adicionarRede = () => {
    setRedes([...redes, ""]);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: corFundo }}>
      <Header />
      <main className="px-4 py-8 relative">
        <button
          onClick={() => setSidePanelAberto(true)}
          className="bg-teal-700 text-white px-4 py-2 rounded mb-6"
        >
          Alterar cores
        </button>

        {sidePanelAberto && (
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 z-50">
            <h3 className="text-lg font-semibold mb-4">Personalização</h3>

            <label className="block mb-4">
              Cor do texto:
              <input
                type="color"
                value={corTexto}
                onChange={(e) => setCorTexto(e.target.value)}
                className="ml-2"
              />
            </label>

            <label className="block mb-4">
              Cor dos cards:
              <input
                type="color"
                value={corCards}
                onChange={(e) => setCorCards(e.target.value)}
                className="ml-2"
              />
            </label>

            <label className="block mb-4">
              Cor de fundo:
              <input
                type="color"
                value={corFundo}
                onChange={(e) => setCorFundo(e.target.value)}
                className="ml-2"
              />
            </label>

            <button
              onClick={() => setSidePanelAberto(false)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
            >
              Fechar
            </button>
          </div>
        )}

        <section
          className="rounded-2xl p-4 max-w-2xl mx-auto mb-8 flex flex-col items-center"
          style={{ backgroundColor: corCards, color: corTexto }}
        >
          <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden mb-4">
            {foto ? (
              <img
                src={foto}
                alt="Vtuber"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-gray-600">
                Sem foto
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleFotoUpload}
            className="mb-4"
          />

          <input
            type="text"
            placeholder="INSIRA SEU NOME"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full text-center font-bold bg-transparent border-b border-gray-400 focus:outline-none mb-2"
          />

          <textarea
            placeholder="ADICIONE UM SOBRE BEM CHAMATIVO"
            value={sobre}
            onChange={(e) => setSobre(e.target.value)}
            className="w-full text-center bg-transparent border-b border-gray-400 resize-none focus:outline-none"
          />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <textarea
            value={lives}
            onChange={(e) => setLives(e.target.value)}
            placeholder="Faço lives de:"
            className="rounded-2xl p-4 w-full resize-none"
            style={{ backgroundColor: corCards, color: corTexto }}
          />
          <textarea
            value={cronograma}
            onChange={(e) => setCronograma(e.target.value)}
            placeholder="Meu Cronograma:"
            className="rounded-2xl p-4 w-full resize-none"
            style={{ backgroundColor: corCards, color: corTexto }}
          />
          <textarea
            value={conteudoLives}
            onChange={(e) => setConteudoLives(e.target.value)}
            placeholder="Coisas que rolam nas lives:"
            className="rounded-2xl p-4 w-full resize-none"
            style={{ backgroundColor: corCards, color: corTexto }}
          />
        </div>

        <div
          className="rounded-2xl p-6 mt-8 max-w-2xl mx-auto"
          style={{ backgroundColor: corCards, color: corTexto }}
        >
          <h3 className="text-center font-semibold text-lg mb-4">
            Minhas Redes Sociais
          </h3>

          {redes.map((rede, idx) => (
            <input
              key={idx}
              type="text"
              value={rede}
              placeholder={`@social ${idx + 1}`}
              onChange={(e) => atualizarRede(idx, e.target.value)}
              className="w-full bg-transparent border-b border-gray-400 mb-2 focus:outline-none"
            />
          ))}

          <button
            onClick={adicionarRede}
            className="mt-2 text-blue-500 underline text-sm"
          >
            + Adicionar nova rede social
          </button>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Cancelar
          </button>
          <button className="bg-green-700 text-white px-4 py-2 rounded">
            Enviar
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
