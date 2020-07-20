import React from "react";
import renderer from 'react-test-renderer';
import FailScreen from "./FailScreen";

describe(`FailScreen snapshot tests`, () => {
  it(`FailScreen template`, () => {
    const component = renderer
      .create(<FailScreen onClickReplayHandler={() => {}} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
