import React from "react";
import renderer from 'react-test-renderer';
import AuthorizationScreen from "./AuthorizationScreen";

describe(`AuthorizationScreen snapshot tests`, () => {
  it(`AuthorizationScreen template`, () => {
    const component = renderer
      .create(<AuthorizationScreen onSubmitHandler={() => {}} onClickReplayHandler={() => {}}/>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
