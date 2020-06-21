import React from "react";
import renderer from 'react-test-renderer';
import WelcomeScreen from "./WelcomeScreen";

const errorAmounts = 3;

describe(`WelcomeScreen snapshot tests`, () => {
  it(`WelcomeScreen should render errors amount === 3`, () => {
    const component = renderer
      .create(<WelcomeScreen errorAmount={errorAmounts} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
