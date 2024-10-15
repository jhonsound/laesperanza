import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaMapMarkerAlt, FaStar, FaHeart, FaUpload } from 'react-icons/fa';
import { TbSlideshow } from 'react-icons/tb';

const iconMap = {
  default: FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaUpload,
  TbSlideshow,
  FaPlane,
};

export const ButtonGame = ({
  size = 'large',
  enabled = true,
  animate = true,
  click = null,
  icon = 'default',
  iconColor = 'white',
  backgroundColor = 'emerald-500',
  borderColor = 'white',
  status = null,
}) => {
  const sizeClasses = {
    xlarge: 'w-20 h-20 text-3xl',
    large: 'w-16 h-16 text-3xl',
    medium: 'w-12 h-12 text-2xl',
    small: 'w-8 h-8 text-xl',
  };

  const completedStyles = {
    borderColor: 'gold',
    gradient: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
    icon: FaPlane,
  };

  const isCompleted = status === 'COMPLETED';
  const IconComponent = isCompleted
    ? completedStyles.icon
    : iconMap[icon] || iconMap['default'];

  const borderGradient = isCompleted ? completedStyles.gradient : '';
  
  const enabledClasses = enabled
    ? `border-${borderColor} ${borderGradient} bg-${backgroundColor} text-${iconColor}`
    : 'border-2 border-gray-200 bg-blueGray-200 text-gray-700';

  const buttonClasses = `flex items-center justify-center rounded-full border-4 ${sizeClasses[size]} ${enabledClasses} shadow-lg`;

  const motionProps = animate
    ? {
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
    }
    : {};

  return (
    <motion.button className={buttonClasses} onClick={click} {...motionProps}>
      <IconComponent />
    </motion.button>
  );
};
