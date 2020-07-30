import React from "react";
import renderer from 'react-test-renderer';
import GameScreen from "./GameScreen";
import history from "../../history";
import {Router} from "react-router-dom";

const children = <div/>;

describe(`GameScreen snapshot tests`, () => {
  it(`GameScreen rendered template with children`, () => {
    const component = renderer
      .create(
          <Router history={history}>
            <GameScreen userErrors={3} onBackLinkClickHandler={() => {}}>{children}</GameScreen>
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
