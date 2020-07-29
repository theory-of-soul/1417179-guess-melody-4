import React from "react";
import PropTypes from 'prop-types';
import {AppUrls} from "../../index";
import {Link} from "react-router-dom";

const WinScreen = (props) => {
  const {
    onClickReplayHandler,
    questionAmount,
    errorAmount
  } = props;
  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {questionAmount} вопросов и совершили {errorAmount} ошибки</p>
      <Link to={AppUrls.BASE} className="replay" onClick={onClickReplayHandler}>Сыграть ещё раз</Link>
    </section>
  );
};

WinScreen.propTypes = {
  onClickReplayHandler: PropTypes.func.isRequired,
  questionAmount: PropTypes.number.isRequired,
  errorAmount: PropTypes.number.isRequired
};

export default WinScreen;
