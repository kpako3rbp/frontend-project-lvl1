#!/usr/bin/env node
import calcGame from '../src/games/calc.js';
import { gameTemplate } from '../src/index.js';

const rules = 'What is the result of the expression?';
gameTemplate(rules, calcGame);
