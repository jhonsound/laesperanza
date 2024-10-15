import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

export const ModalSimple = ({ setShowModal, title="", children }) => {
  const closeModal = e => {
    if (e?.target === e.currentTarget) {
      setShowModal(0);
    }
  };

  const [valor, setValor] = useState('');


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 top-0 mx-auto w-full h-full z-40 flex items-center justify-center"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-auto p-10 my-auto mx-auto  rounded-lg shadow-lg outline-none focus:outline-none z-50"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white text-gray-700 hover:text-red-500 shadow-md hover:shadow-lg focus:outline-none flex items-center justify-center transition duration-150"
          onClick={() => setShowModal(0)}
        >
          <MdClose size={24} />
        </button>

        <div className="flex flex-col bg-sky-400 rounded-md ">
          {title && (
            <div className="flex justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          )}

{/*           <h1>Valor del div especial: {valor}</h1>
 */}          <div className="p-6 my-2 overflow-y-auto" style={{ maxHeight: '80vh' }}>{children}</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="opacity-75 fixed w-full h-full inset-0 bg-black"
      />
    </motion.div>
  );
};
