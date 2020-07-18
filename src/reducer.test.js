import {createOperations, reducer} from "./reducer";
import MockAdapter from "axios-mock-adapter";
import api from "./api";

const actions = {
  INCREASE_ERRORS: `INCREASE_ERRORS`,
  NEXT_STEP: `NEXT_STEP`,
  RESET_GAME: `RESET_GAME`,
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
  errors: 0,
  step: -1,
  questions: [],
  maxErrors: 3
};


describe(`Game reducer tests`, () => {
  it(`reducer without parameters return initialState`, () => {
    expect(reducer(undefined, {})).toMatchObject(initialState);
  });

  it(`reducer add next step if game has questions and user can make mistakes`, () => {
    expect(reducer({
      step: -1,
      questions,
      errors: 0,
      maxErrors: 3
    }, {
      type: actions.NEXT_STEP,
      payload: 1
    })).toMatchObject({
      step: 0,
      questions,
      errors: 0,
      maxErrors: 3
    });
  });

  it(`after reset state reducer return initialState with questions`, () => {
    expect(reducer({
      step: 0,
      questions,
      errors: 3,
      maxErrors: 3
    }, {
      type: actions.RESET_GAME
    })).toMatchObject({
      step: -1,
      errors: 0,
      maxErrors: 3,
      questions
    });
  });

  it(`reducer increase errors`, () => {
    expect(reducer({
      step: 0,
      questions,
      errors: 0,
      maxErrors: 3
    }, {
      type: actions.INCREASE_ERRORS,
      payload: 1
    })).toMatchObject({
      step: 0,
      questions,
      errors: 1,
      maxErrors: 3
    });
  });

  it(`loaded questions added to store`, () => {
    expect(reducer(initialState, {
      type: actions.LOAD_QUESTIONS,
      payload: questions
    })).toMatchObject({
      step: -1,
      errors: 0,
      maxErrors: 3,
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
