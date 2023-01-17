export const ukrainian = `ЙйЦцУуКкЕеНнГгШшЩщЗзХхЇїФфІіВвАаПпРрОоЛлДдЖжЄєЯяЧчСсМмИиТтЬьБбЮю,."№;:?`;
export const russian = `ЙйЦцУуКкЕеНнГгШшЩщЗзХхЪъФфЫыВвАаПпРрОоЛлДдЖжЄєЯяЧчСсМмИиТтЬьБбЮю,."№;:?`;
export const english = `QqWwEeRrTtYyUuIiOoPp{[}]AaSsDdFfGgHhJjKkLl:;"'ZzXxCcVvBbNnMm<,>.?/@#$^&`;

export default function fixGibberish(string: string, from = english, to = ukrainian) {
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

const test = () => {
  console.log(
    fixGibberish(`qwerttyuiop[]asdfghjkl;'zxcvbnm,./ QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>? /@#$^&`, english, ukrainian)
  );
  console.log(
    fixGibberish(`йцукеенгшщзхїфівапролджєячсмитьбю. ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ, ."№;:?`, ukrainian, english)
  );
  console.log(
    fixGibberish('cgjcj, gthtrk.xtybz hfcrkflrb rkfdbfnehs d jgthfwbjyyjq cbcntvt ,bkkfutqncf&', english, russian)
  );
};
