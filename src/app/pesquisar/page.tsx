'use client';
import { useState } from 'react';
import VtuberCardPublic from '@/components/VtuberCardPublic';
import FiltroDropdown from '@/components/FiltroDropdown';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const mockVtubers = [
  {
    id: 1,
    nome: 'Vtuber X',
    avatar: '/miya.png',
    descricao: 'blablablabla blablabla blablabla blablabla blablabla',
    categoria: 'Cute',
    periodo: 'Noturno',
    frequencia: 'Semanal',
    plataforma: 'Twitch',
    tamanho: 'Pequena',
  },
  // ...mais dados mockados
];

export default function Pesquisa() {
  const [busca, setBusca] = useState('');
    const [filtros, setFiltros] = useState<{
    categoria: string;
    periodo: string;
    frequencia: string;
    plataforma: string;
    tamanho: string;
    }>({
    categoria: '',
    periodo: '',
    frequencia: '',
    plataforma: '',
    tamanho: '',
    });


  const vtubersFiltradas = mockVtubers.filter((v) => {
    const nomeMatch = v.nome.toLowerCase().includes(busca.toLowerCase());
    const filtroMatch =
      (!filtros.categoria || v.categoria === filtros.categoria) &&
      (!filtros.periodo || v.periodo === filtros.periodo) &&
      (!filtros.frequencia || v.frequencia === filtros.frequencia) &&
      (!filtros.plataforma || v.plataforma === filtros.plataforma) &&
      (!filtros.tamanho || v.tamanho === filtros.tamanho);
    return nomeMatch && filtroMatch;
  });

  return (
    <>
      <Header />
      <div className="bg-[#0D0D1A] min-h-screen text-white">
        <div className="bg-gradient-to-b from-purple-700 to-transparent py-12 text-center">
          <h1 className="text-4xl font-semibold mb-4">Encontre a Vtuber ideal aqui!</h1>
          <p className="text-sm max-w-xl mx-auto text-gray-200">
            Lembre-se: não é porque a Vtuber X está na frente que ela é melhor que a Y. Tenha isso em mente!
          </p>
        </div>

        <div className="flex flex-wrap gap-4 px-6 py-6 justify-center bg-[#1a1a2e]">
          <FiltroDropdown label="Categorias" opcoes={['Cute', 'Dark', 'Meme']} onChange={(value) => setFiltros(prev => ({ ...prev, categoria: value }))} />
          <FiltroDropdown label="Períodos" opcoes={['Diurno', 'Noturno']} onChange={(value) => setFiltros(prev => ({ ...prev, periodo: value }))} />
          <FiltroDropdown label="Frequências" opcoes={['Diário', 'Semanal', 'Mensal']} onChange={(value) => setFiltros(prev => ({ ...prev, frequencia: value }))} />
          <FiltroDropdown label="Plataforma" opcoes={['Twitch', 'YouTube']} onChange={(value) => setFiltros(prev => ({ ...prev, plataforma: value }))} />
          <FiltroDropdown label="Tamanho" opcoes={['Pequena', 'Média', 'Grande']} onChange={(value) => setFiltros(prev => ({ ...prev, tamanho: value }))} />

          <input
            type="text"
            placeholder="Busque por algo específico"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full sm:w-80 px-4 py-2 rounded bg-[#2a2a3a] text-white placeholder-gray-400" />
        </div>

        {/* Lista de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-8">
          {vtubersFiltradas.map((v) => (
            <VtuberCardPublic key={v.id} {...v} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
