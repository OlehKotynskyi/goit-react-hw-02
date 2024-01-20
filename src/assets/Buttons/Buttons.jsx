import css from './Buttons.module.css';
export const Buttons = ({ children, count }) => {
   return (
      <button className={css.button} type="button" onClick={count}>
         {children}
      </button>
   );
};
