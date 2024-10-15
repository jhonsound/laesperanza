import React, { useEffect, useState } from 'react';
import { Form } from 'components/Forms/Form';
import { useForm } from 'react-hook-form';
import { TiArrowBack } from 'react-icons/ti';
import { usePostPutMutation } from 'hooks/queries/usePostPutMutation';
import { LoadingComponent } from 'components/Loading/Loading';

const INSIGNIA_TYPES = [
  { id: 'Basic', name: 'Basic', color: 'text-gray-500' },
  { id: 'Motivated', name: 'Motivated', color: 'text-emerald-500' },
  { id: 'Achiever', name: 'Achiever', color: 'text-blue-500' },
  { id: 'Leader', name: 'Leader', color: 'text-red-500' },
  { id: 'Innovator', name: 'Innovator', color: 'text-yellow-500' },
];
const generateFormFields = clan => {
  const formFields = [
    { id: 'id', label: 'ID', type: 'text', defaultValue: clan.id },

    { type: 'text', id: 'name', label: 'Nombre', defaultValue: clan.name },
    { type: 'number', id: 'average', label: 'Score', defaultValue: clan.average },
    {
      type: 'select',
      id: 'status',
      label: 'Estado',
      defaultValue: clan.status,
      options: [
        { id: 'enable', name: 'Activo' },
        { id: 'disable', name: 'Inactivo' },
      ],
    },
    {
      type: 'select',
      id: 'insigne',
      label: 'Insignia',
      defaultValue: clan.insigne,
      options: INSIGNIA_TYPES,
    },
  ];

  return formFields;
};

export const ClanDetail = ({ clan, close, refetch }) => {
  const [clanSelected, setClanSelected] = useState('');

  const formFields = generateFormFields(clan);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: clan,
  });

  const {
    mutate: updateClan,
    error,
    isPending,
  } = usePostPutMutation(`https://la-esperanza-backe-end.onrender.com/clans/${clanSelected}`, {
    method: 'PUT',
    onSuccess: () => {
      close();
      reset();
      refetch();
    },
  });
  const handleUpdate = data => {
    setClanSelected(data.id);
    updateClan({ data });
  };

  useEffect(() => {
    reset(clan);
  }, [clan, reset]);

  return (
    <div className="flex-col items-center justify-center">
      {isPending && <LoadingComponent />}
      <div
        className="flex items-center justify-center bg-white rounded-md shadow-md w-full cursor-pointer"
        onClick={close}
      >
        <TiArrowBack color="green" />
        <span className="text-lg font-semibold ml-4">Volver atrás</span>
      </div>
      <div className="w-full py-4 mx-auto">
        <div className="flex">
          <div className="w-full">
            <Form
              onSubmit={handleUpdate}
              handleSubmit={handleSubmit}
              error={error}
              errors={errors}
              register={register}
              formFields={formFields}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
