import PropTypes from "prop-types";
export const Statistic = ({ good, neutral, bad, total, persentage }) => {
  return (
    <div>
      <h2>Pleacse leave feedback</h2>
      <ul >
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positiv feedback: {persentage} %</li>
      </ul>
    </div>
  );
};
Statistic.propTypes={
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  persentage: PropTypes.number
}
