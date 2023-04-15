"use client";

import { useEffect, useState } from "react";

import BackgroundComponent from "@/components/background";
import YouTubePlayerComponent from "@/components/youtube-player";

export default function HomeLastPostSection() {
  const [showYoutubePlayer, setShowYouTubePlayer] = useState(false);

  useEffect(() => {
    if (showYoutubePlayer) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showYoutubePlayer]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center" id="home-last-post">
      <BackgroundComponent image="https://ldeliberdade.com/posters/recentes/01.jpg" />
      <div className="home-content max-w-7xl sm:p-8 p-4 sm:pt-28 w-full mx-auto">
        <h1 className="uppercase font-extrabold md:max-w-md max-w-xs sm:leading-snug leading-normal tracking-wide md:text-6xl sm:text-4xl text-2xl">
          PNA - Uma estratégia evolutivamente estável
        </h1>
        <div className="flex items-center gap-6 mt-6 cursor-default">
          <span
            className="hidden h-10 w-10 sm:flex items-center justify-center font-semibold text-lg border rounded-sm"
            title="Aberto para todos"
          >
            A
          </span>
          <i className="fa-solid fa-clock -mr-4"></i>
          <span className="tracking-wide font-semibold">Duração 9:08</span>
          <i className="fa-solid fa-calendar-day -mr-4"></i>
          <span className="tracking-wide font-semibold">11 abr 2023</span>
        </div>
        <button
          className="mt-8 py-3 px-8 rounded text-primary  border border-primary hover:bg-primary hover:text-gray-900 transition-all backdrop-blur-lg"
          onClick={() => setShowYouTubePlayer(true)}
        >
          <i className="fa-solid fa-play text-lg mr-2"></i>
          <span className="font-extrabold tracking-wide">Assistir</span>
        </button>
        <p className="mt-8 font-semibold text-sm text-justify leading-normal tracking-normal md:text-base sm:max-w-md">
          Não imagine um mundo livre. Torne o mundo livre. Somos uma iniciativa verdadeiramente
          libertária. Inscreva-se em nosso canal para acompanhar nossos vídeos, lançados
          semanalmente.
        </p>
      </div>
      {showYoutubePlayer && (
        <YouTubePlayerComponent videoId="ewcOiwZG7Y4" onClose={() => setShowYouTubePlayer(false)} />
      )}
    </section>
  );
}
