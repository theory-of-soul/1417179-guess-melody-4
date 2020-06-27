import React from "react";
import PropTypes from "prop-types";

const ArtistQuestionScreen = (props) => {
  const {
    question,
    handleAnswer,
    renderAudioPlayer
  } = props;

  return (
    <React.Fragment>
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      {renderAudioPlayer(question.audioSrc, 0)}

      <form className="game__artist">
        {
          question.answers.map((answer, index) => {
            return (
              <div className="artist" key={`${answer.name}`}>
                <input
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={`artist-${index}`}
                  id={`answer-${index}`}
                />
                <label
                  className="artist__name"
                  htmlFor={`answer-${index}`}
                  onClick={() => {
                    handleAnswer(question, answer);
                  }}
                >
                  <img className="artist__picture" src={answer.pic} alt={answer.name} />
                  {answer.name}
                </label>
              </div>
            );
          })
        }
      </form>
    </React.Fragment>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    rightAnswer: PropTypes.string.isRequired,
    audioSrc: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          pic: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
    ).isRequired
  }),
  handleAnswer: PropTypes.func.isRequired,
  renderAudioPlayer: PropTypes.func.isRequired
};

export default ArtistQuestionScreen;
