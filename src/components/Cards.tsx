// src/components/Card.tsx

interface CardProps {
    title: string;
    description: string;
  }
  
  export default function Card({ title, description }: CardProps) {
    return (
      <div className="bg-custom-gradient rounded-4xl p-6 shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          {title}
        </h2>
        <p className="max-w-2xl text-center text-lg text-gray-300">
          {description}
        </p>
      </div>
    );
  }
  