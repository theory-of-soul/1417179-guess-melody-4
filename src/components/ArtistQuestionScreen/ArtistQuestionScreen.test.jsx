import React from "react";
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from "./ArtistQuestionScreen";

describe(`ArtistQuestionScreen snapshot tests`, () => {
  it(`ArtistQuestionScreen should render 3 singers`, () => {
    const component = renderer
      .create(<ArtistQuestionScreen />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
