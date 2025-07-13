interface VtuberCardPublicProps {
  nome: string;
  avatar: string;
  descricao: string;
}

export default function VtuberCardPublic({ nome, avatar, descricao }: VtuberCardPublicProps) {
  return (
    <div className="bg-[#6A0DAD] rounded-2xl overflow-hidden shadow-md">
      <div className="bg-pink-200 p-4 flex justify-center">
        <img src={avatar} alt={nome} className="w-24 h-24 object-cover rounded-full" />
      </div>
      <div className="p-4 text-white">
        <h2 className="font-semibold text-lg">{nome}</h2>
        <p className="text-xs text-gray-200 mb-4 line-clamp-4">{descricao}</p>
        <button className="bg-pink-500 text-sm px-4 py-1 rounded-full hover:bg-pink-400">
          Quero conhecer!
        </button>
      </div>
    </div>
  );
}
