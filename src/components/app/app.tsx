import { MainPage, TMockFilm } from '../../pages/main-page/main-page';

type TAppProps = {
  mockFilms: TMockFilm[];
};

const App = ({ mockFilms }: TAppProps) => (
  <>
    <MainPage films={mockFilms} />
    {/* <FilmPage /> */}
  </>
);

export { App };
