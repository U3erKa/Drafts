import promises from 'fs/promises';
(async function () {
  const file = await promises.readFile('log.txt', { encoding: 'utf8' });
  const lines = file.split('\r\n').filter(Boolean);

  const timestamps = /** @type {string[]} */ ([]);
  const messages = /** @type {string[]} */ ([]);
  const logs = /** @type {{[key: string]: string[]}} */ ({});

  lines.forEach((line) => {
    /** @type {[string, string]} */
    // @ts-ignore
    const [timestamp, message] = line.split(/ \[5\] DHCP[CD]: /);
    timestamps.push(timestamp);
    messages.push(message);
  });

  const uniqueMessages = [...new Set(messages)];
  uniqueMessages.forEach((message) => {
    const times = /** @type {string[]} */ ([]);
    messages.forEach((msg, i) => {
      // @ts-ignore
      if (msg === message) times.push(timestamps[i]);
    });

    logs[message] = times;
  });

  Object.entries(logs).forEach(async ([message, timestamps]) => {
    await promises.appendFile(
      'log-out.txt',
      `
${message}
TIMESTAMPS:
${timestamps.join('\n')}
`,
      { encoding: 'utf8' },
    );
  });
})();
