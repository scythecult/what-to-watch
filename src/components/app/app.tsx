import { Main, TMockFilm } from '../../pages/main/main';

type TAppProps = {
  mockFilms: TMockFilm[];
};

const App = ({ mockFilms }: TAppProps) => <Main films={mockFilms} />;

export { App };
