import React from "react";
import "./AuthPage.css";
import Layout from "../../../components/layout/Layout";
import { AuthConsumer } from "../../../App";
import { useNavigate } from "react-router-dom";
import { IauthDataMore } from "../../../types/pages/auth/authTypes";
import { useAuth } from "../../../hooks/useAuth";

const AuthPage = () => {
  const [authData, setAuthData] = React.useState<IauthDataMore>({
    login: "",
    password: "",
    name: '',
    id: '',
  });

  const navigation = useNavigate();

  const { changeRole, handleChangeName } = AuthConsumer();
  const {
    handleChangeLogin,
    handleChangePassword,
    handleSubmit
} = useAuth({setAuthData, authData, changeRole, navigation, handleChangeName})

  return (
    <Layout>
      <div className="auth_page">
        
        <p className="login_p">Введите логин:</p>
        <input onChange={handleChangeLogin} type="text" />
        <p className="password_p">Введите пароль:</p>
        <input onChange={handleChangePassword}/>
        <br />
        <button onClick={handleSubmit} className="auth_button">
          Авторизация
        </button>
      </div>
    </Layout>
  );
};

export default AuthPage;
