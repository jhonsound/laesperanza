import React from 'react';
import { MissionCard } from '../../components/Cards/CardMission';

export const MissionList = ({ missions, selectedMission, onMissionSelect, hoveredMission, onHoverMission }) => {
  return (
    <div className="flex justify-center h-auto items-center mb-4 w-3/4 mx-auto">
      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          mission={mission}
          selectedMission={selectedMission}
          onMissionSelect={onMissionSelect}
          hoveredMission={hoveredMission}
          onHoverMission={onHoverMission}
        />
      ))}
    </div>
  );
};
