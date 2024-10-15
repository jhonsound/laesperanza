import React from 'react';
import one from '../../assets/insigns/level/level 1 badge.png';
import two from '../../assets/insigns/level/level 2 badge.png';
import three from '../../assets/insigns/level/level 3 badge.png';

const getInsigne = id => {
  switch (id) {
    case 'level 1':
      return one; // Morado
    case 'level 2':
      return two; // Rojo
    case 'level 3':
      return three; // Verde
    default:
      return '#C2185B'; // Rojo (Color por defecto si el ID no coincide)
  }
};

export const IconLevel = ({ id }) => {
  const insigne = getInsigne(id);

  return <img width={100} height={100} src={insigne} alt=""></img>;
};
