import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ListView } from 'containers/ListView/ListView';
import { CardLevel } from 'components/Cards/CardLevel';
import HeaderStats from 'components/Headers/HeaderStats';
import { levels } from 'dummy/LevelsDummy';
import { levelImages } from 'dummy/LevelImages';

const defaultImage = 'https://cdn.pixabay.com/photo/2017/06/23/14/50/colombia-2434911_960_720.jpg';

export const containerStyle = {
  userSelect: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: '75vh',
  backgroundColor: 'transparent',
};

const headerStyle = {
  marginBottom: '3rem',
  width: '100%',
};

const motionDivStyle = isSelectedLevel => ({
  display: 'flex',
  width: '100%',
  flexDirection: isSelectedLevel ? 'row' : 'column',
});

const cardLevelContainerStyle = {
  margin: '30px',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  borderRadius: '20px',
};

export default function Levels() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate();
  const {
    state: { mission },
  } = useLocation();

 

  const getLevelImage = levelName => {
    const level = levelImages.find(l => l.name === levelName);
    return level ? level.image : defaultImage;
  };

  return (
    <div className='container mx-auto' style={containerStyle}>
      <div style={headerStyle}>
        <HeaderStats bgColor="bg-emerald-500" onBack={() => navigate(-1)} title={mission.name} />
      </div>
      <motion.div
        style={motionDivStyle(selectedLevel)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Vista de Lista de Niveles */}
        <ListView>
          {mission.levels.map(level => (
            <div className='' key={level.id}>
              <CardLevel
                title={level.name}
                exercises={level.exercises}
                image={getLevelImage(level.name)}
                description={level.title}
                path={level.path}
                buttonsData={level.exercises}
                ctaText="Let's Play"
              />
            </div>
          ))}
        </ListView>
      </motion.div>
    </div>
  );
}
