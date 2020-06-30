import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from "./AudioPlayer";

Enzyme.configure({
  adapter: new Adapter()
});

const src = ``;
const options = {
  disableLifecycleMethods: true
};

describe(`AudioPlayer e2e`, () => {
  it(`AudioPlayer button play audio switch to pause`, () => {
    const audioPlayer = shallow(
        <AudioPlayer
          src={src}
          isPlaying={false}
          handlePlay={() => {}}
        />,
        options
    );

    expect(audioPlayer.find(`button`).hasClass(`track__button--play`)).toBeTruthy();

    audioPlayer.find(`button`).simulate(`click`);

    expect(audioPlayer.find(`button`).hasClass(`track__button--pause`)).toBeTruthy();

    audioPlayer.find(`button`).simulate(`click`);

    expect(audioPlayer.find(`button`).hasClass(`track__button--play`)).toBeTruthy();
  });
});
