import React from "react";
import renderer from 'react-test-renderer';
import WinScreen from "./WinScreen";
import {Router} from "react-router-dom";
import history from "../../history";

const questionAmount = 6;
const errorAmount = 2;

describe(`WinScreen snapshot tests`, () => {
  it(`WinScreen should render 6 questions ant 2 errors`, () => {
    const component = renderer
      .create(
          <Router history={history}>
            <WinScreen questionAmount={questionAmount} errorAmount={errorAmount} onClickReplayHandler={() => {}} />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
