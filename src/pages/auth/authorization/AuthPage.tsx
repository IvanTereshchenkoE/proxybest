import React from "react";
import "./AuthPage.css";
import Layout from "../../../components/layout/Layout";
import { AuthConsumer } from "../../../App";
import { useNavigate, useNavigation } from "react-router-dom";
import generate from "../../../utils/generate";
import { usersBase } from "../../../mock/usersBase";

const AuthPage = () => {
  const [authData, setAuthData] = React.useState({
    login: "",
    password: "",
  });

  const navigation = useNavigate();

  const { changeRole, handleChangeName } = AuthConsumer();

  const handleChangeLogin = (e) => {
    setAuthData((prev) => ({ ...prev, login: e.target.value }));
  };

  const handleChangePassword = (e) => {
    setAuthData((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleSubmit = () => {
    if (
      authData.login.length > 5 &&
      authData.password.length > 5
    ) {
      const user = usersBase.find(
        (user) =>
          user.login === authData.login && user.password === authData.password
      );
      if (user) {
        changeRole("default");
        navigation("/");
        handleChangeName(user.name)
      } else {
        alert("Пользователь не найден")
      }
    }
  };
//   console.log(generate("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"));
  return (
    <Layout>
      <div className="auth_page">
        <p className="login_p">Введите логин:</p>
        <input onChange={handleChangeLogin} type="text" />
        <p className="password_p">Введите пароль:</p>
        <input onChange={handleChangePassword} type="password" />
        <br />
        <button onClick={handleSubmit} className="auth_button">
          Авторизация
        </button>
      </div>
    </Layout>
  );
};

export default AuthPage;
