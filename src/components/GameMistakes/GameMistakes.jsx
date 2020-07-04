import React from "react";
import PropTypes from "prop-types";

const GameMistakes = ({amountMistakes}) => {
  const mistakes = new Array(amountMistakes).fill(null);

  return (
    <div className="game__mistakes">
      {mistakes.map((empty, i) => <div className="wrong" key={i}/>)}
    </div>
  );
};

GameMistakes.propTypes = {
  amountMistakes: PropTypes.number.isRequired
};

export default GameMistakes;
