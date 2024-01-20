import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import css from './App.module.css';

const getFeedback = () => {
   const savedFeedback = window.localStorage.getItem('number-of-feedback');
   if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
   }
   return {
      good: 0,
      neutral: 0,
      bad: 0,
   };
};

export const App = () => {
   const [count, setCount] = useState(getFeedback);

   const update = type => {
      setCount(prevCount => ({
         ...prevCount,
         [type]: prevCount[type] + 1,
      }));
   };

   const reset = () => {
      setCount({
         good: 0,
         neutral: 0,
         bad: 0,
      });
   };

   const hasFeedback = count.good + count.neutral + count.bad;

   useEffect(() => {
      window.localStorage.setItem('number-of-feedback', JSON.stringify(count));
   }, [count]);

   return (
      <div className={css.body}>
         <Description />
         <Options update={update} reset={reset} hasFeedback={hasFeedback} />
         <Feedback number={count} />
      </div>
   );
};
