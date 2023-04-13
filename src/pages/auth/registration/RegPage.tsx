import React, { useEffect, useState } from "react";
import "./RegPage.css";
import Layout from "../../../components/layout/Layout";
import { useForm, SubmitHandler } from "react-hook-form";

type iInput = {
  email: string,
  login: string,
  password: string,
  confirmPassword: string,
}

const RegPage = () => {
  const [value, setValue] = useState('')
  const {register, handleSubmit, formState: { errors }, watch} = useForm<iInput>()
  const onSubmit: SubmitHandler<iInput> = data => {
    console.log(data)
  };
  useEffect(() => {
    setValue(watch('email'))
  }, [watch('email')])
  return (
    <Layout>
      <div className="reg_page">
        <form onSubmit={handleSubmit(onSubmit)}>
          {value}
        <p className="reg_email_p">Введите email:</p>
        <input type="email" {...register("email", {required: true, minLength: 10})} className={`input ${errors?.email?.type ? 'input_error' : ''}`}/>
        <p className="reg_login_p">Введите логин:</p>
        <input type="text" {...register("login", {required: true})}/>
        <p className="reg_password_p">Введите пароль:</p>
        <input type="text" {...register("password", {required: true})}/>
        <p className="reg_apassword_p">Подтвердите пароль:</p>
        <input type="text" {...register("confirmPassword", {required: true})}/>
        <br />
        <button className="auth_button" type="submit">Регистрация</button>
        </form>
      </div>
    </Layout>
  );
};

export default RegPage;
