import { Helmet } from 'react-helmet-async';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { LoginForm } from '../../components/login-form/login-form';
import { Logo } from '../../components/logo/logo';
import { UserInfoRequest } from '../../types';
import { useAppDispatch } from '../../hooks/use-store';
import { login } from '../../store/async-actions';
import { removeError } from '../../store/app-slice/app-slice';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleLoginFormSubmit = ({ email, password }: UserInfoRequest) => {
    dispatch(login({ email, password }));
    dispatch(removeError());
  };

  return (
    <div className="user-page">
      <Helmet>
        <title>Что посмотреть. Логин</title>
      </Helmet>
      <Header className="user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <LoginForm onSubmit={handleLoginFormSubmit} />
      </div>

      <Footer />
    </div>
  );
};

export { LoginPage };
