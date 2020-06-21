import React from "react";
import renderer from 'react-test-renderer';
import GenreQuestionScreen from "./GenreQuestionScreen";

describe(`GenreQuestionScreen snapshot tests`, () => {
  it(`GenreQuestionScreen should render 4 melody`, () => {
    const component = renderer
      .create(<GenreQuestionScreen />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
