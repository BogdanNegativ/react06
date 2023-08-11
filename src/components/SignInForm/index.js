import React, { Component } from "react";
import styles from "./SignInForm.module.css";
import classNames from "classnames";

const regions = [
  "АР Крим",
  "Вінницька область",
  "Волинська область",
  "Дніпропетровська область",
  "Донецька область",
  "Житомирська область",
  "Закарпатська область",
  "Запорізька область",
  "Івано-Франківська область",
  "Київська область",
  "Кіровоградська область",
  "Луганська область",
  "Львівська область",
  "Миколаївська область",
  "Одеська область",
  "Полтавська область",
  "Рівненська область",
  "Сумська область",
  "Тернопільська область",
  "Харківська область",
  "Херсонська область",
  "Хмельницька область",
  "Черкаська область",
  "Чернівецька область",
  "Чернігівська область"
];

const initialState = {
  email: '',
  password: '',
  emailIsValid: true,
  passwordIsValid: true
}

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState, selectedRegion: '' }
  }

  createInputClass = (name) => {
    return classNames(
      styles.input,
      { [styles.invalid]: !this.state[`${name}IsValid`] }
    )
  }

  lowerCase = () => {
    this.setState(
      {
        email: this.state.email.toLowerCase(),
        password: this.state.password.toLowerCase()
      }
    )
  }

  handlerInput = ({ target: { name, value } }) => {
    const isValid = !value.includes(' ')
    this.setState(
      {
        [name]: value,
        [`${name}IsValid`]: isValid
      }
    );
  }

  handleRegionChange = (event) => {
    this.setState({ selectedRegion: event.target.value });
  };

  handlerForm = (event) => {
    event.preventDefault();
    // event.target.reset();
    this.setState({ ...initialState })
  }
  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handlerForm}>
          <input
            className={this.createInputClass('email')}
            name="email"
            type="text"
            onChange={this.handlerInput}
            value={this.state.email}
          />
          <input
            className={this.createInputClass('password')}
            name="password"
            type="password"
            onChange={this.handlerInput}
            value={this.state.password}
          />
          <input
            className={styles.input}
            type="submit"
            value="send"
          />
          <select
            className={styles.input}
            value={this.state.selectedRegion}
            onChange={this.handleRegionChange}
          >
            <option value="">Оберіть область</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          <p>Обрана область: {this.state.selectedRegion}</p>
        </form>
        <button onClick={this.lowerCase}>lower</button>
      </>
    );
  }
}

export default SignInForm;
