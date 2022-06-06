#!/usr/bin/env node
import gcdGame from '../src/games/gcd.js';
import { gameTemplate } from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';
gameTemplate(rules, gcdGame);