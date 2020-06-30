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

describe(`GenreQuestionScreen snapshot tests`, () => {
  it(`GenreQuestionScreen should render 4 melody`, () => {
    const component = renderer
      .create(
          <GenreQuestionScreen
            question={question}
            handleAnswer={() => {}}
            renderAudioPlayer={() => null}
          />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
