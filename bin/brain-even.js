#!/usr/bin/env node
import evenGame from '../src/games/even.js';
import { gameTemplate } from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
gameTemplate(rules, evenGame);
