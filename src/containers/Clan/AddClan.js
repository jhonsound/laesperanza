import React from 'react';
import { motion } from 'framer-motion';
import { Form } from 'components/Forms/Form';
import { useForm } from 'react-hook-form';
import { usePostPutMutation } from 'hooks/queries/usePostPutMutation';
import { LoadingComponent } from 'components/Loading/Loading';
import { toast } from 'sonner';

export const AddClan = ({ refetch }) => {
  const INSIGNIA_TYPES = [
    { id: 'Basic', name: 'Basic', color: 'text-gray-500' },
    { id: 'Motivated', name: 'Motivated', color: 'text-emerald-500' },
    { id: 'Achiever', name: 'Achiever', color: 'text-blue-500' },
    { id: 'Leader', name: 'Leader', color: 'text-red-500' },
    { id: 'Innovator', name: 'Innovator', color: 'text-yellow-500' },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    mutate: addClan,
    error,
    isPending,
  } = usePostPutMutation('https://la-esperanza-backe-end.onrender.com/clans', {
    onSuccess: () => {
      toast.success('Clan creado con exito');
      reset();
      refetch();
    },
  });

  const add = values => {
    addClan({ data: values });
  };

  const formFields = [
    { type: 'text', id: 'name', label: 'Nombre', defaultValue: '' },
    { type: 'number', id: 'average', label: 'Score', defaultValue: '' },
    {
      type: 'select',
      id: 'status',
      label: 'Estado',
      defaultValue: 'enabled',
      options: [
        { id: 'enable', name: 'Activo' },
        { id: 'disable', name: 'Inactivo' },
      ],
    },
    {
      type: 'select',
      id: 'insigne',
      label: 'Insignia',
      defaultValue: 'none',
      options: INSIGNIA_TYPES,
    },
  ];

  return (
    <motion.div
      className="bg-sky-100 shadow-lg rounded-md p-4 mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isPending && <LoadingComponent />}
      <h2 className="text-lg font-bold mb-2">Agregar Clan</h2>
      <Form
        onSubmit={add}
        handleSubmit={handleSubmit}
        error={error}
        errors={errors}
        register={register}
        formFields={formFields}
      />
    </motion.div>
  );
};
