/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import CardTable from 'components/Cards/CardTable';
import Podium from 'components/Podium/Podium';
import { useState } from 'react';
import { getKeys } from 'utils/getKeys';
import { AuthContext } from 'store/authContext';
import useFetchQuery from 'hooks/queries/useFetchQuery';
import PodiumStep from 'components/Podium/PodiumStep';

export const ClanList = ({ clans, onEdit }) => {
  const [headers, setHeaders] = useState([]);
  const [headersUser, setHeadersUser] = useState([]);
  const [headersMyClan, setHeadersMyClan] = useState([]);
  const { user } = useContext(AuthContext);
  const { data: users, error, isPending } = useFetchQuery('https://la-esperanza-backe-end.onrender.com/users');
  useEffect(() => {
    setHeaders([...getKeys(clans)]);
    setHeadersMyClan([...getKeys(user?.clan?.members)]);
  }, [clans, user?.clan?.members]);

  useEffect(() => {
    setHeadersUser([...getKeys(users)]);
  }, [users]);

  const sortedClans = clans?.sort((a, b) => b.average - a.average);
  const top3Clans = sortedClans?.slice(0, 3);

  const sortedUsers = users.sort((a, b) => b.score - a.score)
  const top3Users = sortedUsers.slice(0, 3)
  return (
    <div className="w-full py-4">
      <div className="flex flex-wrap">
        <div className="w-full flex items-center justify-center h-full px-4">
          <PodiumStep winners={top3Clans} type="clan" />
        </div>
        <div className="w-full">
          <CardTable headers={headers} onEdit={onEdit} data={sortedClans} color="dark" title="Clans" />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full flex items-center justify-center h-full px-4">
          <PodiumStep winners={top3Users} />
        </div>
        <div className="w-full">
          <CardTable headers={headersUser} data={sortedUsers} color="dark" title="Tabla de Usuarios" onEdit={onEdit} />
        </div>
      </div>
    </div>
  );
};
