interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-custom-gradient rounded-4xl p-6 shadow-lg flex flex-col items-center gap-4">
      <h2 className="text-4xl font-bold text-center text-white">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-center text-lg text-gray-300">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
