const artistQuestionAdapter = (responseQuestion) => {
  const {
    type,
    song,
    answers
  } = responseQuestion;

  return {
    type,
    rightAnswer: song.artist,
    audioSrc: song.src,
    answers: answers.map((answer) => ({
      pic: answer.picture,
      name: answer.artist
    }))
  };
};

const genreQuestionAdapter = (responseQuestion) => {
  const {
    type,
    genre,
    src,
    answers
  } = responseQuestion;

  return {
    type,
    genre,
    audioSrc: src,
    answers: answers.map((answer) => ({
      audioSrc: answer.src,
      genre: answer.genre
    }))
  };
};

const questionResponseAdapter = (questionResponse) => {
  return questionResponse.map((question) => {
    return question.type === `artist` ? artistQuestionAdapter(question) : genreQuestionAdapter(question);
  });
};

export default questionResponseAdapter;
