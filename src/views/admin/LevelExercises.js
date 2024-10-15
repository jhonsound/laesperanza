import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ButtonGame } from 'components/Buttons/ButtonGameh';
import { ModalSimple } from '../../components/Modals/simple';
import HeaderStats from 'components/Headers/HeaderStats';
import { useNavigate, useLocation } from 'react-router-dom/';
import { LevelGeneral } from 'containers/Levels/LevelGeneral/LevelGeneral';
import { LevelOneSpecial } from 'containers/Levels/LevelOneSpecial/LevelOneSpecial';
import { LeveUploadFile } from 'containers/Levels/LevelUploadFiles/LevelUploadFiles';
import { FaStar } from 'react-icons/fa';
import bgColombia from '../../assets/img/bgColombia.jpeg';


const exerciseIconMap = {
  'Challenge 11': 'FaCalculator',
  'Challenge 12': 'FaBookOpen',
  'Challenge 4': 'TbSlideshow',
  'default': 'FaMapMarkerAlt'
};


const exerciseIconColor = {
  'Challenge 11': 'green-400',
  'Challenge 12': 'green-400',
  'Challenge 4': 'purple-500',
  'default': 'green-500'
};

const LevelExercises = () => {
  const [showModal, setShowModal] = useState(0);
  const [linkIframe, setLinkIframe] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleFileUpload = (base64, fileName) => {
    if (base64) {
      uploadFile(base64, fileName);
    } else {
      console.log('Archivo eliminado');
    }
  };

  const uploadFile = (base64, fileName) => {
    fetch('https://tu-endpoint/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: base64,
        fileName: fileName,
      }),
    })
      .then(response => response.json())
      .then(data => console.log('Éxito:', data))
      .catch(error => console.error('Error:', error));
  };

  const handleModal = exercise => {
    setShowModal(1);
    setLinkIframe(exercise);
  };

  const headerStyle = {
    marginBottom: '1rem',
    width: '100%',
    paddingTop:'50px'
  };

  const rowStyle = {
    display: 'flex',
    flex: 1,
    margin: '3rem auto',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    backgroundColor: '#ffff',
    borderRadius: '0.5rem',
    width: '43%',
    padding: '1rem 1rem 1rem 1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '500px',
    margin: '0 2%',
  };

  const containerStyle = {
    width: '100%',
    borderRadius: '10px',
    backgroundImage: state.title !== 'level 3' ? `url(${bgColombia})` : 'none',
    backgroundSize: '70%',
    padding: '10%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: state.title !== 'level 3' ? '#d5f7ff' : 'white',
    imageRendering: 'pixelated',
  };

  const renderExerciseDesc = item => (
    <div style={contentStyle}>
      <h2 className="text-base text-blueGray-500 font-semibold ">
        {item.name || 'N/A'}
        <br />
      </h2>
      <div className="flex items-center mt-2">
        <FaStar color="yellow" className="mr-4" size={30} />
        <span className="text-lg font-semibold">{item.score}</span>
      </div>
    </div>
  );
  const sortedExercises = state.buttonsData.sort((a, b) => a.id - b.id)
  return (
    <div className='container mx-auto '>
      <div style={headerStyle}>
        <HeaderStats bgColor="bg-emerald-500" onBack={() => navigate(-1)} title={state.title} />
      </div>
      <div className='flex h-full w-full items-center justify-center pt-4 mx-auto' style={containerStyle}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {state.title === 'level 3' ? (
            <LeveUploadFile onFileUpload={handleFileUpload} />
          ) : (
            sortedExercises.map((item, index) => {
              return (
                <div
                  className="z-100"
                  key={index}
                  style={{
                    ...rowStyle,
                  }}
                >
                  {index % 2 === 0 && (
                    <>
                      {renderExerciseDesc(item)}

                      <div style={{ paddingLeft: '6px', ...buttonContainerStyle }}>
                        <ButtonGame
                          size="xlarge"
                          key={index}
                          enabled={true}
                          animate={true}
                          click={() => handleModal(item)}
                          backgroundColor={exerciseIconColor[item.name] || exerciseIconColor['default']}
                          borderColor="blue-500"
                          iconColor="white"
                          icon={exerciseIconMap[item.name] || exerciseIconMap['default']}
                        />
                      </div>
                      <div style={{ width: '10%' }}></div>
                    </>
                  )}
                  {index % 2 !== 0 && (
                    <>
                      <div style={{ width: '10%' }}></div>
                      <div style={{ paddingRight: '6px', ...buttonContainerStyle }}>
                        <ButtonGame
                          size="xlarge"
                          key={index}
                          enabled={item.enabled}
                          animate={item.animate}
                          click={() => handleModal(item)}
                          backgroundColor={exerciseIconColor[item.name] || exerciseIconColor['default']}
                          borderColor={item.borderColor}
                          iconColor={item.iconColor}
                          icon={exerciseIconMap[item.name] || exerciseIconMap['default']}
                        />
                      </div>
                      {renderExerciseDesc(item)}
                    </>
                  )}
                </div>
              );
            })
          )}
        </motion.div>
      </div>

      {showModal === 1 && (
        <ModalSimple setShowModal={setShowModal}>
          {linkIframe.name === 'Challenge 4' ? (
            <LevelOneSpecial linkIframe={linkIframe} />
          ) : (
            <LevelGeneral linkIframe={linkIframe} />
          )}
        </ModalSimple>
      )}
    </div>
  );
};

export default LevelExercises;
