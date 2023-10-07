import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute } from '../../const';

type TLogoProps = {
  light?: boolean;
};

const Logo = ({ light = false }: TLogoProps) => {
  const { pathname } = useLocation();
  const linkPath = pathname === '/' ? '' : AppRoute.Root;

  return (
    <div className="logo">
      <Link
        className={`logo__link ${classNames({ 'logo__link--light': light })}`}
        to={linkPath}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export { Logo };
