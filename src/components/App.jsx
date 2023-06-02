import { Component } from 'react';
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

  onCount = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };
  positivFeedback = () => {
   
    if (this.countTotalFeedback() > 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const persentage = this.positivFeedback();


    return (
      <div>
        <Section title="Pleace leave feedback">
          <FeeedbackOption options={options} onLeaveFeedback={this.onCount} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistic {...this.state} total={total} persentage={persentage} />
          ) : (
            <Notification messege="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
