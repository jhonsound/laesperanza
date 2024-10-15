import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../assets/img/diapositivas/1.png';
import img2 from '../../../assets/img/diapositivas/2.png';
import img3 from '../../../assets/img/diapositivas/3.png';
import img4 from '../../../assets/img/diapositivas/4.png';
import img5 from '../../../assets/img/diapositivas/5.png';
import img6 from '../../../assets/img/diapositivas/6.png';
import img7 from '../../../assets/img/diapositivas/7.png';
import img8 from '../../../assets/img/diapositivas/8.png';
import img9 from '../../../assets/img/diapositivas/9.png';
import img10 from '../../../assets/img/diapositivas/10.png';
import { ActionButton } from 'components/Buttons/ActionButton';

export const LevelOneSpecial = ({ linkIframe }) => {
  const [showHelloWorld, setShowHelloWorld] = useState(false);
  const [loading, setLoading] = useState(true); // Estado para el loader
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img1,
      description: "",
    },
    {
      image: img2,
      description: "",
    },
    {
      image: img3,
      description: "",
    },
    {
      image: img4,
      description: "",
    },
    {
      image: img5,
      description: "",
    },
    {
      image: img6,
      description: "",
    },
    {
      image: img7,
      description: "",
    },
    {
      image: img8,
      description: "",
    },
    {
      image: img9,
      description: "",
    },
    {
      image: img10,
      description: "",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      // Deshabilitar el botón siguiente en el último slide
      if (next === slides.length - 1) {
        document.querySelector('.slick-next').style.pointerEvents = 'none';
      } else {
        document.querySelector('.slick-next').style.pointerEvents = 'auto';
      }
    },
    afterChange: (current) => setCurrentSlide(current)
  };

  return (
    <div style={{ overflow: 'hidden' }} className="relative w-full h-full flex items-center justify-center">
      {showHelloWorld ? (
        <div className="w-full flex justify-center mx-auto relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
                <p className="text-gray-700 text-lg">Cargando...</p>
              </div>
            </div>
          )}
          <iframe
            allow="fullscreen; autoplay;"
            title="exercise"
            allowFullScreen
            width="795"
            height="500"
            src={linkIframe?.urlFrame}
            onLoad={() => setLoading(false)} // Ocultar loader al cargar
            style={{ opacity: loading ? 0 : 1 }} // Ocultar iframe mientras carga
          ></iframe>
        </div>
      ) : (
        <div className="relative w-full h-full p-10">
          {/* Slider */}
          <Slider {...settings} className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div key={index} style={{ display: currentSlide === index ? 'block' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', margin: 'auto', borderRadius: 10, width: '75%', padding: 10, height: '60vh' }} className="relative bg-blue-500 h-full flex rounded-md">
                  <div style={{ flex: 1, borderRadius: '10px 0 0 10px', overflow: 'hidden' }} className="w-7/10 h-full">
                    <img
                      src={slide.image}
                      alt={slide.description}
                      className="w-full h-full object-contain"
                      style={{ height: '100%', borderRadius: 10 }}
                    />
                  </div>
                  {/* <div style={{ flex: 0.3, borderRadius: '0 10px 10px 0', height: '100%' }} className="w-3/10 h-full bg-blue-500 text-left p-6 text-white">
                    <h2 className="text-lg mb-2">{slide.description}</h2>
                  </div> */}
                </div>
              </div>
            ))}
          </Slider>
          {currentSlide === slides.length - 1 && (
            <div className="w-1/2 mx-auto mt-4 flex justify-center">
              <ActionButton onClick={() => setShowHelloWorld(true)} text='Jugar' />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick, className } = props;
  return (
    <div
      className={`${className} cursor-pointer text-white bg-blue-500 border border-blue-700 rounded-md p-2 shadow-md hover:bg-blue-600`}
      style={{ width: '36px', height: '36px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3b82f6' }}
      onClick={onClick}
    >
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick, className } = props;
  return (
    <div
      className={`${className} cursor-pointer text-white bg-blue-500 border border-blue-700 rounded-md p-2 shadow-md hover:bg-blue-600`}
      style={{ width: '36px', height: '36px', display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center', background: '#3b82f6' }}
      onClick={onClick}
    >
    </div>
  );
};
