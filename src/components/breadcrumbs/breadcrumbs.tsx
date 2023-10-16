import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type TBreadcrumbsProps = {
  filmId: string | undefined;
  filmFitle?: string;
};

const Breadcrumbs = ({
  filmId = '',
  filmFitle = 'The Grand Budapest Hotel',
}: TBreadcrumbsProps) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link
          className="breadcrumbs__link"
          to={`${AppRoute.Film}/${filmId}/${AppRoute.FilmOverview}`}
        >
          {filmFitle}
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">Add review</a>
      </li>
    </ul>
  </nav>
);

export { Breadcrumbs };
