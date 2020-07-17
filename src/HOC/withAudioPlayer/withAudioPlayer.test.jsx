import React from "react";
import renderer from 'react-test-renderer';
import withAudioPlayer from "./withAudioPlayer";
import PropTypes from "prop-types";

const src = ``;
const id = 0;
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

const MockComponent = (props) => {
  const {renderAudioPlayer} = props;

  return (
    <div>
      {renderAudioPlayer(src, id)}
    </div>
  );
};

MockComponent.propTypes = {
  renderAudioPlayer: PropTypes.func.isRequired,
};

const MockComponentWrapped = withAudioPlayer(MockComponent);

describe(`Hoc withAudioPlayer snapshot tests`, () => {
  it(`MockComponent with HOC`, () => {
    const component = renderer
      .create(<MockComponentWrapped/>, options)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
