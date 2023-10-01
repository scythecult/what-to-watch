import classNames from 'classnames';

type TLogoProps = {
  light?: boolean;
};

const Logo = ({ light = false }: TLogoProps) => (
  <div className="logo">
    <a className={`logo__link ${classNames({ 'logo__link--light': light })}`}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </a>
  </div>
);

export { Logo };
