import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthConsumer } from "../../../App";

export default function Header() {
  const { role, name } = AuthConsumer();
  return (
    <div className="header">
      <div className="nav_logo">
        <Link to={"/"}>Логотип</Link>
      </div>
      <div className="nav_links">
        <a href="#">Пакеты</a>
        <a href="#">Контакты</a>
        <a href="#">Партнерство</a>
        <a href="#">Цены мира</a>
        <a href="#">Мои заказы</a>
      </div>
      {role === "unauth" ? (
        <div className="nav_auth">
          <Link to={"/authorization"}>Авторизация</Link>
          <Link to={"/registration"}>Регистрация</Link>
        </div>
      ) : (
        <div className="nav_auth">
          <Link to={"#"}>{name}</Link>
        </div>
      )}
      <div className="nav_lang">
        <a href="#">Язык</a>
      </div>
    </div>
  );
}
