import React from "react";

const RegPage = () => {
  return (
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
  );
};

export default RegPage;
