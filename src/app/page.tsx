// src/app/page.tsx

import Header from '@/components/Header';
import Card from "@/components/Cards";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-fundo text-white flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center py-20 px-4 gap-40 flex-grow relative">
        <section className="relative w-full flex justify-center items-center">
          <div className="relative z-10">
            <Card
              title="Conheça o projeto"
              description="Horizon Vtubers tem como missão divulgar Vtubers e fortalecer a comunidade! cujo foco é criar um espaço onde possam ser descobertos e aumentar ainda mais seu público!"
            />
          </div>

          <img
            src="/miya.png"
            alt="Miya"
            className="absolute right-16 h-100 object-contain z-20 translate-x-1/4"
          />
        </section>

        <section className="relative w-full flex justify-center items-center">
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

          <h2 className="text-4xl font-bold">Ajudantes</h2>

          <div className="bg-purple-400/30 rounded-3xl p-8 max-w-4xl text-center relative">
            <p className="text-lg">
              O Horizon VTubers passou por uma grande reformulação, e isso não teria sido possível sem o apoio de uma equipe dedicada. 
              Com a ajuda de nossos talentosos desenvolvedores, transformamos essa reformulação em realidade, trazendo um site mais eficiente e bonito.
            </p>

            <div className="absolute bottom-4 right-4">
              <span className="text-2xl">💻</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">

          <div className="flex flex-col md:flex-row items-stretch gap-8">
            <div className="bg-blue-500/70 rounded-3xl p-6 w-full md:w-1/2 flex flex-col items-center gap-6 relative flex-1">
              <img src="/sw.png" alt="Sunset Waves" className="w-50 h-32 object-contain" />
              <p className="text-center text-white">
                Sunset Waves é um grupo de artistas e desenvolvedores comprometidos em entregar a melhor experiência e qualidade.
                Eles foram responsáveis pelo frontend do site, deem uma olhada!
              </p>
              <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full">
                Conheça Sunset Waves
              </a>
            </div>

            <div className="bg-[#442222] rounded-3xl p-6 w-full md:w-1/2 flex flex-col items-center gap-6 relative flex-1">
              <img src="/koda.png" alt="Koda" className="w-32 h-32 object-contain" />
              <p className="text-center text-white">
                Koda é um VTuber que quer ver a comunidade crescer ainda mais. 
                Ele foi o responsável pelo backend do site, otimizando o sistema para torná-lo mais funcional e eficiente.
                Além disso, ele está desenvolvendo um site voltado para os fãs de GTA RP, se quer participar, acesse já!
              </p>
              <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full">
                Conheça Koda
              </a>
            </div>
          </div>

          </div>
        </section>

        <section className="mt-16 md:mt-24 lg:mt-30 relative w-full flex justify-center items-center">
          <img
            src="/inana.png"
            alt="Inana"
            className="absolute left-[25%] top-2 h-[250px] object-contain z-10 translate-y-[-100%]"
          />

          <img
            src="/Ray.png"
            alt="Ray"
            className="absolute right-[22%] top-3 h-[250px] object-contain z-10 translate-y-[-100%]"
          />
          <div className="relative z-10">
            <Card
              title="Como Participar?"
              description="Basta se cadastrar no site! Após o cadastro, você poderá personalizar sua própria página, adicionando sua foto, informações, cronograma e muito mais. Apenas VTubers precisam se cadastrar — espectadores não precisam de registro para explorar o site"
            />
          </div>
        </section>

        <section className="relative w-full flex justify-center items-center mt-24">
          <img
            src="/haru.png"
            alt="Haru"
            className="absolute left-13 h-90 object-contain bottom-0.5 z-20 -translate-x-1/4 -rotate-[1deg]"
          />

          <div className="relative z-10 w-full max-w-3xl bottom-25">
            <Card title="O QUE ESTÁ ESPERANDO? ACESSE LOGO!">
              <div className="flex justify-center gap-4 mt-4 flex-wrap">
                <a
                  href=""
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full"
                >
                  Procurar Vtubers
                </a>
                <a
                  href=""
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full"
                >
                  QUERO ESTAR AQUI!!!
                </a>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
