import React, { useEffect, useState } from 'react';
import HeaderStats from 'components/Headers/HeaderStats';
import { TiGroup } from 'react-icons/ti';
import { LoadingComponent } from 'components/Loading/Loading';
import { toast } from 'sonner';
import useFetchQuery from 'hooks/queries/useFetchQuery';
import { ClanList } from 'containers/Clan/ClanList';
import { AddClan } from 'containers/Clan/AddClan';
import { ClanDetail } from 'containers/Clan/ClanDetail';
import { MdGroupAdd } from 'react-icons/md';

export const Clan = () => {
  const [activeTab, setActiveTab] = useState('clanes');
  const [selectedClan, setSelectedClan] = useState(null); // Cambiado de clan a selectedClan
  const { data: clans, error, isPending, refetch } = useFetchQuery('https://la-esperanza-backe-end.onrender.com/clans');
  const {
    data: users,
    error: errorUser,
    isPending: isPendingUser,
  } = useFetchQuery('https://la-esperanza-backe-end.onrender.com/users');
  useEffect(() => {
    if (error) {
      toast.error(error.response?.data?.message || 'Error al cargar clanes');
    }
  }, [error]);

  const handleEdit = clan => {
    setSelectedClan(clan);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'clanes':
        return <ClanList clans={clans} onEdit={handleEdit} refetch={refetch} />;
      case 'agregar':
        return <AddClan refetch={refetch} />;
      default:
        return null;
    }
  };
  const user = JSON.parse(localStorage.getItem('user'));


  return (
    <div className="container mx-auto relative">
      <div className="w-96 my-6 md:w-full md:pr-8 lg:p-0 lg:w-full">
        <HeaderStats title="Scores" bgColor="bg-indigo-500" />
      </div>
      {isPending && <LoadingComponent />}
      {/*  <div className="px-4 mt-4">
        <div className="flex justify-around rounded-t-lg">
          <button
            className={`flex items-center py-2 px-4 rounded-md text-white ${
              activeTab === 'clanes' ? 'bg-sky-500 shadow-md ' : 'text-gray-700 bg-gray-200'
            }`}
            onClick={() => setActiveTab('clanes')}
          >
            <TiGroup className="mr-2" />
            Clanes
          </button>
          <button
            className={`flex items-center py-2 px-4 rounded-md text-white ${
              activeTab === 'agregar' ? 'bg-sky-500 shadow-md ' : 'text-gray-700 bg-gray-200'
            }`}
            onClick={() => setActiveTab('agregar')}
          >
            <MdGroupAdd className="mr-2" />
            Usuarios
          </button>
        </div>
        <div className="p-4 rounded-b-lg">
          {selectedClan ? (
            <ClanDetail
              refetch={refetch}
              clan={selectedClan}
              close={() => setSelectedClan(null)} // Asegúrate de que el estado vuelve a null al cerrar
            />
          ) : (
            renderContent()
          )}
        </div>
      </div> */}
      {(user.rol.name !== 'student' && selectedClan) ?
        <ClanDetail
          refetch={refetch}
          clan={selectedClan}
          close={() => setSelectedClan(null)} // Asegúrate de que el estado vuelve a null al cerrar
        /> :

        renderContent()
      }
    </div>
  );
};
