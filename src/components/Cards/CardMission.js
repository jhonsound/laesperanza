import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import missionCountry from '../../assets/img/mission/afrocolombian.png';

export const MissionCard = ({
  mission,
  selectedMission,
  onMissionSelect,
  hoveredMission,
  onHoverMission,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      onClick={() => onMissionSelect(mission)}
      onMouseEnter={() => onHoverMission(mission.id)}
      onMouseLeave={() => onHoverMission(null)}
      className={`w-auto md:w-full cursor-pointer rounded-lg shadow-lg border transition-all duration-300 ease-in-out ${selectedMission === mission.id ? 'border-gray-50' : 'border-transparent'
        }`}
      initial={{ scale: 1 }}
      animate={{
        scale: selectedMission === mission.id ? 1.05 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className="relative p-4 flex flex-col items-center bg-gray-100 rounded-lg overflow-hidden md:px-2"
        style={{
          boxShadow: selectedMission === mission.id ? '0 0 10px rgba(0, 128, 0, 0.5)' : '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 className="text-md font-bold mb-2 text-center">{mission.name}</h2>
        <div className='relative w-full'>

          <img
            src={missionCountry}
            alt={mission.name}
            className="md:h-350-px h-auto w-full object-contain rounded-t-lg"
          />
          <motion.div
            className={`absolute overflow-y-auto bottom-0  left-0 right-0 flex flex-col justify-center items-center bg-white p-4 rounded-t-lg transition-opacity duration-300 ease-in-out ${hoveredMission === mission.id || selectedMission === mission.id ? 'opacity-100' : 'opacity-0'
              }`}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: hoveredMission === mission.id || selectedMission === mission.id ? 0 : 100,
              opacity: hoveredMission === mission.id || selectedMission === mission.id ? 1 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ height: '70%' }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center">¿Qué van a aprender?</h3>
            <p className="text-center text-md mb-4">{mission.missionDescription}</p>
          </motion.div>

        </div>

        <button
          className={`flex items-center justify-center p-2 my-4 rounded-full font-semibold transition-colors duration-300 ${selectedMission === mission.id
            ? 'bg-green-500 text-white'
            : 'border border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white'
            }`}
        >
          {selectedMission === mission.id ? (
            <>
              <FaCheckCircle size={20} />
            </>
          ) : (
            <>
              <FaRegCircle size={20} />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};
