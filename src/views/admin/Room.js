/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import HeaderStats from 'components/Headers/HeaderStats';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import { UserList } from 'containers/Room/UserTab';
import { AddStudentForm } from 'containers/Room/AddStudentForm';
import { SearchStudentForm } from 'containers/Room/SearchStudentForm';
import { usePostPutMutation } from 'hooks/queries/usePostPutMutation';
import { useForm } from 'react-hook-form';
import { LoadingComponent } from 'components/Loading/Loading';
import { toast } from 'sonner';
import useFetchQuery from 'hooks/queries/useFetchQuery';
import { UserDetail } from 'containers/Room/UserDetail';
import { useParams } from 'react-router-dom';
import { AddClan } from 'containers/Clan/AddClan';
import { MdGroupAdd } from 'react-icons/md';
import { data } from 'autoprefixer';

export const Room = () => {
  const [activeTab, setActiveTab] = useState('usuarios');
  const [searchValue, setSearchValue] = useState('');
  const [showDetail, setshowDetail] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    mutate: addStudent,
    error,
    isPending,
  } = usePostPutMutation(() => 'https://la-esperanza-backe-end.onrender.com/auth/register', {
    method: 'POST',
    onSuccess: () => {
      toast.success('Usuario creado con éxito');
      reset();
    },
  });

  const {
    mutate: searchUser,
    result,
    error: errorUser,
    isPending: isPendingUser,
  } = usePostPutMutation(searchValue => `https://la-esperanza-backe-end.onrender.com/users/${searchValue}`, {
    method: 'POST',
    onSuccess: () => {
      setshowDetail(true);
    },
  });

  const {
    data: clans,
    error: errorAllClans,
    isPending: isPendingAllClans,
    refetch: refetchClans,
  } = useFetchQuery('https://la-esperanza-backe-end.onrender.com/clans');

  const handleAddStudent = values => {
    addStudent({ data: values });
  };

  const handleEdit = rowData => {
    searchUser({
      data: { by: 'userName' },
      exerciseId: rowData.userName, // Asumiendo que quieres usar userName como exerciseId
    });
    errorUser === null && setActiveTab('detalle');
  };

  const handleSearchStudent = () => {
    searchUser({ data: { by: 'userName' }, exerciseId: searchValue });
    errorUser === null && setActiveTab('detalle');
  };

  const handleTab = tab => {
    setshowDetail(false);
    setActiveTab(tab);
  };

  const formFields = [
    { type: 'text', id: 'name', label: 'Nombre', defaultValue: '' },
    { type: 'number', id: 'identityCard', label: 'N° Identity', defaultValue: '' },
    { type: 'number', id: 'score', label: 'Score', defaultValue: '0' },
    { type: 'text', id: 'userName', label: 'Nombre de usuario', defaultValue: '' },
    { type: 'number', id: 'rolId', label: 'Rol', defaultValue: '2' },
    { type: 'password', id: 'password', label: 'Password', defaultValue: '' },
    {
      type: 'select',
      id: 'clanId',
      label: 'Clan',
      options: clans && clans,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'usuarios':
        return <UserList onEdit={handleEdit} />;
      case 'agregar':
        return (
          <AddStudentForm
            onSubmit={handleAddStudent}
            handleSubmit={handleSubmit}
            error={error}
            errors={errors}
            register={register}
            formFields={formFields}
          />
        );
      case 'buscar':
        return <SearchStudentForm onSubmit={handleSearchStudent} setSearchValue={setSearchValue} />;
      case 'clan':
        return <AddClan clans={clans} refetch={() => {}} />;
      case 'detalle':
        return isPendingUser ? (
          <LoadingComponent />
        ) : (
          result !== null && (
            <UserDetail
              user={result && result}
              searchUser={searchUser}
              clans={clans}
              close={() => {
                window.location.reload();
              }}
            />
          )
        );
      default:
        return null;
    }
  };

  const renderTab = (name, icon) => (
    <button
      className={`flex items-center my-1 py-2 px-4 rounded-md text-white ${
        activeTab === name ? 'bg-sky-500 shadow-md ' : 'text-gray-700 bg-gray-200'
      }`}
      onClick={() => handleTab(name)}
    >
      {icon}
      {name}
    </button>
  );

  const tabs = [
    {
      name: 'usuarios',
      icon: <TiGroup className="mr-2" />,
    },
    {
      name: 'agregar',
      icon: <FaUserPlus className="mr-2" />,
    },
    {
      name: 'clan',
      icon: <MdGroupAdd className="mr-2" />,
    },
    {
      name: 'buscar',
      icon: <FaSearch className="mr-2" />,
    },
  ];

  return (
    <div className="container mx-auto relative mb-4">
      <div className="w-96 my-6 md:w-full md:pr-8 lg:p-0 lg:w-full">
        <HeaderStats title="Room" bgColor="bg-sky-500" />
      </div>
      {(isPendingUser || isPending) && <LoadingComponent />}
      <div className="px-4 mt-4 flexflex-col">
        {user && user.rol.name !== 'student' && (
          <div className="flex flex-col md:flex-row justify-between">
            {tabs.map(item => renderTab(item.name, item.icon))}
          </div>
        )}
        <div className="container mt-6">
          {user.rol.name === 'student' ? (
            <UserDetail
              user={user}
              close={() => {
                window.location.reload();
              }}
            />
          ) : (
            renderContent()
          )}
        </div>
      </div>
    </div>
  );
};
