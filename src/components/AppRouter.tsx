import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {STAT_PATH, routes} from '../routes';

const AppRouter = () => (
    <Routes>
        {routes
            .filter((item) => !item.hidden)
            .map(({path, Component}) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        <Route path="*" element={<Navigate to={STAT_PATH} />} />
    </Routes>
);

export default AppRouter;
