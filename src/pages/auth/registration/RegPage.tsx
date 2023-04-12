import React from "react";
import "./RegPage.css";
import Layout from "../../../components/layout/Layout";

const RegPage = () => {
  return (
    <Layout>
      <div className="reg_page">
        <p className="reg_email_p">Введите email:</p>
        <input type="email" />
        <p className="reg_login_p">Введите логин:</p>
        <input type="text" />
        <p className="reg_password_p">Введите пароль:</p>
        <input type="text" />
        <p className="reg_apassword_p">Подтвердите пароль:</p>
        <input type="text" />
        <br />
        <button className="auth_button">Регистрация</button>
      </div>
    </Layout>
  );
};

export default RegPage;
