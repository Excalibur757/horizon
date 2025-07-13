'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from 'react';
import VtuberCard from '@/components/VtuberCard';

const mockVtubers = [
  {
    id: 1,
    nome: 'Vtuber X',
    avatarUrl: '/miya.png',
    status: 'pendente',
    dataEnvio: '10/04/2025',
  },
  {
    id: 2,
    nome: 'Vtuber Y',
    avatarUrl: '/miya.png',
    status: 'aprovada',
    dataEnvio: '01/04/2025',
  },
  {
    id: 3,
    nome: 'Vtuber Z',
    avatarUrl: '/miya.png',
    status: 'reprovada',
    dataEnvio: '05/04/2025',
  },
];

export default function Admin() {
  const [reprovarId, setReprovarId] = useState<number | null>(null);
  const [justificativa, setJustificativa] = useState('');
  const [filtro, setFiltro] = useState<'todos' | 'pendente' | 'aprovada' | 'reprovada'>('todos');
  const [busca, setBusca] = useState('');

  const vtubersFiltradas = mockVtubers.filter((vtuber) => {
    const nomeMatch = vtuber.nome.toLowerCase().includes(busca.toLowerCase());
    const statusMatch = filtro === 'todos' || vtuber.status === filtro;
    return nomeMatch && statusMatch;
  });

  return (
    <>
      <Header />
      <div className="absolute top-20 right-6 z-50">
        <button
            onClick={() => {
            localStorage.removeItem('userToken');
            window.location.href = '/login';
            }}
            className="bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
        >
            Sair
        </button>
        </div>
      <div className="bg-[#0D0D1A] min-h-screen text-white flex">
        <div className="flex flex-col w-full px-10 py-8 gap-10">
          <h1 className="text-5xl font-light text-center">Olá,<br /><span className="font-semibold">Yutsu!</span></h1>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 rounded-lg bg-[#1E1E2E] text-white placeholder-gray-400"
            />

            <div className="flex gap-2 flex-wrap justify-center sm:justify-end">
              {['todos', 'pendente', 'aprovada', 'reprovada'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFiltro(status as any)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filtro === status ? 'bg-pink-500' : 'bg-[#3a3a5a]'
                  } capitalize`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-8 justify-start">
            {vtubersFiltradas.length > 0 ? (
              vtubersFiltradas.map((vtuber) => (
                <VtuberCard
                  key={vtuber.id}
                  nome={vtuber.nome}
                  avatarUrl={vtuber.avatarUrl}
                  status={vtuber.status as any}
                  dataEnvio={vtuber.dataEnvio}
                  onVerTela={() => alert(`Ver tela de ${vtuber.nome}`)}
                  onAprovar={vtuber.status === 'pendente' ? () => alert(`Aprovado ${vtuber.nome}`) : undefined}
                  onDesaprovar={() => setReprovarId(vtuber.id)}
                />
              ))
            ) : (
              <p className="text-gray-400">Nenhuma Vtuber encontrada.</p>
            )}
          </div>
        </div>

        {reprovarId !== null && (
          <div className="w-[350px] bg-[#2c2f5d] p-6 flex flex-col gap-4 fixed right-0 top-0 h-full shadow-xl z-50">
            <h2 className="text-white text-lg font-medium">Por que @user foi reprovada?</h2>
            <textarea
              className="bg-[#6b6fc5] text-white p-3 rounded resize-none h-40"
              placeholder="Aqui eu digitaria o que não me agradou e/ou não está de acordo"
              value={justificativa}
              onChange={(e) => setJustificativa(e.target.value)}
            />
            <div className="flex justify-between mt-auto">
              <button
                onClick={() => setReprovarId(null)}
                className="bg-pink-600 px-4 py-2 rounded-full"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  alert(`Usuária ${reprovarId} reprovada com motivo: ${justificativa}`);
                  setReprovarId(null);
                  setJustificativa('');
                }}
                className="bg-pink-500 px-4 py-2 rounded-full"
              >
                Enviar
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
