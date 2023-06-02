import PropTypes from "prop-types";
export const FeeedbackOption=({options, onLeaveFeedback})=> {
    return (
      <div>
        {options.map(option => (
          <button key={option} onClick={()=>onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );

}
FeeedbackOption.propTypes={
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,

}
