import React from "react";
import PropTypes from "prop-types";

const AudioPlayer = (props) => {
  return (
    <>
      <button
        className={`track__button track__button--${props.isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={props.isLoading}
        onClick={props.handlePlay}
      />
      <div className="track__status">
        {props.children}
      </div>
    </>
  );
};

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handlePlay: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default AudioPlayer;
