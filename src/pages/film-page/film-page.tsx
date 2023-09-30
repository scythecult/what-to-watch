import { FilmCard } from '../../components/film-card/film-card';
import { FilmDescription } from '../../components/film-description/film-description';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

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

        <Header />

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
            {/* tabs */}
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item film-nav__item--active">
                  <a href="#" className="film-nav__link">
                    Overview
                  </a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">
                    Details
                  </a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">
                    Reviews
                  </a>
                </li>
              </ul>
            </nav>

            {/* rating */}
            <div className="film-rating">
              <div className="film-rating__score">8,9</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">Very good</span>
                <span className="film-rating__count">240 ratings</span>
              </p>
            </div>

            {/* about */}
            <div className="film-card__text">
              <p>
                In the 1930s, the Grand Budapest Hotel is a popular European ski
                resort, presided over by concierge Gustave H. (Ralph Fiennes).
                Zero, a junior lobby boy, becomes Gustaves friend and protege.
              </p>

              <p>
                Gustave prides himself on providing first-class service to the
                hotels guests, including satisfying the sexual needs of the many
                elderly women who stay there. When one of Gustaves lovers dies
                mysteriously, Gustave finds himself the recipient of a priceless
                painting and the chief suspect in her murder.
              </p>

              <p className="film-card__director">
                <strong>Director: Wes Anderson</strong>
              </p>

              <p className="film-card__starring">
                <strong>
                  Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe
                  and other
                </strong>
              </p>
            </div>
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
