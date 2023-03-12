#!/usr/bin/env node
// @ts-check
'use strict';

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'echo', alias: 'e', type: String, defaultOption: true },
];
const options = commandLineArgs(optionDefinitions);

console.log(options.echo ?? 'Hello world!');
