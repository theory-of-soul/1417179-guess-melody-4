import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinScreen from "./WinScreen";

Enzyme.configure({
  adapter: new Adapter()
});

const questionAmount = 6;
const errorAmount = 2;

describe(`WinScreen e2e`, () => {
  it(`WinScreen clickHandler should be call once`, () => {
    const mockCallback = jest.fn();
    const welcomeScreen = shallow(
        <WinScreen
          questionAmount={questionAmount}
          errorAmount={errorAmount}
          onClickReplayHandler={mockCallback}
        />
    );
    welcomeScreen.find(`.replay`).simulate(`click`);

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
