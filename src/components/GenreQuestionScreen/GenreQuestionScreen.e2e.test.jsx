import React from "react";
import GenreQuestionScreen from "./GenreQuestionScreen";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

const question = {
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
};

const userAnswers = {
  0: false,
  1: true,
  2: false,
  3: false
};

describe(`GenreQuestionScreen e2e`, () => {
  it(`GenreQuestionScreen handleAnswer has parameters question and userAnswers`, () => {
    const mockCallback = jest.fn();
    const genreQuestionScreen = shallow(
        <GenreQuestionScreen
          question={question}
          handleAnswer={mockCallback}
          renderAudioPlayer={() => null}
          answers={userAnswers}
          onChooseAnswer={() => null}
        />
    );

    genreQuestionScreen.find(`input`).at(1).simulate(`change`);
    genreQuestionScreen.find(`form`).simulate(`submit`, {
      preventDefault() {}
    });

    expect(mockCallback.mock.calls[0][0]).toMatchObject(question);
    expect(mockCallback.mock.calls[0][1]).toMatchObject(userAnswers);
  });
});
