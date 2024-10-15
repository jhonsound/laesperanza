import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ActionButton } from '../Buttons/ActionButton';
import { ButtonGame } from '../Buttons/ButtonGameh';
import { Link } from 'react-router-dom/dist';

export const CardLevel = ({
  title,
  image,
  description,
  buttonsData,
  level,
  path,
  ctaText = '',
  handleClick = null,
  exercises,
}) => {
  const [hovered, setHovered] = useState(false);

  const exerciseIconMap = {
    'Challenge 11': 'FaCalculator',
    'Challenge 12': 'FaBookOpen',
    'Challenge 4': 'TbSlideshow',
    default: 'FaMapMarkerAlt',
  };

  const exerciseIconColor = {
    'Challenge 11': 'black',
    'Challenge 12': 'black',
    'Challenge 4': 'purple-500',
    default: 'green-500',
  };

  return (
    <div  className="relative bg-gray-100 my-6 w-full shadow-lg rounded-lg flex">
      <motion.div
        whileHover={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        layout
        className={`w-full md:flex-grow md:w-1/2 flex flex-col justify-between ${!buttonsData ? 'p-2' : 'p-4'}`}
      >
        <h2 className={`${!buttonsData ? 'text-md ' : 'text-xl'} text-emerald-500 font-bold`}>{title}</h2>
        {description && <p className="mt-2 text-blueGray-400 text-xl font-normal mb-4">{description}</p>}
        {buttonsData && (
          <div className="flex flex-wrap md:justify-between lg:justify-start lg:gap-6 w-full md:w-10/12 lg:w-10/12 pr-12">
            {buttonsData.map((button, index) => (
              <ButtonGame
                key={index}
                md
                size={button.size}
                enabled={button.enabled}
                animate={button.animate}
                backgroundColor={exerciseIconColor[button.name] || exerciseIconColor['default']}
                borderColor={button.borderColor}
                iconColor={button.iconColor}
                icon={exerciseIconMap[button.name] || exerciseIconMap['default']} // Asigna el icono basado en el tipo de ejercicio
                disabled
              />
            ))}
          </div>
        )}
        {ctaText !== '' && (
          <div className="w-full md:w-1/2 lg:w-1/2">
            {' '}
            <Link to={`/admin/exercises/${path}`} state={{ title, exercises, buttonsData, description }}>
              <ActionButton onClick={handleClick} text={ctaText} title={title}/>
            </Link>
          </div>
        )}
      </motion.div>
      {image && (
        <motion.div
          style={{ position: 'relative' }}
          className="hidden md:flex w-1/3  justify-between flex-col bg-transparent"
          layout
        >
          <motion.div
            className="absolute"
            style={{
              top: '-20px',
              right: '-20px',
              height: '100%',
              width: 'calc(100% + 40px)',
              borderRadius: '0 0 0 50px',
              zIndex: 10,
            }}
            whileHover={{ y: -10, x: 10, transition: { type: 'spring', stiffness: 300 } }}
          >
            <motion.img
              src={image}
              alt="Card Image"
              className="w-full h-full md:h-[8rem] md:w-[8rem] object-cover rounded-lg"
              layout
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
