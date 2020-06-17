import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

const errorAmounts = 3;

describe(`WelcomeScreen e2e`, () => {
  it(`WelcomeScreen clickHandler should be call once`, () => {
    const mockCallback = jest.fn();
    const welcomeScreen = shallow(<WelcomeScreen errorAmount={errorAmounts} onClickHandler={mockCallback} />);
    welcomeScreen.find(`.welcome__button`).simulate(`click`);

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
