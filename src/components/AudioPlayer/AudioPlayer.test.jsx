import React from "react";
import renderer from 'react-test-renderer';
import AudioPlayer from "./AudioPlayer";

const src = ``;
const options = {
  createNodeMock: (element) => {
    if (element.type === `audio`) {
      return {
        oncanplaythrough() {},
      };
    }
    return null;
  }
};

describe(`AudioPlayer snapshot tests`, () => {
  it(`AudioPlayer turn off state`, () => {
    const component = renderer
      .create(
          <AudioPlayer
            src={src}
            isPlaying={false}
            handlePlay={() => {}}
          />,
          options
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it(`AudioPlayer turn on state`, () => {
    const component = renderer
      .create(
          <AudioPlayer
            src={src}
            isPlaying={true}
            handlePlay={() => {}}
          />,
          options
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
