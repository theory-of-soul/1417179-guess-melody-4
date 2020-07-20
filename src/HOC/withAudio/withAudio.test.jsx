import React from "react";
import renderer from 'react-test-renderer';
import withAudio from "./withAudio";
import PropTypes from "prop-types";

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

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withAudio(MockComponent);

describe(` Hoc withAudio snapshot tests`, () => {
  it(`MockComponent with HOC`, () => {
    const component = renderer
      .create(
          <MockComponentWrapped
            src={src}
            isPlaying={false}
            handlePlay={() => {}}
          />,
          options
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
