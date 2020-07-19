import React from "react";
import PropTypes from "prop-types";

const withAudio = (Component) => {
  class WithAudio extends React.PureComponent {
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
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          isLoading={this.state.isLoading}
          handlePlay={() => {
            this.setState((prevState) => ({
              isPlaying: !prevState.isPlaying
            }));
            this.props.handlePlay();
          }}
        >
          <audio
            ref={this.audioPlayerRef}
            src={this.props.src}
          />
        </Component>
      );
    }
  }

  WithAudio.propTypes = {
    src: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    handlePlay: PropTypes.func.isRequired,
  };

  return WithAudio;
};


export default withAudio;
