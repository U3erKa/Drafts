const languages: { [k: string]: string } = {
  english: `QqWwEeRrTtYyUuIiOoPp{[}]AaSsDdFfGgHhJjKkLl:;"'ZzXxCcVvBbNnMm<,>.?/@#$^&`,
  ukrainian: `ЙйЦцУуКкЕеНнГгШшЩщЗзХхЇїФфІіВвАаПпРрОоЛлДдЖжЄєЯяЧчСсМмИиТтЬьБбЮю,."№;:?`,
  russian: `ЙйЦцУуКкЕеНнГгШшЩщЗзХхЪъФфЫыВвАаПпРрОоЛлДдЖжЄєЯяЧчСсМмИиТтЬьБбЮю,."№;:?`,
};

type Language = 'english' | 'ukrainian' | 'russian';
type Options = {
  from: Language;
  to: Language;
};

function translate(string: string, { from, to }: { from: string; to: string }) {
  let result = [];
  let searchValue: number;
  let replacedChar: string;

  for (let i = 0; i < string.trim().split('').length; i++) {
    switch (string[i]) {
      case from[21]: {
        replacedChar = to[21];
        break;
      }
      case from[63]: {
        replacedChar = to[63];
        break;
      }
      case from[64]: {
        replacedChar = to[64];
        break;
      }
      case from[65]: {
        replacedChar = to[65];
        break;
      }
      case from[70]: {
        replacedChar = to[70];
        break;
      }
      default: {
        searchValue = from.search(string[i]);
        break;
      }
    }
    result[i] = searchValue === -1 ? string.trim().split('')[i] : replacedChar ?? to[searchValue];
    replacedChar = null;
  }
  return result.join('');
}

export const createTranslator = ({ from, to }: Options) => {
  return (string: string) => translate(string, { from: languages[from], to: languages[to] });
};

const test = () => {
  const engToUkr = createTranslator({ from: 'english', to: 'ukrainian' });
  const urkToEng = createTranslator({ from: 'ukrainian', to: 'english' });
  const engToRus = createTranslator({ from: 'english', to: 'russian' });
  console.log(engToUkr(`qwerttyuiop[]asdfghjkl;'zxcvbnm,./ QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>? /@#$^&`));
  console.log(urkToEng(`йцукеенгшщзхїфівапролджєячсмитьбю. ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ, ."№;:?`));
  console.log(engToRus('cgjcj, gthtrk.xtybz hfcrkflrb rkfdbfnehs d jgthfwbjyyjq cbcntvt ,bkkfutqncf&'));
};

export default createTranslator;
