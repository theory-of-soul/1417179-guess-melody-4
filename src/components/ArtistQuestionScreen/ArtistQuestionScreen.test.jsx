import React from "react";
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from "./ArtistQuestionScreen";

const question = {
  type: `artist`,
  rightAnswer: `Пелагея`,
  answers: [{
    pic: `http://placehold.it/134x134`,
    name: `Пелагея`
  }, {
    pic: `http://placehold.it/134x134`,
    name: `Краснознаменная дивизия имени моей бабушки`
  }, {
    pic: `http://placehold.it/134x134`,
    name: `Lorde`
  }]
};

describe(`ArtistQuestionScreen snapshot tests`, () => {
  it(`ArtistQuestionScreen should render 3 singers`, () => {
    const component = renderer
      .create(<ArtistQuestionScreen question={question} handleAnswer={() => {}} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
