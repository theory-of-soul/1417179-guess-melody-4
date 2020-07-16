import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinScreen from "./WinScreen";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`WinScreen e2e`, () => {
  it(`WinScreen clickHandler should be call once`, () => {
    const mockCallback = jest.fn();
    const welcomeScreen = shallow(<WinScreen onClickReplayHandler={mockCallback} />);
    welcomeScreen.find(`.replay`).simulate(`click`);

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
