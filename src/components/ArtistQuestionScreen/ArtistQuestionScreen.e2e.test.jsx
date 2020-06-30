import React from "react";
import ArtistQuestionScreen from "./ArtistQuestionScreen";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

const question = {
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
};

const userAnswers = {
  pic: `http://placehold.it/134x134`,
  name: `Краснознаменная дивизия имени моей бабушки`
};

describe(`ArtistQuestionScreen e2e`, () => {
  it(`ArtistQuestionScreen handleAnswer has parameters question and userAnswer`, () => {
    const mockCallback = jest.fn();
    const artistQuestionScreen = shallow(
        <ArtistQuestionScreen
          question={question}
          handleAnswer={mockCallback}
          renderAudioPlayer={() => null}
        />
    );
    artistQuestionScreen.find(`.artist__name`).at(1).simulate(`click`);

    expect(mockCallback.mock.calls[0][0]).toMatchObject(question);
    expect(mockCallback.mock.calls[0][1]).toMatchObject(userAnswers);
  });
});
