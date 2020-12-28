#!/usr/bin/env node
import sayHey from '../src/cli.js';
import { nameQuestion } from '../src/index.js';

console.log(sayHey(nameQuestion));
