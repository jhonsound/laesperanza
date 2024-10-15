import React from "react";
import {  FaMap, FaGlobeAmericas } from "react-icons/fa"; // Importar los iconos de react-icons

const features = [
  {
    description: "En la puerta de oro de la amazonia Colombiana, un grupo de valientes estudiantes de noveno grado de Florencia, Caquetá, está a punto de embarcarse en una aventura única. Su misión es explorar las 4 ciudades más emblemáticas del país y descubrir sus secretos. A través de esta emocionante travesía, aprenderán a usar el inglés, mientras se convierten en auténticos exploradores y embajadores de la cultura colombiana. Dentro del recorrido por cada ciudad deben realizar una serie de actividades que les permitirá ir de un lugar a otro. Al finalizar el recorrido de cada ciudad, obtendrá de recompensa un tiquete aéreo que le permita viajar a la próxima ciudad.",
    icon: <FaMap className="text-2xl" />
  },
];

const avantages = [
  {
    description: "Un día, un estudiante encontró un antiguo mapa escondido en la biblioteca del colegio. El mapa señaligen varias ciudades de Colombia con inscripciones en inglés. El mapa, mágico y lleno de misterios, prometía grandes recompensas a aquellos que pudieran explorar las maravillas de cada ciudad. Así que el estudiante fue a buscar a 3 de sus mejores amigos para formar un grupo de viajeros que lo acompañarán en su travesía por Colombia. Con entusiasmo y curiosidad, los cuatro amigos comenzaron a planificar su viaje, emocionados por descubrir los secretos de cada una de las 4 ciudades que señaligen el mapa. "
      + "El mapa los guiará a través de ciudades fascinantes, y juntos descubrirán lugares importantes y emblemáticos de cada una de las ciudades. En el viaje también fortalecerán su amistad y su aprendizaje del idioma inglés. Además ganarán puntos que les servirán para intercambiarlos por valoraciones en su clase de inglés.",
    icon: <FaGlobeAmericas className="text-2xl" />
  },
];

const FeatureCard = ({ description, icon }) => (
  <div className="relative flex flex-col w-full mt-4">
    <div className="px-4 py-5 flex-auto">
      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center  mb-5 shadow-lg rounded-full bg-white">
        {icon} {/* Icono dinámico */}
      </div>
      <p className="mb-4 text-white">{description}</p>
    </div>
  </div>
);

export const AboutHistory = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white">
            <img
              alt="..."
              src="https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_1280.jpg"
              className="w-full align-middle rounded-full"
            />
          </div>
        </div>

        <div style={{ maxHeight: '80vh' }} className="w-full md:w-6/12 px-4 overflow-y-auto">
          <h6 className="text-xl text-center mx-auto mb-1 font-semibold"> Aventura en las Ciudades de Colombia</h6>
          <div className="flex flex-wrap">
            {features.map((feature, index) => (
              <div key={index} className="w-full  px-4">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </div>
            ))}
          </div>
          <h6 className="text-xl text-center mx-auto mb-1 font-semibold">Beneficios</h6>

          <div className="flex flex-wrap">
            {avantages.map((feature, index) => (
              <div key={index} className="w-full px-4">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
