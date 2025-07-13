interface VtuberCardProps {
  nome: string;
  avatarUrl: string;
  status: 'pendente' | 'aprovada' | 'reprovada';
  dataEnvio: string;
  onVerTela: () => void;
  onAprovar?: () => void;
  onDesaprovar?: () => void;
}

export default function VtuberCard({
  nome,
  avatarUrl,
  status,
  dataEnvio,
  onVerTela,
  onAprovar,
  onDesaprovar,
}: VtuberCardProps) {
  const statusColor = {
    pendente: "text-white",
    aprovada: "text-green-300",
    reprovada: "text-red-400"
  };

  return (
    <div className="bg-[#6A0DAD] text-white rounded-2xl w-60 p-4 flex flex-col items-center shadow-lg">
      <img src={avatarUrl} alt={nome} className="w-32 h-32 rounded-full object-cover mb-2" />
      <h2 className="text-lg font-semibold">{nome}</h2>
      <p className={`${statusColor[status]} mt-1 capitalize`}>{status}</p>
      <p className="text-sm text-gray-200 mb-4">Enviada em: {dataEnvio}</p>

      <div className="flex flex-wrap gap-2">
        {status !== "reprovada" && (
          <button
            onClick={onVerTela}
            className="bg-pink-500 px-3 py-1 rounded-full text-sm"
          >
            Ver tela
          </button>
        )}
        {status === "pendente" && (
          <>
            <button
              onClick={onAprovar}
              className="bg-green-500 px-3 py-1 rounded-full text-sm"
            >
              Aprovar
            </button>
            <button
              onClick={onDesaprovar}
              className="bg-red-500 px-3 py-1 rounded-full text-sm"
            >
              Reprovar
            </button>
          </>
        )}
        {status === "aprovada" && (
          <button
            onClick={onDesaprovar}
            className="bg-red-500 px-3 py-1 rounded-full text-sm"
          >
            Desaprovar
          </button>
        )}
      </div>
    </div>
  );
}
