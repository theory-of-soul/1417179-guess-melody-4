import React from "react";
import PropTypes from 'prop-types';
import {AppUrls} from "../../AppUrls";
import history from "../../history";

class AuthorizationScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.loginFormRef = React.createRef();
    this._onSubmit = this._onSubmit.bind(this);
    this._onClickReplay = this._onClickReplay.bind(this);
  }

  _onSubmit(e) {
    e.preventDefault();
    const form = this.loginFormRef.current;
    const formData = new FormData(form);
    const login = formData.get(`name`);
    const password = formData.get(`password`);
    this.props.onSubmitHandler(login, password);
  }

  _onClickReplay(e) {
    e.preventDefault();
    this.props.onClickReplayHandler();
    history.push(AppUrls.BASE);
  }

  render() {
    return (
      <section className="login">
        <div className="login__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
        <h2 className="login__title">Вы настоящий меломан!</h2>
        <p className="login__text">Хотите узнать свой результат? Представьтесь!</p>
        <form className="login__form" action="" onSubmit={this._onSubmit} ref={this.loginFormRef}>
          <p className="login__field">
            <label className="login__label" htmlFor="name">Логин</label>
            <input className="login__input" type="text" name="name" id="name"/>
          </p>
          <p className="login__field">
            <label className="login__label" htmlFor="password">Пароль</label>
            <input className="login__input" type="password" name="password" id="password"/>
            <span className="login__error">Неверный пароль</span>
          </p>
          <button className="login__button button" type="submit">Войти</button>
        </form>
        <button className="replay" type="button" onClick={this._onClickReplay}>Сыграть ещё раз</button>
      </section>
    );
  }
}

AuthorizationScreen.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
  onClickReplayHandler: PropTypes.func.isRequired
};

export default AuthorizationScreen;
