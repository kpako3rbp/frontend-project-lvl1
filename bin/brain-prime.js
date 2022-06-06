#!/usr/bin/env node
import primeGame from '../src/games/prime.js';
import gameTemplate from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
gameTemplate(rules, primeGame);
