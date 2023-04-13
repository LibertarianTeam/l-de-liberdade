import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

import "./globals.css";

export const metadata = {
  title: "L de Liberdade",
  description:
    "🐍 Não imagine um mundo livre. Torne o mundo livre. Somos uma iniciativa verdadeiramente libertária. Inscreva-se em nosso canal para acompanhar nossos vídeos, lançados semanalmente",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="app-body overflow-x-hidden relative min-h-screen text-white bg-black">
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
