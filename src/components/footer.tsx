import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo no canto inferior esquerdo */}
        <div className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={100}
            height={50}
            className="w-auto h-auto md:w-16 rounded-lg"
          />
        </div>

        {/* Seção de Copyright */}
        <div className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Cristo24h Todos os direitos reservados.
        </div>

        {/* Links e Botão */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Links */}
          <div className="flex flex-col space-y-2 text-center md:text-right text-sm underline">
            <a href="https://forms.gle/bzBrHNN4tyYiVW9D8" className="hover:no-underline" target='_blank'>
              Faça Parte
            </a>
            <a href="https://forms.gle/nXsXcM9mfRCVuzkHA" className="hover:no-underline" target='_blank'>
              Ouvidoria
            </a>
            <a href="https://github.com/Cristo24h" className="hover:no-underline" target='_blank'>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
