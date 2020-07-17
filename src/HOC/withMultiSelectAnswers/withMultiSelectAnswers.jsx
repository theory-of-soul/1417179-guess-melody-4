import React from "react";

const withMultiSelectAnswers = (WrappedComponent) => {
  return class WithMultiSelectAnswers extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        answers: {
          0: false,
          1: false,
          2: false,
          3: false
        }
      };

      this._onUserClickHandler = this._onUserClickHandler.bind(this);
    }

    _onUserClickHandler(answerIndex) {
      this.setState(({answers}) => ({
        answers: Object.assign({}, answers, {
          [answerIndex]: !answers[answerIndex]
        })
      }));
    }

    render() {
      return (
        <WrappedComponent
          answers={this.state.answers}
          onChooseAnswer={this._onUserClickHandler}
          {...this.props}
        />
      );
    }
  };
};

export default withMultiSelectAnswers;
