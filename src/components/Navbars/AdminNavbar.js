import React, { useContext } from "react";
import { CiLogout } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from 'store/authContext';

export default function Navbar({ toggleSidebar, sidebarOpen }) {
  const history = useNavigate();
  const { logout } = useContext(AuthContext)


  const handleLogout = () => {
    logout()
    history("/");
  };

  return (
    <nav className={`fixed top-0 left-0 h-auto  bg-white flex items-center left-0 px-4  top-0 w-full ${!sidebarOpen && "z-50"}`}>
      <div className="flex pt-2 pb-2 items-center justify-center
         mx-auto relative w-full">
        {!sidebarOpen && <motion.div
          style={{ userSelect: "none" }}
          key='name'
          initial={{ opacity: 1, y: -5 }}
          animate={
            !sidebarOpen
              ? { opacity: 1, scale: 1.02, y: 0.9 }
              : { opacity: 1, scale: 1.02, y: 0.9 }
          }
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}

          className="flex items-center justify-center w-full">
          <button
            onClick={toggleSidebar}
            className="absolute flex justify-center items-center text-white left-2 p-2 rounded-sm bg-sky-500 rounded-full shadow-xl text-white w-8"
          >
            <FaBars size={18} />
          </button>
          <span class="text-sky-400 font-semibold text-xl">La esperanza</span>
          <div
            onClick={handleLogout}
            className="absolute right-0 flex-col text-black cursor-pointer font-bold md:flex-row list-none items-center hidden md:flex pr-10"
          >
            <CiLogout size={20} />
          </div>
        </motion.div>}
      </div>
    </nav>
  );
}
