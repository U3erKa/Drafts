/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import type { Versions } from './preload';
import './index.css';

declare const window: Window & typeof globalThis & { versions: Versions };
declare const versions: Versions;

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack',
);

const fizzBuzz: (string | number)[] = [];

for (let i = 0; i < 100; i++) {
  let result = '';

  if (i % 3 === 0) {
    result += 'fizz';
  }
  if (i % 5 === 0) {
    result += 'buzz';
  }

  fizzBuzz.push(result || i);
}

console.log(
  `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`,
);

console.log(fizzBuzz);

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
};

func();

// Should be at the end of file for some reason
import './app';
