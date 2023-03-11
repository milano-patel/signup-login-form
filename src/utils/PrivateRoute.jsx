import { Outlet, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
  const location = useLocation();

  return location.state !== null ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
