import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {AppUrls} from "../../index";

const FailScreen = (props) => {
  const {onClickReplayHandler} = props;
  return (
    <section className="result">
      <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий
        раз!</p>
      <Link to={AppUrls.BASE} className="replay" onClick={onClickReplayHandler}>Попробовать ещё раз</Link>
    </section>
  );
};

FailScreen.propTypes = {
  onClickReplayHandler: PropTypes.func.isRequired
};

export default FailScreen;
