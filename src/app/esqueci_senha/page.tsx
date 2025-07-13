'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function Esqueci_senha() {
    const router = useRouter();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Colocar depois a lógica aqui
        console.log("VALIDADO COM SUCESSO");
        router.push('/');
    };
    return (
        <div className="min-h-screen bg-fundo text-white flex flex-col">
            <Header />
            <img src={"/lulu.png"} alt="Lulu" className="h-auto w-auto" />
            <main className="flex flex-col items-center justify-center py-20 px-4 flex-grow">
                <h2 className="text-5xl font-bold text-center mb-16">
                    Abra seu email para pegar seu código
                </h2>

                <section className="bg-custom-gradient-vertical rounded-4xl p-6 shadow-lg flex flex-col items-center gap-6 w-full max-w-md">
                    <form className="w-full flex flex-col gap-4">
                        <label className="flex flex-col text-white items-center-safe">
                            Digite o código enviado no email
                            <input
                                type="code"
                                name="code"
                                placeholder="Digite seu email"
                                className="mt-2 p-2 rounded bg-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-white items-center-safe">
                            Digite a nova senha
                            <input
                                type="newpassword"
                                name="newpassword"
                                placeholder="Digite seu email"
                                className="mt-2 p-2 rounded bg-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-white items-center-safe">
                            Confirme a nova senha
                            <input
                                type="confirmPassword"
                                name="confirmPassword"
                                placeholder="Digite seu email"
                                className="mt-2 p-2 rounded bg-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className="mt-4 bg-purple-600 hover:bg-card2 text-white font-semibold py-2 px-4 rounded-xl transition-all"
                            onClick={handleSubmit}
                        >
                            Confirmar
                        </button>
                    </form>
                        <div className="col-span-2 flex flex-col items-center mt-2"> {/* Takes full width */}
                            <p className="text-white text-sm">
                                Não recebeu o código? <a href="/esqueci_senha" className="text-card2 hover:underline">Tente Novamente</a>
                            </p>
                        </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
