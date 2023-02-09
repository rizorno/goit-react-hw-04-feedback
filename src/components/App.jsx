import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    } else {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handlerFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Section>
    </>
  );
}
