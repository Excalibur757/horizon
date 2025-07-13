interface FiltroDropdownProps {
  label: string;
  opcoes: string[];
  onChange: (value: string) => void;
}

export default function FiltroDropdown({ label, opcoes, onChange }: FiltroDropdownProps) {
  return (
    <select
      className="bg-[#b9475f] text-white px-4 py-2 rounded-full text-sm"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{label}</option>
      {opcoes.map((opcao) => (
        <option key={opcao} value={opcao}>
          {opcao}
        </option>
      ))}
    </select>
  );
}
