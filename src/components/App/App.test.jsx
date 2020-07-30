import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './App';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {NameSpaces as NameSpace} from "../../reducers/nameSpaces";
import {authorizationStatus} from "../../reducers/user/user";

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

const mockStore = configureStore();

describe(`App snapshot tests`, () => {
  it(`App should show WelcomeScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 0
      },
      [NameSpace.USER]: {
        authorizationStatus: authorizationStatus.NO_AUTH,
      },
    });

    const component = renderer
      .create(
          <Provider store={store}>
            <App
              errorAmount={errorAmounts}
              questions={questions}
              step={-1}
              onNextStep={() => {}}
              onCheckAnswer={() => {}}
              userErrors={0}
              onResetGame={() => {}}
              hasError={false}
              loadQuestions={() => {}}
              userAlreadyAuth={false}
              loginUser={() => {}}
            />
          </Provider>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it(`App should show Auth screen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
      [NameSpace.USER]: {
        authorizationStatus: authorizationStatus.NO_AUTH,
      },
    });

    const component = renderer
      .create(
          <Provider store={store}>
            <App
              errorAmount={errorAmounts}
              questions={questions}
              step={questions.length}
              onNextStep={() => {}}
              onCheckAnswer={() => {}}
              userErrors={1}
              onResetGame={() => {}}
              loadQuestions={() => {}}
              hasError={false}
              userAlreadyAuth={false}
              loginUser={() => {}}
            />
          </Provider>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
