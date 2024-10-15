import { motion } from 'framer-motion';

export const AddStudentForm = ({ onSubmit, error: apiError, errors, handleSubmit, register }) => {
  return (
    <motion.div
      className="bg-sky-600 shadow-lg rounded p-4 mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold mb-2">Agregar Estudiante</h2>
      {apiError && <p className="text-red-500">{apiError.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nombre"
            {...register('name', { required: 'El nombre es requerido' })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            N° Identity
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Nombre"
            {...register('identityCard', { required: 'El numero de identidad requerido' })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block text-sm font-medium text-gray-700">
            UserName
          </label>
          <input
            type="text"
            id="position"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Posición"
            {...register('userName', { required: 'La posición es requerida' })}
          />
          {errors.userName && <p className="text-red-500">{errors.position.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="text"
            id="position"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Posición"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="text-red-500">{errors.position.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="clan" className="block text-sm font-medium text-gray-700">
            Clan
          </label>
          <input
            type="text"
            id="clan"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Clan"
            {...register('clan', { required: 'El clan es requerido' })}
          />
          {errors.clan && <p className="text-red-500">{errors.clan.message}</p>}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add
          </button>
        </div>
      </form>
    </motion.div>
  );
};
