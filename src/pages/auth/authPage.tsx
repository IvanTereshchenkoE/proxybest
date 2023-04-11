import React from 'react';

const AuthPage = () => {
    return (
        <div className='auth_page'>
            <p className='login_p'>Введите логин:</p>
            <input type="text"/>
            <p className='password_p'>Введите пароль:</p>
            <input type="password"/>
            <br />
            <button className='auth_button'>Авторизация</button>
        </div>
    );
};

export default AuthPage;