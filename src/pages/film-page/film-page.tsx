import { FilmCard } from '../../components/film-card/film-card';
import { FilmDescription } from '../../components/film-description/film-description';
import { FilmDetails } from '../../components/film-details/film-details';
import { FilmOverview } from '../../components/film-overview/film-overview';
import { FilmReviews } from '../../components/film-reviews/film-reviews';
import { FilmTabs } from '../../components/film-tabs/film-tabs';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo';
import { UserNav } from '../../components/user-nav/user-nav';

const FilmPage = () => (
  <>
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className="film-card__head">
          <Logo />
          <UserNav />
        </Header>

        <div className="film-card__wrap">
          <FilmDescription />
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img
              src="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="film-card__desc">
            <FilmTabs />

            <FilmOverview />

            <FilmDetails />

            <FilmReviews />
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__films-list">
          <FilmCard />
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export { FilmPage };
