const languages: { [k: string]: string } = {
  english: `QqWwEeRrTtYyUuIiOoPp{[}]AaSsDdFfGgHhJjKkLl:;"'ZzXxCcVvBbNnMm<,>.?/@#$^&`,
  ukrainian: `ЙйЦцУуКкЕеНнГгШшЩщЗзХхЇїФфІіВвАаПпРрОоЛлДдЖжЄєЯяЧчСсМмИиТтЬьБбЮю,."№;:?`,
  russian: `ЙйЦцУуКкЕеНнГгШшЩщЗзХхЪъФфЫыВвАаПпРрОоЛлДдЖжЄєЯяЧчСсМмИиТтЬьБбЮю,."№;:?`,
};

// prettier-ignore
const wingdingsVoc = {
  en: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',],
  wd: [ '✌', '👌', '👍', '👎', '☜', '☞', '☝', '☟', '🖐', '☺', '😐', '☹', '💣', '☠', '🏳', '🏱', '✈', '☼', '💧', '❄', '🕆', '✞', '🕈', '✠', '✡', '☪', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '🙰', '🙵', '●', '🔾', '■', '□', '🞐', '❑', '❒', '⬧', '⧫', '◆', '❖', '⬥', '⌧', '⮹', '⌘',],
};

type Language = 'english' | 'wingdings' | 'ukrainian' | 'russian';
type Options = {
  from: Language;
  to: Language;
};

function translate(string: string, { from, to }: { from: string; to: string }) {
  const currentStr = string.trim().split('');
  const result: string[] = [];
  let searchValue: number | undefined;
  let replacedChar: string | null;

  for (let i = 0; i < currentStr.length; i++) {
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

    replacedChar = null;
    result[i] = searchValue === -1 ? currentStr[i] : replacedChar ?? to[searchValue!];
  }
  return result.join('');
}

function translateWd(string: string, isFromWd = false) {
  if (isFromWd) {
    throw new Error('Feature not implemented correctly');
  }

  const currentStr = string.trim();
  const from = isFromWd ? wingdingsVoc.wd : wingdingsVoc.en;
  const to = !isFromWd ? wingdingsVoc.wd : wingdingsVoc.en;

  const result: string[] = [];

  for (let i = 0; i < currentStr.length; i++) {
    const charIndex = from.indexOf(string[i]);
    result.push(charIndex === -1 ? from[i] : to[charIndex]);
  }
  return result.join('');
}

export const createTranslator = ({ from, to }: Options) => {
  if (from === 'wingdings' && to === 'english') {
    return (string: string) => translateWd(string, true);
  }
  if (from === 'english' && to === 'wingdings') {
    return (string: string) => translateWd(string, false);
  }
  if (from !== to) {
    return (string: string) => translate(string, { from: languages[from], to: languages[to] });
  }
  throw new TypeError(`Current vocabularies combination is not supported: ${from} and ${to}`);
};

const test = () => {
  const engToUkr = createTranslator({ from: 'english', to: 'ukrainian' });
  const urkToEng = createTranslator({ from: 'ukrainian', to: 'english' });
  const engToRus = createTranslator({ from: 'english', to: 'russian' });
  const enToWd = createTranslator({ from: 'english', to: 'wingdings' });
  const wdToEn = createTranslator({ from: 'wingdings', to: 'english' });
  // const broken = createTranslator({ from: 'wingdings', to: 'wingdings' });

  console.log(engToUkr(`qwerttyuiop[]asdfghjkl;'zxcvbnm,./ QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>? /@#$^&`));
  console.log(urkToEng(`йцукеенгшщзхїфівапролджєячсмитьбю. ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ, ."№;:?`));
  console.log(engToRus('cgjcj, gthtrk.xtybz hfcrkflrb rkfdbfnehs d jgthfwbjyyjq cbcntvt ,bkkfutqncf&'));
  // console.log(wdToEn('✌👌👍👎☜☞☝☟🖐☺😐☹💣☠🏳🏱✈☼💧❄🕆✞🕈✠✡☪☯ॐ☸♈♉♊♋♌♍♎♏♐♑♒♓🙰🙵●🔾■□🞐❑❒⬧⧫◆❖⬥⌧⮹⌘'));
  console.log(enToWd('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz'));
};

// test();

export default createTranslator;
