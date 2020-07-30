import React from "react";
import renderer from 'react-test-renderer';
import FailScreen from "./FailScreen";
import {Router} from "react-router-dom";
import history from "../../history";

describe(`FailScreen snapshot tests`, () => {
  it(`FailScreen template`, () => {

    const component = renderer
      .create(
          <Router history={history}>
            <FailScreen onClickReplayHandler={() => {}} />
          </Router>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
