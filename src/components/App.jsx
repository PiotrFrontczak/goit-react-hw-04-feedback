import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

const countTotalFeedback = (state) => {
  return state.good + state.neutral + state.bad;
};

const countPositiveFeedbackPercentage = (state) => {
  const total = countTotalFeedback(state);
  return total ? Math.round((state.good / total) * 100) : 0;
};

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const total = countTotalFeedback(state);
  const positivePercentage = countPositiveFeedbackPercentage(state);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </Section>
    </div>
  );
};

export default App;
