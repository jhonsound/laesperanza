import React from "react";
import { motion } from "framer-motion";
import { Form } from 'components/Forms/Form';

export const AddStudentForm = ({
  onSubmit,
  error: apiError,
  errors,
  handleSubmit,
  register,
  formFields = [],
}) => {
  return (
    <motion.div
      className="bg-sky-100 shadow-lg rounded p-4 mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold mb-2">Agregar Estudiante</h2>
      <Form
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        error={apiError}
        errors={errors}
        register={register}
        formFields={formFields}
      />

    </motion.div>
  );
};
