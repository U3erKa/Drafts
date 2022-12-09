import { ChangeEvent } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import cx from 'classnames';
import { LANGUAGES, THEMES } from 'app/constants';
import { RootState } from 'app/store';
import { setLang, languages } from 'app/slices/lang';
import { decrement, increment, setStep } from 'app/slices/counter';
import { setTheme } from 'app/slices/theme';
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

function Counter(props: any) {
  const { count, step, lang, theme, increment, decrement, setStep, setLang } = props;

  const tr = translations.get(lang);
  const selectLang = languages.map((lang) => <option key={lang} value={lang}>{`${lang}`}</option>);

  return (
    <div
      className={cx({ [styles.lightTheme]: theme === THEMES.LIGHT, [styles.darkTheme]: theme === THEMES.DARK })}
    >
      <p>
        {tr?.count}: {count}
      </p>
      <label>
        {tr?.step}:
        <input type="number" value={step} onChange={setStep} />
      </label>
      <button onClick={increment}>{tr?.increment}</button>
      <button onClick={decrement}>{tr?.decrement}</button>
      <select value={lang} onChange={setLang}>
        {selectLang}
      </select>
    </div>
  );
}

function mapStateToProps({ counter, lang, theme }: RootState) {
  return { ...counter, lang, theme };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    setStep: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => dispatch(setStep(value)),
    setLang: ({ target: { value } }: { target: { value: LANGUAGES } }) => dispatch(setLang(value)),
    setTheme: () => dispatch(setTheme()),
  };
}

// const mapDispatchToProps = { increment, decrement, setStep };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
