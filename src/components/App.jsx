import { Component } from 'react';
import { Review } from './Review/Review';
import { Section } from './Section/Section';
import { FeeedbackOption } from './FeeedbackOption/FeeedbackOption';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onCount = e => {
    this.setState(prevState => {
      return { [e.target.textContent]: prevState[e.target.textContent] + 1 };
    });
  };
  positivFeedback = () => {
    console.log('good', this.state.good);
    console.log('total', this.countTotalFeedback());
    if (this.countTotalFeedback() > 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback(this.state);
    const persentage = this.positivFeedback();

    return (
      <div>
        <Section title="Pleace leave feedback">
          <FeeedbackOption options={options} onLeaveFeedback={this.onCount} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistic {...this.state} total={total} persentage={persentage} />
          ) : (
            <Notification messege="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
