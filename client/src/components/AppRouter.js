import React, { useContext } from 'react';
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';
import { observer } from "mobx-react-lite"

const AppRouter = observer(() => {
    const { user } = useContext(Context);
  return(
    <Routes>
        {user.isAuth && authRoutes.map(({path, component}) => {
            return  <Route key={path} path={path}  element={component} exact />
        })}
        {publicRoutes.map(({path, component}) => {
            return  <Route key={path} path={path}  element={component} exact />
        })}
        <Route path="*" element={<Navigate replace to="/"/>} /> 
    </Routes>
  ) 
});

export default AppRouter;
