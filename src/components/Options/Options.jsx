import { Buttons } from '../../assets/Buttons/Buttons';
import css from './Options.module.css';
export const Options = ({ update, reset, hasFeedback }) => {
   return (
      <ul className={css.list}>
         <li>
            <Buttons count={() => update('good')}>Good</Buttons>
         </li>
         <li>
            <Buttons count={() => update('neutral')}>Neutral</Buttons>
         </li>
         <li>
            <Buttons count={() => update('bad')}>Bad</Buttons>
         </li>
         {hasFeedback ? (
            <li>
               <Buttons count={reset}>Reset</Buttons>
            </li>
         ) : null}
      </ul>
   );
};
