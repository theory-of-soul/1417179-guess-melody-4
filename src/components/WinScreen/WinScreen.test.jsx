import React from "react";
import renderer from 'react-test-renderer';
import WinScreen from "./WinScreen";

describe(`WinScreen snapshot tests`, () => {
  it(`WinScreen should render 6 questions ant 2 errors`, () => {
    const component = renderer
      .create(<WinScreen onClickReplayHandler={() => {}} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
