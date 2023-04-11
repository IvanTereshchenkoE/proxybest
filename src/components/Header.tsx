import React from "react";
import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="nav_logo">
        <a href="#">Логотип</a>
      </div>
      <div className="nav_links">
        <a href="#">Пакеты</a>
        <a href="#">Контакты</a>
        <a href="#">Партнерство</a>
        <a href="#">Цены мира</a>
        <a href="#">Мои заказы</a>
      </div>
      <div className="nav_auth">
        <a href="#">Авторизация</a>
        <a href="#">Регистрация</a>
      </div>
      <div className="nav_lang">
        <a href="#">Язык</a>
      </div>
    </div>
  );
};

