import { PropsWithChildren } from 'react';

type THeaderProps = PropsWithChildren<{
  className?: string;
}>;

const Header = ({ className = '', children }: THeaderProps) => (
  <header className={`page-header ${className}`}>{children}</header>
);

export { Header };
