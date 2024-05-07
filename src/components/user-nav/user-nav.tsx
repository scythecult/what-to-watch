import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import {
  userAuthStatusSelector,
  userInfoSelector,
} from '../../store/user-slice/selectors';
import { logout } from '../../store/async-actions';

const UserNav = () => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(userAuthStatusSelector);
  const { email, avatarUrl } = useAppSelector(userInfoSelector);
  const shouldRenderUserInfo = authStatus === AuthStatus.Auth;

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  };

  return (
    <ul className="user-block">
      {shouldRenderUserInfo ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link className="user-block__link" to={AppRoute.Favorite}>
                <img src={avatarUrl} alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.Favorite}>
              {email}
            </Link>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" onClick={handleLogoutButtonClick}>
              Sign out
            </a>
          </li>
        </>
      ) : (
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.Login}>
            Sign in
          </Link>
        </li>
      )}
    </ul>
  );
};

export { UserNav };
