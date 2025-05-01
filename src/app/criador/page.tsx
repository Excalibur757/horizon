// src/app/criador/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Criadores() {
    return (
        <div className="min-h-screen bg-fundo text-white flex flex-col">
            <Header />
            <main className="flex flex-col items-center justify-center py-20 px-4 flex-grow">
                {/* Título centralizado */}
                <h2 className="text-5xl font-bold text-center mb-16">Founder &<br />Project Lead</h2>

                {/* Card de apresentação */}
                <section className="bg-azul rounded-3xl p-8 w-full max-w-4xl flex flex-col md:flex-row items-center gap-8">
                    <img
                        src="/yutsu.png"
                        alt="Yutsu"
                        className="w-70 h-auto object-contain"
                    />

                    <p className="text-white text-justify leading-relaxed">
                        Olá! Me chamo Yutsu e sou o criador desse projeto, desde quando o site foi publicado.
                        Meu objetivo era apenas um: tornar a comunidade vtuber ainda maior e mostrar para os outros que existem vários talentos que estão escondidos enquanto outros estão nos holofotes,
                        criar um lugar onde todos possam brilhar igualmente e receberem mais atenção do público.
                        Mas agora, não quero só a comunidade Vtuber, esse projeto abre caminhos para PNGTubers e YouTubers também, claro, no seu devido tempo, tudo pode se tornar realidade.
                    </p>
                </section>
                <section className="flex flex-col items-center justify-center py-20 px-4 gap-16">
                    <h2 className="text-4xl font-bold">Ajudantes</h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <div className="flex flex-col md:flex-row items-stretch gap-8">
                            <div className="bg-blue-500/70 rounded-3xl p-6 w-full md:w-1/2 flex flex-col items-center gap-6 relative flex-1">
                                <img src="/sw.png" alt="Sunset Waves" className="w-50 h-32 object-contain" />
                                <p className="text-center text-white">
                                <h2 className="text-3xl font-bold text-center mb-5">Sunset Waves</h2>
                                Site pronto, preciso fazer com que isso alcance o máximo de pessoas, a Sunset Waves me ajudou com o marketing e claro ajudou no meu trabalho de dar a repaginada no visual do site
                                </p>
                                <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full">
                                    Conheça Sunset Waves
                                </a>
                            </div>

                            <div className="bg-[#442222] rounded-3xl p-6 w-full md:w-1/2 flex flex-col items-center gap-6 relative flex-1">
                                <img src="/koda.png" alt="Koda" className="w-32 h-32 object-contain" />
                                <p className="text-center text-white">
                                <h2 className="text-3xl font-bold text-center mb-5">Koda</h2>
                                Meu site tinha um problema: adição manual das vtubers, então Koda desenvolveu uma solução para que as próprias Vtubers criem suas telas. Prático não?                                </p>
                                <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full">
                                    Conheça Koda
                                </a>
                            </div>

                            <div className="bg-fanta rounded-3xl p-6 w-full md:w-1/2 flex flex-col items-center gap-6 relative flex-1">
                                <img src="/fanta.png" alt="Koda" className="w-32 h-32 object-contain rounded-4xl" />
                                <p className="text-center text-white">
                                <h2 className="text-3xl font-bold text-center mb-5">Fanstasminha</h2>
                                A versão antiga do site era totalmente manual e o fanta me ajudou criando telas para alguns Vtubers<br /><br />Seu trabalho não será esquecido</p>
                                <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full">
                                    Conheça Fanta
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className="text-5xl font-bold text-center mb-16">MUITO OBRIGADO PELA AJUDA ♥</h2>
            </main>
            <Footer />
        </div>
    );
}