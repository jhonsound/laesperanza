import React, { useContext, useEffect, useState } from 'react';
import { MissionList } from '../../containers/MissionList/MissionList';
import { ActionButtonCTA } from '../../components/Buttons/ActionButtonCTA';
import { ModalRegister } from '../../containers/ModalRegister/ModalRegister';
import { LearnBanner } from '../../components/Banners/LearnBanner';
import { useNavigate } from 'react-router-dom';
import useFetchQuery from 'hooks/queries/useFetchQuery';
import { LoadingComponent } from 'components/Loading/Loading';
import { toast } from 'sonner';
import { AuthContext } from 'store/authContext';

export default function Dashboard() {
  const [selectedMission, setSelectedMission] = useState(null);
  const [hoveredMission, setHoveredMission] = useState(null);
  const [mission, setMission] = useState('No selected yet!');
  const { getUserData } = useContext(AuthContext)
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();



  // Use the custom hook to fetch missions
  const { data, error, isPending } = useFetchQuery('https://la-esperanza-backe-end.onrender.com/missions');

  useEffect(() => {
    const data = getUserData()

    if (error) {
      toast.error(error.response.data.message)
    }
  }, [data, error]);

  const handleMissionSelect = (mission) => {
    setSelectedMission(mission.id === selectedMission ? null : mission.id);
  };

  const handleLetsGoClick = () => {
    if (selectedMission === null) {
      return;
    }

    const mission = data?.find(m => m.id === selectedMission);
    setMission(selectedMission);

    navigate(`/admin/mission/${mission.name}/${mission.id}`, { state: { mission: mission } });
  };


  return (
    <div className="container mx-auto flex flex-col justify-center items-center relative h-full w-full px-4">
      {isPending && <LoadingComponent />}
      <LearnBanner theme={mission.name} />
      <div className="mb-0 flex flex-col justify-center w-full">
        <MissionList
          missions={data || []}
          selectedMission={selectedMission}
          onMissionSelect={handleMissionSelect}
          hoveredMission={hoveredMission}
          onHoverMission={setHoveredMission}
        />
        <div className="flex justify-center mt-2">
          <ActionButtonCTA selectedMission={selectedMission} handleLetsGoClick={handleLetsGoClick} />
        </div>
      </div>

      <ModalRegister
        showModal={showModal}
        setShowModal={setShowModal}
        missions={data || []}
        selectedMission={selectedMission}
      />
    </div>
  );
}
