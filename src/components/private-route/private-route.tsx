import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type TPrivateRouteProps = PropsWithChildren;

const PrivateRoute = ({ children }: TPrivateRouteProps) => {
  const isAuth = false;

  return isAuth ? children : <Navigate to={AppRoute.Root} />;
};

export { PrivateRoute };
