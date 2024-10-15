import { motion } from "framer-motion";
import { useState } from 'react';

export const SearchStudentForm = ({ onSubmit,setSearchValue }) => {


  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()

  }
  return (
    <motion.div
      className="bg-white shadow-lg rounded p-4 mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold mb-2">Buscar Estudiante</h2>
      <form >
        <div className="mb-4">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Buscar
          </label>
          <input
/*           onChange={(e) => {e.preventDefault()  }} 
 */            type="text"
            id="search"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Buscar Estudiante"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
            onClick={handleSubmit}
          >
            Buscar
          </button>
        </div>
      </form>
    </motion.div>
  )
};
