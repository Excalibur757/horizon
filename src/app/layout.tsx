import './styles/globals.css';

export const metadata = {
  title: 'Horizon Vtubers',
  description: 'Divulgando Vtubers para o mundo!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
