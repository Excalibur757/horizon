import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Login() {
    return (
        <div className="min-h-screen bg-fundo text-white flex flex-col">
            <Header />
            <img src={"/lulu.png"} alt="Lulu" className="h-auto w-auto" />
            <main className="flex flex-col items-center justify-center py-20 px-4 flex-grow">
                <h2 className="text-5xl font-bold text-center mb-16">
                    Vtuber? Faça login para participar do projeto!
                </h2>

                <section className="bg-custom-gradient-vertical rounded-4xl p-6 shadow-lg flex flex-col items-center gap-6 w-full max-w-md">
                    <form className="w-full flex flex-col gap-4">
                        <label className="flex flex-col text-white">
                            Email
                            <input
                                type="email"
                                name="email"
                                placeholder="Digite seu email"
                                className="mt-1 p-2 rounded bg-gray-600 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>

                        <label className="flex flex-col text-white">
                            Senha
                            <input
                                type="password"
                                name="senha"
                                placeholder="Digite sua senha"
                                className="mt-1 p-2 rounded bg-gray-600 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>

                        <button
                            type="submit"
                            className="mt-4 bg-purple-600 hover:bg-card2 text-white font-semibold py-2 px-4 rounded-xl transition-all"
                        >
                            Entrar
                        </button>
                    </form>
                        <div className="col-span-2 flex flex-col items-center mt-2"> {/* Takes full width */}
                            <p className="text-white text-sm">
                                Não tem login? <a href="/cadastro" className="text-card2 hover:underline">Cadastre-se!</a>
                            </p>
                            <p className="text-white text-sm m-4">
                                <a href="/login" className="text-card2 hover:underline">Esqueci minha senha</a>
                            </p>
                        </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
