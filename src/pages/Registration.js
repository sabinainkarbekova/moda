import React, { useState } from "react";
import Header from "../home-components/Header";
import Footer from "../home-components/Footer";
import './design/Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    accepted: false,
  });

  function handleChange(event) {
    const { name, type, checked, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Пользователь:", formData);

    if (!formData.login || !formData.password) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    if (!formData.accepted) {
      alert("Вы должны принять условия.");
      return;
    }

    alert("Данные успешно отправлены!");

    setFormData({
      login: "",
      password: "",
      accepted: false,
    });
  }

  return (
    <div>
        <Header />
    <div className="form-container">
      <h2>Регистрация</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          placeholder="Логин"
          value={formData.login}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
          />
          Я принимаю все условия
        </label>
        <button type="submit" className="submit-button">Отправить</button>
        <div className="reg-container">
        <img src="https://i.pinimg.com/originals/8d/d1/76/8dd176c04a07c37b80a640dbc73382ff.gif" alt="registration" className="reg-img" />
        </div>
      </form>
    </div>
    <Footer />
    </div>
  );
}

export default Registration;