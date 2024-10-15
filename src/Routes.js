import React, { lazy, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from 'store/authContext';
import { Clan } from 'views/admin/Clan';
import Dashboard from 'views/admin/Dashboard';
import LevelExercises from 'views/admin/LevelExercises';
import Levels from 'views/admin/Levels';
import { Room } from 'views/admin/Room';
import Settings from 'views/admin/Settings';

export const RouterComponent = () => {
    const { isAuth } = useContext(AuthContext);

    const Admin = lazy(() => import('layouts/Admin.js'));
    const Auth = lazy(() => import('layouts/Auth.js'));

    return (
        <Routes>
            <Route path="/admin" element={isAuth ? <Admin /> : <Navigate to="/" replace />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="mission/:name/:id" element={<Levels />} />
                <Route path="exercises/:name" element={<LevelExercises />} />
                <Route path="room" element={<Room />} />
                <Route path="room/:username" element={<Room />} />
                <Route path="settings" element={<Settings />} />
                <Route path="clan" element={<Clan />} />
            </Route>
            <Route path="/" element={isAuth ? <Navigate to="/admin/dashboard" replace /> : <Auth />} />
           {/*  <Route path="/" element={<div> Sitio en mantenimiento</div>} /> */}
        </Routes>
    );
};