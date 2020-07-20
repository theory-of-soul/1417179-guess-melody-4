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

const player = <audio src={src}/>;

describe(`AudioPlayer snapshot tests`, () => {
  it(`AudioPlayer is silent and loading`, () => {
    const component = renderer
      .create(
          <AudioPlayer
            isPlaying={false}
            isLoading={true}
            handlePlay={() => {}}
          >
            {player}
          </AudioPlayer>,
          options
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it(`AudioPlayer is playing`, () => {
    const component = renderer
      .create(
          <AudioPlayer
            isPlaying={true}
            isLoading={false}
            handlePlay={() => {}}
          >
            {player}
          </AudioPlayer>,
          options
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
