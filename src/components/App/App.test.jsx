import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

const errorAmounts = 3;
const questions = [{
  type: `artist`,
  audioSrc: ``,
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
}, {
  type: `genre`,
  genre: `инди-рок`,
  answers: [{
    genre: `инди-рок`,
    audioSrc: ``,
  }, {
    genre: `рок`,
    audioSrc: ``,
  }, {
    genre: `поп`,
    audioSrc: ``,
  }, {
    genre: `рок`,
    audioSrc: ``,
  }]
}];

describe(`App snapshot tests`, () => {
  it(`App should show WelcomeScreen`, () => {
    const component = renderer
      .create(<App errorAmount={errorAmounts} questions={questions} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
