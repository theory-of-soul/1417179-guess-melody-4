import React from "react";
import PropTypes from "prop-types";

class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.audioPlayerRef = React.createRef();
    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const audioPlayer = this.audioPlayerRef.current;

    audioPlayer.oncanplaythrough = () => {
      this.setState({
        isLoading: false
      });
    };

    audioPlayer.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    audioPlayer.onpause = () => {
      this.setState({
        isPlaying: false
      });
    };
  }

  componentDidUpdate() {
    const audioPlayer = this.audioPlayerRef.current;

    if (this.props.isPlaying) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }

  componentWillUnmount() {
    const audioPlayer = this.audioPlayerRef.current;
    audioPlayer.oncanplaythrough = null;
    audioPlayer.onplay = null;
    audioPlayer.onpause = null;
    audioPlayer.src = ``;
  }

  render() {
    const {src} = this.props;

    return (
      <>
        <button
          className={`track__button track__button--${this.state.isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={this.state.isLoading}
          onClick={() => {
            this.setState((prevState) => ({
              isPlaying: !prevState.isPlaying
            }));
            this.props.handlePlay();
          }}
        />
        <div className="track__status">
          <audio
            ref={this.audioPlayerRef}
            src={src}
          />
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handlePlay: PropTypes.func.isRequired,
};

export default AudioPlayer;
