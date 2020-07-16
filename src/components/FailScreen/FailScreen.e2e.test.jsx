import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FailScreen from "./FailScreen";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`FailScreen e2e`, () => {
  it(`FailScreen clickHandler should be call once`, () => {
    const mockCallback = jest.fn();
    const welcomeScreen = shallow(<FailScreen onClickReplayHandler={mockCallback} />);
    welcomeScreen.find(`.replay`).simulate(`click`);

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
