import React from 'react';
import Image from "next/image";

const availableVideos = [
    '/videos/2480792-hd_1280_720_24fps.mp4',
    '/videos/3858839-hd_1280_720_24fps.mp4',
    '/videos/5199729-hd_1280_720_25fps.mp4',
];

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

export default function Header() {
    const videoIndex = getRandomInt(3);
    const videoUrl = availableVideos[videoIndex];

    return (
        <header className="relative h-[70vh] w-full">
            {/* Video de fundo */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoUrl} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

            {/* Logo no canto superior esquerdo */}
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
                <Image
                    src="/logo/logo.png"
                    alt="Logo"
                    width={120}
                    height={40}
                    className="w-auto h-auto md:w-36 rounded-lg"
                />
            </div>

            {/* Texto de destaque */}
            <div className="relative flex items-center justify-center h-full text-center px-4">
                <div>
                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                        Vivendo com Cristo 24 horas por dia
                    </h1>
                    <p className="text-white text-sm md:text-lg mt-4">
                        "Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles." Mt 18:20
                    </p>
                </div>
            </div>
        </header>
    );
}