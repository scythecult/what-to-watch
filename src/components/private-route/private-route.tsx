import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-store';
import { userAuthStatusSelector } from '../../store/user-slice/selectors';

type TPrivateRouteProps = PropsWithChildren;

const PrivateRoute = ({ children }: TPrivateRouteProps) => {
  const authStatus = useAppSelector(userAuthStatusSelector);

  if (authStatus === AuthStatus.Unknown) {
    return <Navigate to={AppRoute.Root} />;
  }

  return authStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
};

export { PrivateRoute };
