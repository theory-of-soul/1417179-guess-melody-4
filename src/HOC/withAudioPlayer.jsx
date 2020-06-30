import React from "react";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

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
              <AudioPlayer
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
