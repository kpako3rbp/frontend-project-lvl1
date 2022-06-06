#!/usr/bin/env node
import progressionGame from '../src/games/progression.js';
import gameTemplate from '../src/index.js';

const rules = 'What number is missing in the progression?';
gameTemplate(rules, progressionGame);
