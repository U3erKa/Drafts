import React, { ChangeEvent } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { decrement, increment, setStep } from 'app/slices/counter';
import { setLang, languages } from 'app/slices/lang';
import { LANGUAGES } from 'app/constants';

const translations = new Map([
  [LANGUAGES.EN_US, { count: 'Count', step: 'Step', increment: 'Increment', decrement: 'Decrement' }],
  [LANGUAGES.UA, { count: 'Рахунок', step: 'Крок', increment: 'Збільшити', decrement: 'Зменшити' }],
  [LANGUAGES.PL, { count: 'PL_Count', step: 'PL_Step', increment: 'PL_Increment', decrement: 'PL_Decrement' }],
]);

function Counter(props: any) {
  const { count, step, lang, increment, decrement, setStep, setLang } = props;

  const tr = translations.get(lang);
  const selectLang = languages.map((lang) => <option key={lang} value={lang}>{`${lang}`}</option>);

  return (
    <div>
      <p>
        {tr?.count}: {count}
      </p>
      <label>
        {tr?.step}:
        <input type="number" value={step} onChange={setStep} />
        {/* <input
          type="number"
          value={step}
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setStep(value)}
        /> */}
      </label>
      <button onClick={increment}>{tr?.increment}</button>
      <button onClick={decrement}>{tr?.decrement}</button>
      <select value={lang} onChange={setLang}>
        {selectLang}
      </select>
    </div>
  );
}

function mapStateToProps({ counter, lang }: any) {
  return { ...counter, lang };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    setStep: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => dispatch(setStep(value)),
    setLang: ({ target: { value } }: { target: { value: LANGUAGES } }) => dispatch(setLang(value)),
  };
}

// const mapDispatchToProps = { increment, decrement, setStep };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
