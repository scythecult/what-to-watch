import { FormEvent, useState } from 'react';
import { UserInfoRequest } from '../../types';
import { isEmailValid, isPasswordValid } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

export type LoginFormProps = {
  onSubmit: ({ email, password }: UserInfoRequest) => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLoginFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isEmailValid(userEmail) && isPasswordValid(userPassword)) {
      onSubmit({ email: userEmail, password: userPassword });
      navigate(AppRoute.Root);
      setUserEmail('');
      setUserPassword('');
    }
  };

  return (
    <form className="sign-in__form" action="#" onSubmit={handleLoginFormSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            value={userEmail}
            onChange={
              (evt) => setUserEmail(evt.target.value.toLowerCase().trim())
              // eslint-disable-next-line react/jsx-curly-newline
            }
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-email"
          >
            Email address
          </label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            value={userPassword}
            onChange={(evt) => setUserPassword(evt.target.value.trim())}
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-password"
          >
            Password
          </label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">
          Sign in
        </button>
      </div>
    </form>
  );
};

export { LoginForm };
