import React, { useContext } from 'react';
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const { user } = useContext(Context);
    console.log(user);
  return(
    <Routes>
        {user.isAuth === true && authRoutes.map(({path, component}) => {
            return  <Route key={path} path={path}  element={component} exact />
        })}
        {publicRoutes.map(({path, component}) => {
            return  <Route key={path} path={path}  element={component} exact />
        })}
        <Route path="*" element={<Navigate replace to="/"/>} /> 
    </Routes>
  ) 
};

export default AppRouter;
