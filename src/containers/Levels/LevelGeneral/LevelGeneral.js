import React, { useState } from 'react';

export const LevelGeneral = ({ linkIframe }) => {
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  return (
    <div className="w-full flex justify-center mx-auto relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          {/* Puedes personalizar el loader aquí */}
        </div>
      )}
      <iframe
        allow="fullscreen; autoplay;"
        title="exercise"
        allowFullScreen
        width="795"
        height="500"
        src={linkIframe?.urlFrame}
        onLoad={() => setIsLoading(false)} // Ocultar loader cuando el iframe haya cargado
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out`}
      ></iframe>
    </div>
  );
};
