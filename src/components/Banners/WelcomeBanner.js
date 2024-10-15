import React from 'react';
import { useState } from 'react';
import { ModalSimple } from 'components/Modals/simple';
import { AboutUs } from 'views/informative/aboutUs';
import { Slideshow } from 'views/informative/guide';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/welcome.json'; // Update the path to your Lottie animation file
import { FaGraduationCap, FaBook, FaQuestion } from 'react-icons/fa';
import { AboutHistory } from 'views/informative/History';

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
export const WelcomeBanner = () => {
  const [showModal, setShowModal] = useState(0);

  return (
    <>
      {/*  <div className="w-1/3 h-auto">
        <Lottie options={defaultOptions} height="150px" width="150px" />
      </div> */}
      <div className="w-full flex flex-col lg:w-full text-left my-auto ">
        <div className="w-full p-4">
          <h1 className="text-md font-bold text-black text-center mb-2">¿Cómo empezar?</h1>
          <h4 className="text-sm md:text-lg text-black text-center">
            Simplemente ingresa tus datos y comienza tu viaje hacia una mejor competencia comunicativa y un aprendizaje
            más motivador.{' '}
          </h4>
        </div>
        <div className="flex items-center justify-center flex-wrap my-2">
          <button
            onClick={() => setShowModal(1)}
            className="bg-color flex text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0  mb-3 ease-linear transition-all duration-150"
            type="button"
          >
            <FaGraduationCap className="mr-2" />
            ¿Quiénes somos?
          </button>
          <button
            className="bg-color flex text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mr-3 mb-3 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(2)}
          >
            <FaBook className="mr-2" />
            Guía de Navegación
          </button>
          <button
            className="bg-color flex text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mr-3 mb-3 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(3)}
          >
            <FaQuestion className="mr-2" />
            Historia
          </button>
        </div>
      </div>
      {
        {
          1: (
            <ModalSimple setShowModal={setShowModal} title="">
              <AboutUs />
            </ModalSimple>
          ),
          2: (
            <ModalSimple setShowModal={setShowModal} title="">
              <Slideshow />
            </ModalSimple>
          ),
          3: (
            <ModalSimple setShowModal={setShowModal} title="">
              <AboutHistory />
            </ModalSimple>
          ),
        }[showModal]
      }
    </>
  );
};
