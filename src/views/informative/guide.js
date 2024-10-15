import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import login from '../../assets/img/guide/guia1.png';
import mision from '../../assets/img/guide/guia2.png';
import level from '../../assets/img/guide/guia4.png';
import menu from '../../assets/img/guide/guia3.png';

export const Slideshow = () => {
  const slides = [
    {
      image: login,
      description: "Inicio de Sesión: Ingresa tu nombre de usuario (número de documento de identidad) y contraseña (número de documento de identidad) en la página de inicio de sesión y haz clic en Ingresar.",
    },
    {
      image: mision,
      description: "Al iniciar sesión, serás dirigido a tu panel de control personal. Aquí encontrarás un resumen de tu progreso, notificaciones importantes y acceso rápido a tus cursos y actividades.",
    },
    {
      image: menu,
      description: "Utiliza el menú principal en la parte izquierda de la pantalla para navegar por las diferentes secciones de la aplicación.",
    },
    {
      image: level,
      description: "Misiones: Haz clic en la pestaña 'misiones' para ver una lista de los niveles. Selecciona un nivel para ver los retos correspondientes.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div style={{ overflow: 'hidden' }} className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full p-10">
        {/* Slider */}
        <Slider {...settings} className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div key={index}>
              <div style={{ display: 'flex', alignItems: 'center', margin: 'auto', borderRadius: 10, width: '75%', padding: 10, height: 'auto', }} className="relative bg-blue-500 h-full flex items-center rounded-md">
                <div style={{ flex: 0.7, borderRadius: '10px 0 0 10px', overflow: 'hidden' }} className="w-7/10 h-full flex items-center">
                  <img
                    src={slide.image}
                    alt={slide.description}
                    className="w-full h-full object-contain rounded-md"
                    style={{ height: '50vh', borderRadius: 10 }}
                  />
                </div>
                <div style={{ flex: 0.3, borderRadius: '0 10px 10px 0', height: '100%' }} className="w-3/10 h-full bg-blue-500 text-left p-6 text-white">
                  <h2 className="text-xl font-normal mb-2">{slide.description}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
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
