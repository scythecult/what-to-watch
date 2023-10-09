import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

type TPrivateRouteProps = PropsWithChildren<{
  authStatus: (typeof AuthStatus)[keyof typeof AuthStatus];
}>;

const PrivateRoute = ({ children, authStatus }: TPrivateRouteProps) =>
  authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.Login} />;

export { PrivateRoute };
