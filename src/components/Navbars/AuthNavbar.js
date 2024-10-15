/*eslint-disable*/
import React from "react";

// components

import { useState } from "react";
import { ModalSimple } from "components/Modals/simple";
import { AboutUs } from "views/informative/aboutUs";
import { Slideshow } from "views/informative/guide";
import { AboutHistory } from 'views/informative/History';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showModal, setShowModal] = useState(0);

  return (
    <>
      <nav className="top-0 relative w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg z-10">
        {
          {
            1: (
              <ModalSimple setShowModal={setShowModal} title="¿Quiénes somos?">
                <AboutUs />
              </ModalSimple>
            ),
            2: (
              <ModalSimple setShowModal={setShowModal} title="Guía de Navegación">
                <Slideshow />
              </ModalSimple>
            ),
            3: (
              <ModalSimple setShowModal={setShowModal} title="Historia">
                <AboutHistory />
              </ModalSimple>
            )
          }[showModal]
        }

        <div className="container px-4 mx-auto flex flex-col items-center justify-between">
          <div
            className={
              "lg:flex flex-grow items-center bg-indigo-500 lg:bg-opacity-0 lg:shadow-none justify-between px-4" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col list-none lg:mx-auto">
              <li className="flex items-center">
                <button
                  className="bg-indigo-500 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  onClick={() => setShowModal(3)}
                  type="button"
                >
                  <i className="fas fa-question"></i> Historia
                </button>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:mx-auto">
              <li className="flex items-center">
                <button
                  onClick={() => setShowModal(1)}
                  className="bg-indigo-500 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-graduation-cap"></i> Sobre el proyecto
                </button>
              </li>
            </ul>
            <ul className="flex flex-col  list-none lg:mx-auto">
              <li className="flex items-center">
                <button
                  className="bg-indigo-500 text-white active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(2)}
                >
                  <i className="fas fa-book"></i> Guía de Navegación
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
