import { Routes, Route, Navigate } from "react-router-dom";
import { userRoutes, publicRoutes} from "./routes";
import { observer } from "mobx-react-lite";
//import { shallowEqual, useSelector } from 'react-redux';


const getRoutes = (routeArray) => {
  return routeArray.map(({ path, Component }, index) => (
    <Route key={index + path} path={path} element={Component} />
  ));
};

const getLinks = (isAuth)=>{

  const paths = {
    user: getRoutes(userRoutes)
  }
  if(isAuth  === true) return paths.user
}


function AppRouter() {
  /*const { isAuth } = useSelector(state => ({
    isAuth: state.users.isAuth
  }), shallowEqual)
  const { isUser } = useSelector(state => ({
      isUser: state.users.isUser
    }), shallowEqual)
  const { isAdmin } = useSelector(state => ({
      isAdmin: state.users.isAdmin
  }), shallowEqual)*/
  const isAuth = false
  
  return (
    <Routes>
      {getLinks(isAuth)}
      {getRoutes(publicRoutes)}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default observer(AppRouter);
