import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthorizationScreen from "./AuthorizationScreen";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`AuthorizationScreen e2e`, () => {
  it(`AuthorizationScreen clickHandler should be call once`, () => {
    const mockCallback = jest.fn();
    const welcomeScreen = shallow(
        <AuthorizationScreen
          onSubmitHandler={() => {}}
          onClickReplayHandler={mockCallback}
        />
    );
    welcomeScreen.find(`.replay`).simulate(`click`, {
      preventDefault() {}
    });

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
