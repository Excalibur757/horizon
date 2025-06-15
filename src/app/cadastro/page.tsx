'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from 'next/navigation'; 

export default function Login() {
    const router = useRouter();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); 
        // Taca o back pra funcionar o cadastro
        console.log("Formulário enviado!");
        router.push('/confirmar');
    };
    return (
        <div className="min-h-screen bg-fundo text-white flex flex-col">
            <Header />
            <img src={"/lulu.png"} alt="Lulu" className="h-auto w-auto" />
            <main className="flex flex-col items-center justify-center py-20 px-4 flex-grow">
                <h2 className="text-5xl font-bold text-center mb-16">
                    Vtuber! Quer particpar do projeto? Cadastre-se!
                </h2>

                <section className="bg-custom-gradient-vertical rounded-4xl p-6 shadow-lg flex flex-col items-center gap-6 w-full max-w-md">
                    <form className="w-full grid grid-cols-2 gap-4"> 
                        <label className="flex flex-col text-white col-span-1"> 
                            Nome de Usuário:
                            <input
                                type="text"
                                name="username"
                                placeholder="Digite seu nome de usuário"
                                className="mt-1 p-2 rounded bg-gray-600 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-white col-span-1">
                            Seu @:
                            <input
                                type="text"
                                name="menciona"
                                placeholder="Digite seu nome @"
                                className="mt-1 p-2 rounded bg-gray-600 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-white col-span-1">
                            Email:
                            <input
                                type="email"
                                name="email"
                                placeholder="Digite seu email"
                                className="mt-1 p-2 rounded bg-gray-600 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-white col-span-1">
                            Confirme seu email:
                            <input
                                type="email"
                                name="confirmEmail" 
                                placeholder="Digite seu email novamente"
                                className="mt-1 p-2 rounded bg-gray-600 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-white col-span-1">
                            Senha:
                            <input
                                type="password"
                                name="password" 
                                placeholder="Digite sua senha"
                                className="mt-1 p-2 rounded bg-gray-600 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>
                        <label className="flex flex-col text-white col-span-1">
                            Confirme sua senha:
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Digite sua senha novamente"
                                className="mt-1 p-2 rounded bg-gray-600 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </label>
                        <div className="col-span-2 flex flex-col items-center mt-2"> 
                            <div className="flex items-center gap-2 mb-2">
                                <input type="checkbox" id="terms" name="terms" className="form-checkbox h-4 w-4 text-purple-600 rounded" />
                                <label htmlFor="terms" className="text-white text-sm">
                                    Li e aceito os <a href="#" className="text-card2 hover:underline">termos de uso</a>
                                </label>
                            </div>
                            <p className="text-white text-sm">
                                Já tem cadastro? Vá para <a href="/login" className="text-card2 hover:underline">login</a>
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="col-span-2 mt-4 bg-purple-600 hover:bg-card2 text-white font-semibold py-2 px-4 rounded-xl transition-all"
                            onClick={handleSubmit}
                        >
                            Cadastrar
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
}
