import {createOperations, data as reducer} from "./data";
import MockAdapter from "axios-mock-adapter";
import api from "../../api";

const actions = {
  LOAD_QUESTIONS: `LOAD_QUESTIONS`
};

const questions = [{
  type: `artist`,
  rightAnswer: `Illenium`,
  audioSrc: `music/illenium_-_dont-give-up-on-me.mp3`,
  answers: [{
    pic: `http://placehold.it/134x134`,
    name: `Пелагея`
  }, {
    pic: `http://placehold.it/134x134`,
    name: `Краснознаменная дивизия имени моей бабушки`
  }, {
    pic: `http://placehold.it/134x134`,
    name: `Illenium`
  }]
}, {
  type: `genre`,
  genre: `рок`,
  answers: [{
    genre: `рок`,
    audioSrc: `music/gorillaz_-_feel-good-inc.mp3`,
  }, {
    genre: `транс`,
    audioSrc: `music/scooter_-_devil-s-symphony.mp3`,
  }, {
    genre: `рок`,
    audioSrc: `music/alyans_-_na-zare.mp3`
  }, {
    genre: `рок`,
    audioSrc: `music/bon-jovi_-_it-s-my-life.mp3`,
  }]
}, {
  type: `artist`,
  rightAnswer: `Illenium`,
  audioSrc: `music/illenium_-_dont-give-up-on-me.mp3`,
  answers: [{
    pic: `http://placehold.it/134x134`,
    name: `Пелагея`
  }, {
    pic: `http://placehold.it/134x134`,
    name: `Краснознаменная дивизия имени моей бабушки`
  }, {
    pic: `http://placehold.it/134x134`,
    name: `Illenium`
  }]
}, {
  type: `artist`,
  rightAnswer: `Illenium`,
  audioSrc: `music/illenium_-_dont-give-up-on-me.mp3`,
  answers: [{
    pic: `http://placehold.it/134x134`,
    name: `Пелагея`
  }, {
    pic: `http://placehold.it/134x134`,
    name: `Краснознаменная дивизия имени моей бабушки`
  }, {
    pic: `http://placehold.it/134x134`,
    name: `Illenium`
  }]
}];

const initialState = {
  questions: []
};


describe(`Game reducer tests`, () => {
  it(`reducer without parameters return initialState`, () => {
    expect(reducer(undefined, {})).toMatchObject(initialState);
  });

  it(`loaded questions added to store`, () => {
    expect(reducer(initialState, {
      type: actions.LOAD_QUESTIONS,
      payload: questions
    })).toMatchObject({
      questions
    });
  });

  it(`question loader works correct`, () => {
    const createdApi = api();
    const apiMock = new MockAdapter(createdApi);
    const dispatch = jest.fn();
    const questionLoader = createOperations.loadQuestions();

    apiMock
      .onGet(`/questions`)
      .reply(200, [{fake: true}]);

    questionLoader(dispatch, () => {}, createdApi)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: actions.LOAD_QUESTIONS,
          payload: [{fake: true}],
        });
      });
  });
});
