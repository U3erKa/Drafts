import { FC } from 'react';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { LANGUAGES, THEMES } from 'app/constants';
import { RootState } from 'app/store';
import { setLang, languages } from 'app/slices/lang';
import * as counterActionCreators from 'app/slices/counter';
import styles from './Counter.module.scss';

const translations = new Map([
  [LANGUAGES.EN_US, { count: 'Count', step: 'Step', increment: 'Increment', decrement: 'Decrement' }],
  [LANGUAGES.UA, { count: 'Рахунок', step: 'Крок', increment: 'Збільшити', decrement: 'Зменшити' }],
  [LANGUAGES.PL, { count: 'PL_Count', step: 'PL_Step', increment: 'PL_Increment', decrement: 'PL_Decrement' }],
]);

// interface CounterProps {
//   count: number;
//   step: number;
//   lang: LANGUAGES;
//   increment: MouseEventHandler<HTMLButtonElement>;
//   decrement: MouseEventHandler<HTMLButtonElement>;
//   setStep: ChangeEventHandler<HTMLInputElement>;
//   setLang: ChangeEventHandler<HTMLSelectElement>;
// }

const Counter: FC = function () {
  const lang = useSelector<RootState, LANGUAGES>((state) => state.lang as LANGUAGES);
  const theme = useSelector<RootState, THEMES>((state) => state.theme);
  const { count, step } = useSelector<RootState, { count: number; step: number }>((state) => state.counter);
  const dispatch = useDispatch();

  const { decrement, increment, setStep } = bindActionCreators({ ...counterActionCreators }, dispatch);
  const langAct = bindActionCreators({ setLang }, dispatch);

  const tr = translations.get(lang);
  const selectLang = languages.map((language) => <option key={language} value={language}>{`${language}`}</option>);

  return (
    <div className={cx({ [styles.lightTheme]: theme === THEMES.LIGHT, [styles.darkTheme]: theme === THEMES.DARK })}>
      <p>
        {tr?.count}: {count}
      </p>
      <label>
        {tr?.step}:
        <input type="number" value={step} onChange={({ target: { value } }) => setStep(value)} />
      </label>
      <button onClick={() => increment()}>{tr?.increment}</button>
      <button onClick={() => decrement()}>{tr?.decrement}</button>
      <select value={lang} onChange={({ target: { value } }) => langAct.setLang(value as LANGUAGES)}>
        {selectLang}
      </select>
    </div>
  );
};

export default Counter;
