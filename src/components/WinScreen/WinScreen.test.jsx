import React from "react";
import renderer from 'react-test-renderer';
import WinScreen from "./WinScreen";

const questionAmount = 6;
const errorAmount = 2;

describe(`WinScreen snapshot tests`, () => {
  it(`WinScreen should render 6 questions ant 2 errors`, () => {
    const component = renderer
      .create(<WinScreen questionAmount={questionAmount} errorAmount={errorAmount} onClickReplayHandler={() => {}} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
