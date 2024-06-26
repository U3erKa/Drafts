import { FC } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { LANGUAGES, THEMES } from 'const';
import { RootState } from 'store';
import { setLang, languages } from 'slices/lang';
import * as counterActionCreators from 'slices/counter';
import styles from './ReduxCounter.module.scss';

const translations = new Map([
  [
    LANGUAGES.EN_US,
    {
      count: 'Count',
      step: 'Step',
      increment: 'Increment',
      decrement: 'Decrement',
    },
  ],
  [
    LANGUAGES.UA,
    {
      count: 'Рахунок',
      step: 'Крок',
      increment: 'Збільшити',
      decrement: 'Зменшити',
    },
  ],
  [
    LANGUAGES.PL,
    {
      count: 'PL_Count',
      step: 'PL_Step',
      increment: 'PL_Increment',
      decrement: 'PL_Decrement',
    },
  ],
]);

const Counter: FC = function () {
  const lang = useSelector<RootState, LANGUAGES>((state) => state.lang as LANGUAGES);
  const theme = useSelector<RootState, THEMES>((state) => state.theme);
  const { count, step } = useSelector<RootState, { count: number; step: number }>((state) => state.otherCounter);
  const dispatch = useDispatch();

  const { decrement, increment, setStep } = bindActionCreators({ ...counterActionCreators }, dispatch);
  const langAct = bindActionCreators({ setLang }, dispatch);

  const tr = translations.get(lang);
  const selectLang = languages.map((language) => <option key={language} value={language}>{`${language}`}</option>);

  return (
    <div
      className={cx({
        [styles.lightTheme]: theme === THEMES.LIGHT,
        [styles.darkTheme]: theme === THEMES.DARK,
      })}
    >
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
