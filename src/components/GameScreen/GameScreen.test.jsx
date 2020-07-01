import React from "react";
import renderer from 'react-test-renderer';
import GameScreen from "./GameScreen";

const children = <div/>;

describe(`GameScreen snapshot tests`, () => {
  it(`GameScreen rendered template with children`, () => {
    const component = renderer
      .create(<GameScreen userErrors={3}>{children}</GameScreen>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
