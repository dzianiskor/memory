import React, { useState } from "react";
import s from "./Login.module.scss";

const LoginPage: React.FC = () => {
  const [code, setCode] = useState(false);

  const mockLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCode(true);
    setTimeout(() => {
      setCode(false);
    }, 2000);
  };

  return (
    <div
      className={s.loginWrapper}
      style={{ backgroundImage: `url("/img/menu/main.jpg")` }}
    >
      {code ? (
        <h1>Please wait...</h1>
      ) : (
        <a className={s.loginLink} href="/">
          <button
            className="btn btn-primary btn-lg"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              mockLogin(e);
            }}
          >
            <img src="/img/github.png" alt="cat" />
            <span>Login with GitHub</span>
          </button>
        </a>
      )}
    </div>
  );
};

export default LoginPage;
