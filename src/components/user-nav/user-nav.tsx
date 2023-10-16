import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const UserNav = () => {
  const authStatus = 'auth';

  return (
    <ul className="user-block">
      {authStatus === 'auth' ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
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
