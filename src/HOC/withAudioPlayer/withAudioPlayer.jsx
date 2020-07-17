import React from "react";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import withAudio from "../withAudio/withAudio";

const AudioPlayerWithAudio = withAudio(AudioPlayer);

const withAudioPlayer = (Component) => {
  return class WithAudioPlayer extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activePlayerId: 0
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          renderAudioPlayer={(src, id) => {
            return (
              <AudioPlayerWithAudio
                handlePlay={() => {
                  this.setState((prevProps) => ({
                    activePlayerId: prevProps.activePlayerId === id ? -1 : id
                  }));
                }}
                isPlaying={this.state.activePlayerId === id}
                src={src}
              />
            );
          }}
        />
      );
    }
  };
};

export default withAudioPlayer;
