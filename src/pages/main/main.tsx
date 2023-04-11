import React, { Component } from "react";
import postAuth from "../../api/authorization/postAuth";
import "./main.css";

export default function Main() {
  const [auth, setAuth] = React.useState({ email: "", password: "" });

  const [emailFocused, setEmailFocused] = React.useState(false);

  const onEmailFocus = () => {
    setEmailFocused(true);
  };

  const onEmailBlur = () => {
    setEmailFocused(false);
  };

  const handleChangeEmail = (e) => {
    setAuth({ ...auth, email: e.target.value });
  };

  const handleChangePassword = (e) => {
    setAuth({ ...auth, password: e.target.value });
  };

  const onSumbit = () => {
    async function authStatus() {
      const res = await postAuth(auth);
      console.log(res);
    }
    if (auth.email.length > 5 || auth.password.length > 5) {
      authStatus();
    }
  };

  // React.useEffect(() => {
  //   console.log("Changed")
  // }, [auth]);

  const inputEl = React.useRef(null);
  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputEl.current.focus();
  };

  return (
    <div>
      <input
        // className={`input ${emailFocused ? "focused" : ""}`}
        // onFocus={onEmailFocus}
        // onBlur={onEmailBlur}
        // ref={inputEl}
        onChange={handleChangeEmail}
        value={auth.email}
        type="text"
      />
      <input
        onChange={handleChangePassword}
        value={auth.password}
        type="text"
      />
      <button onClick={onSumbit}>Registration</button>
      <button onClick={onButtonClick}>ADD EMAIL</button>
    </div>
  );
}
