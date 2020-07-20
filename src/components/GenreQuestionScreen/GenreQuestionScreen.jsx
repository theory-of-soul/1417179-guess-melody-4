import React from "react";
import PropTypes from "prop-types";

const GenreQuestionScreen = (props) => {
  const {
    question,
    handleAnswer,
    renderAudioPlayer,
    answers: userAnswers,
    onChooseAnswer
  } = props;

  return (
    <React.Fragment>
      <h2 className="game__title">Выберите {question.genre} треки</h2>
      <form
        className="game__tracks"
        onSubmit={(event) => {
          event.preventDefault();
          handleAnswer(question, userAnswers);
        }}
      >
        {
          question.answers.map((answer, index) => {
            return (
              <div className="track" key={`${answer.genre}-${index}`}>
                {
                  renderAudioPlayer(answer.audioSrc, index)
                }
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${index}`}
                    id={`answer-${index}`}
                    checked={userAnswers[index]}
                    onChange={() => onChooseAnswer(index)}
                  />
                  <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
                </div>
              </div>
            );
          })
        }

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </React.Fragment>
  );
};

GenreQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          genre: PropTypes.string.isRequired,
          audioSrc: PropTypes.string.isRequired,
        })
    ).isRequired
  }),
  handleAnswer: PropTypes.func.isRequired,
  renderAudioPlayer: PropTypes.func.isRequired,
  answers: PropTypes.shape({
    0: PropTypes.bool,
    1: PropTypes.bool,
    2: PropTypes.bool,
    3: PropTypes.bool
  }).isRequired,
  onChooseAnswer: PropTypes.func.isRequired
};

export default React.memo(GenreQuestionScreen);
