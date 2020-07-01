import React from "react";
import renderer from 'react-test-renderer';
import GameMistakes from "./GameMistakes";

describe(`GameMistakes snapshot tests`, () => {
  it(`GameMistakes render zero error`, () => {
    const component = renderer
      .create(<GameMistakes amountMistakes={0}/>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it(`GameMistakes render one error`, () => {
    const component = renderer
      .create(<GameMistakes amountMistakes={1}/>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it(`GameMistakes render two errors`, () => {
    const component = renderer
      .create(<GameMistakes amountMistakes={2}/>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it(`GameMistakes render three errors`, () => {
    const component = renderer
      .create(<GameMistakes amountMistakes={3}/>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
