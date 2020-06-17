import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

const errorAmounts = 3;

describe(`App snapshot tests`, () => {
  it(`App should show WelcomeScreen`, () => {
    const component = renderer
      .create(<App errorAmount={errorAmounts} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
