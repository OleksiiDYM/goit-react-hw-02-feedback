import sass from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ state, onLeaveFeedback }) => (
  <div className={sass.buttonWrapper}>
    {Object.keys(state).map(el => (
      <button key={el} onClick={onLeaveFeedback} name={el} className={sass.btn}>
        {el}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
