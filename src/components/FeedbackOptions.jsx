import React from 'react';
import styles from './styles.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)} className={styles.button}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
