import { Helmet } from 'react-helmet-async';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { LoginForm } from '../../components/login-form/login-form';
import { Logo } from '../../components/logo/logo';

const LoginPage = () => (
  <div className="user-page">
    <Helmet>
      <title>Что посмотреть. Логин</title>
    </Helmet>
    <Header className="user-page__head">
      <Logo />
      <h1 className="page-title user-page__title">Sign in</h1>
    </Header>

    <div className="sign-in user-page__content">
      <LoginForm />
    </div>

    <Footer />
  </div>
);

export { LoginPage };
