import React from "react";
import PropTypes from "prop-types";
import GameMistakes from "../GameMistakes/GameMistakes";
import {AppUrls} from "../../index";
import {Link} from "react-router-dom";

const GameScreen = ({children, userErrors, onBackLinkClickHandler}) => {

  return (
    <section className="game game--artist">
      <header className="game__header">
        <Link to={AppUrls.BASE} className="game__back" href="#" onClick={onBackLinkClickHandler}>
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </Link>

        <GameMistakes amountMistakes={userErrors}/>
      </header>

      <section className="game__screen">
        {children}
      </section>
    </section>
  );
};

GameScreen.propTypes = {
  children: PropTypes.element.isRequired,
  userErrors: PropTypes.number.isRequired,
  onBackLinkClickHandler: PropTypes.func.isRequired
};

export default GameScreen;
