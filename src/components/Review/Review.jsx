import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Review.module.css';

export class Review extends Component {
  state = {
    counterGood: this.props.defaultValue ?? 0,
    counterNeutral: this.props.defaultValue ?? 0,
    counterBad: this.props.defaultValue ?? 0,
  };

  handleGood = () => {
    this.setState(prevState => ({ counterGood: prevState.counterGood + 1 }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      counterNeutral: prevState.counterNeutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({ counterBad: prevState.counterBad + 1 }));
  };
  handleUpdate = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        this.setState(prevState => ({
          counterGood: prevState.counterGood + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          counterNeutral: prevState.counterNeutral + 1,
        }));
        break;
      case 'bad':
        this.setState(prevState => ({ counterBad: prevState.counterBad + 1 }));
        break;
      default:
        throw new Error('There is no feedback');
    }
  };

  render() {
    const { counterGood, counterNeutral, counterBad } = this.state;
    return (
      <div>
        <h2>Pleace leave feedback</h2>
        <button name="good" onClick={this.handleGood} className={css.btn}>
          Good
        </button>
        <button name="neutral" onClick={this.handleNeutral} className={css.btn}>
          Neutral
        </button>
        <button name="bad" onClick={this.handleBad} className={css.btn}>
          Bad
        </button>
      </div>
    );
  }
}
// Review.PropTypes
