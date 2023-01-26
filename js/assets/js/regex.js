const myString = 'Hello, World!';

const myRegex = /Hello/;
const allMatchesCaseInsensitive = /Hello/gi;
const oneOfWords = /yes|no|maybe/;
const oneOfletters = /b[aiu]g/;
const withinRange = /[a-z0-9]/gi;
const notLetter = /[^aeiou]/gi;
const oneOrMoreAs = /a+/g;
const zeroOrMoreAs = /a*/g;

const isMatched = myRegex.test(myString);
const results = myString.match(myRegex);

const humStr = "I'll hum a song";
const hugStr = 'Bear hug';
const huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

const lazyRegex = /t[a-z]*?i/;
lazyRegex.test('titanic'); // 'ti'

myString.match(/^Hello, World!$/);

const wordRegex1 = /[A-Za-z0-9_]/;
const wordRegex2 = /\w/;
const notWordRegex1 = /[^A-Za-z0-9_]/;
const notWordRegex2 = /\W/;

const numberRegex1 = /[0-9]/;
const numberRegex2 = /\d/;
const notNumberRegex1 = /[^0-9]/;
const notNumberRegex2 = /\D/;

const whiteSpaceRegex1 = /[ \r\t\f\n\v]/;
const whiteSpaceRegex2 = /\s/;
const notWhiteSpaceRegex1 = /[^ \r\t\f\n\v]/;
const notWhiteSpaceRegex2 = /\S/;

const rangeOfAs = /a{3,5}h/;
const minAs = /ha{3,}h/;
const certainAmountOfAs = /ha{3}h/;
const maxAs = /ha{,6}h/;

const optionalU = /colou?r/;

const quit = 'qu';
const noquit = 'qt';
const quRegex = /q(?=u)/;
const qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);

const password = 'abc123';
const checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

const testStr = 'Pumpkin';
const testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

const repeatStr = 'row row row your boat';
const repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]

let wrongText = 'The sky is silver.';
let silverRegex = /silver/;
wrongText.replace(silverRegex, 'blue');

'Code Camp'.replace(/(\w+)\s(\w+)/, '$2 $1'); // 'Camp Code'
