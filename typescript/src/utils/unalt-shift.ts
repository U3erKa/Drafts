export const ukrainian = `ЙйЦцУуКкЕеНнГгШшЩщЗзХхЇїФфІіВвАаПпРрОоЛлДдЖжЄєЯяЧчСсМмИиТтЬьБбЮю,."№;:?`;
export const russian   = `ЙйЦцУуКкЕеНнГгШшЩщЗзХхЪъФфЫыВвАаПпРрОоЛлДдЖжЄєЯяЧчСсМмИиТтЬьБбЮю,."№;:?`;
export const english   = `QqWwEeRrTtYyUuIiOoPp{[}]AaSsDdFfGgHhJjKkLl:;"'ZzXxCcVvBbNnMm<,>.?/@#$^&`;

export default function fixGibberish(string: string, from = english, to = ukrainian) {
  let result = [];
  let searchValue;
  for (let i = 0; i < string.trim().split('').length; i++) {
    searchValue = from.search(RegExp(`[${string[i]}]`));
    result[i] = searchValue === -1 ? string.trim().split('')[i] : to[searchValue];
  }
  return result.join('');
}

// console.log(fixGibberish(`qwerttyuiop[]asdfghjkl;'zxcvbnm,./ QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>? /@#$^&`, english, ukrainian))
// console.log(fixGibberish(`йцукеенгшщзхїфівапролджєячсмитьбю. ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮ, ."№;:?`, ukrainian, english))
// console.log(fixGibberish('cgjcj, gthtrk.xtybz hfcrkflrb rkfdbfnehs d jgthfwbjyyjq cbcntvt ,bkkfutqncf&', english, russian))
