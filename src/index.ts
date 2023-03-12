#!/usr/bin/env node
import commandLineArgs from 'command-line-args';
import type { OptionDefinition } from 'command-line-args';

const optionDefinitions: OptionDefinition[] = [
  { name: 'echo', alias: 'e', type: String, defaultValue: 'Hello world!' },
  { name: 'verbose', alias: 'v', type: Boolean, defaultValue: false },
  { name: 'src', type: String, multiple: true, defaultOption: true },
  { name: 'timeout', alias: 't', type: Number, defaultValue: 0 },
];
const options = commandLineArgs(optionDefinitions, { partial: true });

setTimeout(() => console.log(options.echo), options.timeout);

if (options.verbose) {
  console.log(options);
}
