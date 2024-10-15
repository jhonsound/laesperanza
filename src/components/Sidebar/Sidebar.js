import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import { CiLogout } from 'react-icons/ci';

import { AuthContext } from 'store/authContext';
import { getLogoClan } from 'components/Forms/Form';
import { menuItems } from 'constans';



export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [animate, setAnimate] = useState({});
  const { logout, user } = useContext(AuthContext);

  const handleLinkClick = path => {
    setAnimate({ [path]: true });
    navigate(path);
  };

  const isMissionPath = location.pathname.includes('/mission/') || location.pathname.includes('/exercises/');
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const filteredMenuItems = menuItems(user).filter(item => {
    return true;
  });

  return (
    <>
      <nav className="w-full lg:w-1/6 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white h-full flex relative md:w-48">
        <div className="md:flex-col md:min-h-full md:flex-nowrap px-2 flex flex-col w-full mx-auto">
          {sidebarOpen && (
            <div className="relative h-auto flex p-2 z-50">
              <button
                onClick={toggleSidebar}
                className="mt-1 mr-2 top-0 bg-transparent rounded-sm text-sky-500 text-white"
              >
                <RiMenuUnfoldLine size={20} />
              </button>
              <span className="text-sky-400 font-semibold">La esperanza</span>
              <div
                onClick={handleLogout}
                className="absolute right-2 flex-col text-black cursor-pointer font-bold md:flex-row list-none items-center hidden md:flex"
              >
                <CiLogout size={20} />
              </div>
            </div>
          )}
          <div className="flex flex-col items-center text-center pt-2 border-b border-solid border-blueGray-200">
            <div
              style={{ height: '100px', width: '100px' }}
              className="bg-yellow-1000 rounded-full flex justify-center p-1"
            >
              <img
                alt="Avatar"
                className="object-cover rounded-full align-middle border-none shadow-lg"
                src="https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_1280.jpg"
              />
            </div>
            <div className="flex flex-col w-full text-left px-4 font-normal mt-4 mb-4">
              <div className="flex items-center">
                <img
                  className="h-6 w-6 mr-2"
                  alt=""
                  src="https://cdn-icons-png.freepik.com/512/12533/12533678.png?uid=R14616162&ga=GA1.1.1388387993.1716572490"
                />
                <div className="flex flex-col text-blueGray-400 text-sm">
                  <span>{user?.name}</span>
                  <span className="text-xs">{user?.identityCard}</span>
                </div>
              </div>
              <div className="flex mb-3 items-center text-blueGray-400 text-sm">
                <img
                  className="w-6 h-6 mr-2"
                  alt=""
                  src="https://cdn-icons-png.freepik.com/512/12772/12772161.png?uid=R14616162&ga=GA1.1.1388387993.1716572490"
                />
                <span className="">
                  <b>Score: </b>
                  {user?.score} pts
                </span>
              </div>
              <div className="flex items-center text-blueGray-400 text-sm">
                <img className="w-6 h-6 mr-2" src={getLogoClan(user?.clan?.name)} alt={user?.clan?.name} />
                <span>
                  <b>Clan: </b>
                  {user?.clan?.name}
                </span>
              </div>
            </div>
          </div>
          <div className="px-2">
            {filteredMenuItems?.map((item, index) => {
              let color = 'bg-sky-500';
              switch (item.path) {
                case '/admin/dashboard':
                  color = 'bg-emerald-500';
                  break;
                case '/admin/mission':
                  color = 'bg-emerald-500';
                  break;
                case '/admin/clan':
                  color = 'bg-indigo-500';
                  break;
                case '/admin/room':
                  color = 'bg-sky-500';
                  break;
                default:
                  break;
              }

              return (
                <motion.div
                  key={index}
                  style={{ userSelect: 'none' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={animate[item.path] ? { opacity: 1, scale: 1.02, y: 0 } : { opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`text-xs uppercase py-3 text-white rounded cursor-pointer font-bold inline-flex w-full my-2 px-2 ${
                    location.pathname.includes(item?.path) || (item?.path === '/admin/dashboard' && isMissionPath)
                      ? color
                      : 'bg-sky-200'
                  }`}
                  onClick={() => handleLinkClick(item?.path)}
                >
                  <i className="mr-2 text-sm">
                    <item.icon />
                  </i>
                  <span>{item?.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
