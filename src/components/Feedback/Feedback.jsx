import { Notification } from '../Notification/Notification';
import css from './Feedback.module.css';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { BsEmojiNeutralFill } from 'react-icons/bs';
import { MdDoNotDisturbOnTotalSilence } from 'react-icons/md';
import { FcPositiveDynamic } from 'react-icons/fc';

export const Feedback = ({ number: { good, neutral, bad } }) => {
   const totalFeedback = good + neutral + bad;
   const totalFeedbackProcent = Math.round(((good + neutral) / totalFeedback) * 100);
   return (
      <div className={css.content}>
         {totalFeedback > 0 ? (
            <ul>
               <li className={css.item}>
                  <AiFillLike />
                  Good: {good}
               </li>
               <li className={css.item}>
                  <BsEmojiNeutralFill />
                  Neutral: {neutral}
               </li>
               <li className={css.item}>
                  <AiFillDislike />
                  Bad: {bad}
               </li>
               <li className={css.item}>
                  <MdDoNotDisturbOnTotalSilence />
                  Total: {totalFeedback}
               </li>
               <li className={css.item}>
                  <FcPositiveDynamic />
                  Positive: {totalFeedbackProcent}%
               </li>
            </ul>
         ) : (
            <Notification />
         )}
      </div>
   );
};
