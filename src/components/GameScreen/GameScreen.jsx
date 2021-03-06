import React from "react";
import PropTypes from "prop-types";
import GameMistakes from "../GameMistakes/GameMistakes";

const GameScreen = ({children, userErrors}) => {

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        {/*  <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">*/}
        {/*    <circle className="timer__line" cx="390" cy="390" r="370"*/}
        {/*    style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>*/}
        {/*  </svg>*/}

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
  userErrors: PropTypes.number.isRequired
};

export default GameScreen;
