  import React from "react";
  import { FaGamepad, FaBookReader,FaClock, FaUsers, FaChartLine } from "react-icons/fa"; 
  import laesperaza from '../../assets/img/laesperanza.png'
  const features = [
    {
      title: "Recursos Interactivos",
      description: "Accede a una amplia variedad de materiales didácticos interactivos que harán que aprender sea una experiencia divertida y enriquecedora.",
      icon: <FaGamepad className="text-2xl" />
    },
    {
      title: "Ejercicios Prácticos",
      description: "Refuerza tus habilidades comunicativas con ejercicios prácticos adaptados a tu nivel y necesidades.",
      icon: <FaBookReader className="text-2xl" />
    },
    {
      title: "Seguimiento Personalizado",
      description: "Recibe retroalimentación y seguimiento personalizado para identificar tus áreas de mejora y potenciar tus fortalezas.",
      icon: <FaChartLine className="text-2xl" /> 
    },
    {
      title: "Trabajo en equipo",
      description: "Participa en grupo y logra realizar los retos establecidos con ayuda de tus compañeros y profesora.",
      icon: <FaUsers className="text-2xl" /> 
    }
  ];
  
  const avantages = [
    {
      title: "Motivación Aumentada",
      description: "Al incorporar elementos interactivos y dinámicos, nuestra aplicación busca despertar tu interés y motivación hacia el aprendizaje.",
      icon: <FaGamepad className="text-2xl" />
    },
    {
      title: "Mejora en la Comunicación",
      description: "Desarrolla habilidades comunicativas esenciales que te serán útiles tanto en el ámbito académico como en tu vida diaria.",
      icon: <FaBookReader className="text-2xl" />
    },
    {
      title: "Acceso 24/7:",
      description: "Desarrolla habilidades comunicativas esenciales que te serán útiles tanto en el ámbito académico como en tu vida diaria.",
      icon: <FaClock className="text-2xl" /> 
    },
  ];

  const FeatureCard = ({ title, description, icon }) => (
    <div className="relative flex flex-col min-w-0 mt-4">
      <div className="px-4 py-5 flex-auto">
        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
          {icon}
        </div>
        <h6 className="text-xl mb-1 font-semibold">{title}</h6>
        <p className="mb-4 text-white">{description}</p>
      </div>
    </div>
  );

  export const AboutUs = () => {
    return (
      <div className="mx-auto">
        <div className="flex flex-wrap ">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white">
              <img
                alt="..."
                src={laesperaza}
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4 text-blueGray-500">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-white fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-blueGray-500">
                  Bienvenidos a La Esperanza
                </h4>
                <p className="text-md font-light mt-2 text-blueGray-500">
                  La Esperanza es una innovadora aplicación web diseñada específicamente para los estudiantes de grado 9 del colegio La Esperanza. Nuestro objetivo principal es potenciar la competencia comunicativa en inglés y aumentar la motivación hacia el aprendizaje en nuestros estudiantes.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4 ">
            <h6 className="text-xl text-center mx-auto mb-1 font-semibold">¿Qué ofrecemos?</h6>
            <div className="flex flex-wrap">
              {features.map((feature, index) => (
                <div key={index} className="w-full md:w-6/12 px-4">
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
                <div key={index} className="w-full md:w-6/12 px-4">
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
