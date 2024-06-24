import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import styles from './styles.module.scss';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((feedback.good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
};

export default App;
