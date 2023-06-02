import { Component } from 'react';

export class FeeedbackOption extends Component {
  render() {
    return (
      <div>
        {this.props.options.map(option => (
          <button key={option} onClick={this.props.onLeaveFeedback}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}
