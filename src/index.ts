#!/usr/bin/env node
// @ts-check
'use strict';

const commandLineArgs = require('command-line-args');

/** @type {commandLineArgs.OptionDefinition[]} */
const optionDefinitions = [
  { name: 'echo', alias: 'e', type: String },
  { name: 'verbose', alias: 'v', type: Boolean },
  { name: 'src', type: String, multiple: true, defaultOption: true },
  { name: 'timeout', alias: 't', type: Number },
];
const options = commandLineArgs(optionDefinitions, { partial: true });

setTimeout(
  () => console.log(options.echo ?? 'Hello world!'),
  options.timeout ?? 0
);

if (options.verbose) {
  console.log(options);
}
