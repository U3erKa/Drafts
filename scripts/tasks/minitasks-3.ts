'use strict';

runTest();

function createTime(hours: number, minutes: number, seconds: number) {
  const date = new Date(0, 0, 0, 0, 0, 0);
  return new Date(date.setHours(date.getHours() + hours, date.getMinutes() + minutes, date.getSeconds() + seconds));
}

function getNextDay(day: number, month: number, year: number) {
  return new Date(year, month - 1, day + 2);
}

function runTest() {
  const time = createTime(0, 0, 3600);
  const date = getNextDay(17, 12, 1995);
  console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
  console.log(
    time.toLocaleDateString('it-IT', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }),
  );
  console.log(date);
}

export { createTime, getNextDay };
