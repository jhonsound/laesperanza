// Admin.js
import React, { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../components/Navbars/AdminNavbar.js';
import Sidebar from '../components/Sidebar/Sidebar.js';
import img from '../assets/diseño-de-fondo.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingComponent } from '../components/Loading/Loading.js';

const sidebarVariants = {
  hidden: { x: -250, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -250, opacity: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Check initial window size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex w-screen">
      <div className="absolute flex w-full h-full">
        <img className='w-full blur-image' src={img} alt=""></img>
      </div>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed md:relative md:ml-0 w-64 md:w-64 h-screen z-10"
          >
            <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative flex-1">

        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={contentVariants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`relative p-4 md:pr-8 h-full overflow-y-auto ${!sidebarOpen ? 'pt-16' : 'pt-4'}`}
        >
          <AdminNavbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
          <Suspense fallback={<LoadingComponent />}>
            <Outlet />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
}
