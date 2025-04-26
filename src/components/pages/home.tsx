// src/app/page.tsx

import Header from '../Header';
import Card from "../Cards";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-fundo text-white flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4 gap-40 flex-grow relative">
        {/* Primeira seção - imagem na direita */}
        <section className="relative w-full flex justify-center items-center">
          <div className="relative z-10">
            <Card
              title="Conheça o projeto"
              description="Horizon Vtubers tem como missão divulgar Vtubers e fortalecer a comunidade! cujo foco é criar um espaço onde possam ser descobertos e aumentar ainda mais seu público!"
            />
          </div>

          {/* Imagem da Vtuber - direita */}
          <img
            src="/miya.png"
            alt="Miya"
            className="absolute right-16 h-100 object-contain z-20 translate-x-1/4"
          />
        </section>

        {/* Nova seção - imagem na esquerda */}
        <section className="relative w-full flex justify-center items-center">
          {/* Imagem da Vtuber - esquerda */}
          <img
            src="/nikko.png"
            alt="nikko"
            className="absolute left-10 h-100 object-contain z-20 -translate-x-1/4"
          />

          <div className="relative z-10">
            <Card
              title="Quem pode entrar?"
              description="VTubers independentes (ou grupos de VTubers) que ainda não atingiram 100 espectadores em lives podem se inscrever. Nosso objetivo é dar visibilidade aos talentos escondidos e ajudá-los a brilhar no palco."
            />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center py-20 px-4 gap-16">

          {/* Título */}
          <h2 className="text-4xl font-bold">Co-Developers</h2>

          {/* Texto de introdução */}
          <div className="bg-purple-400/30 rounded-3xl p-8 max-w-4xl text-center relative">
            <p className="text-lg">
              O Horizon VTubers passou por uma grande reformulação, e isso não teria sido possível sem o apoio de uma equipe dedicada. 
              Com a ajuda de nossos talentosos desenvolvedores, transformamos essa reformulação em realidade, trazendo um site mais eficiente e bonito.
            </p>

            {/* Ícone no canto inferior direito (opcional) */}
            <div className="absolute bottom-4 right-4">
              {/* Ícone aqui, pode ser uma imagem ou SVG */}
              <span className="text-2xl">💻</span>
            </div>
          </div>

          {/* Cards dos Co-Developers */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">

            {/* Card 1 */}
            <div className="bg-blue-500/70 rounded-3xl p-6 w-full md:w-1/2 flex flex-col items-center gap-6 relative">
              {/* Logo Sunset Waves */}
              <img src="/sw.png" alt="Sunset Waves" className="w-50 h-32 object-contain" />

              {/* Texto */}
              <p className="text-center text-white">
                Sunset Waves é um grupo de artistas e desenvolvedores comprometidos em entregar a melhor experiência e qualidade.
                Eles foram responsáveis pelo frontend do site, deem uma olhada!
              </p>

              {/* Botão */}
              <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full">
                Conheça Sunset Waves
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-[#442222] rounded-3xl p-6 w-full md:w-1/2 flex flex-col items-center gap-6 relative">
              {/* Avatar do Koda */}
              <img src="/koda.png" alt="Koda" className="w-32 h-32 object-contain" />

              {/* Texto */}
              <p className="text-center text-white">
                Koda é um VTuber que quer ver a comunidade crescer ainda mais. 
                Ele foi o responsável pelo backend do site, otimizando o sistema para torná-lo mais funcional e eficiente.
                Além disso, ele está desenvolvendo um site voltado para os fãs de GTA RP, se quer participar, acesse já!
              </p>

              {/* Botão */}
              <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full">
                Conheça Koda
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
