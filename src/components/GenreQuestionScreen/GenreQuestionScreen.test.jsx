import React from "react";
import renderer from 'react-test-renderer';
import GenreQuestionScreen from "./GenreQuestionScreen";

const question = {
  type: `genre`,
  genre: `инди-рок`,
  answers: [{
    genre: `инди-рок`,
    audioSrc: ``
  }, {
    genre: `рок`,
    audioSrc: ``
  }, {
    genre: `поп`,
    audioSrc: ``
  }, {
    genre: `рок`,
    audioSrc: ``
  }]
};

const answers = {
  0: false,
  1: false,
  2: false,
  3: false
};

describe(`GenreQuestionScreen snapshot tests`, () => {
  it(`GenreQuestionScreen should render 4 melody`, () => {
    const component = renderer
      .create(
          <GenreQuestionScreen
            question={question}
            handleAnswer={() => {}}
            renderAudioPlayer={() => null}
            answers={answers}
            onChooseAnswer={() => null}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
