import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Logo } from '../../components/logo';
import { Message } from '../../components/message/message';
import { UserNav } from '../../components/user-nav/user-nav';
import styles from './not-found-page.module.css';
import { AppRoute } from '../../const';

const NotFoundPage = () => (
  <>
    <section className={`film-card ${styles['not-found-card']}`}>
      <div className="film-card__bg">
        <img
          src="https://assets.flocktory.com/uploads/clients/3364/59794ef4-d4fc-4ed3-9618-b0f093dba9b0_gargantua-black-5200x32502-9621.jpg"
          alt="Gargantua"
        />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className="film-card__head">
        <Logo />
        <UserNav />
      </Header>
    </section>

    <div className={`page-content ${styles['not-found-page-content']}`}>
      <Message message="404 Page Not Found" />
      <Link className={styles['not-found-link']} to={AppRoute.Root}>
        Back
      </Link>
      <Footer />
    </div>
  </>
);

export { NotFoundPage };
