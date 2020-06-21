import React from "react";
import renderer from 'react-test-renderer';
import GenreQuestionScreen from "./GenreQuestionScreen";

const question = {
  type: `genre`,
  genre: `инди-рок`,
  answers: [{
    genre: `инди-рок`,
  }, {
    genre: `рок`,
  }, {
    genre: `поп`,
  }, {
    genre: `рок`,
  }]
};

describe(`GenreQuestionScreen snapshot tests`, () => {
  it(`GenreQuestionScreen should render 4 melody`, () => {
    const component = renderer
      .create(<GenreQuestionScreen question={question} handleAnswer={() => {}} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
