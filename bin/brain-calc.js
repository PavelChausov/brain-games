#!/usr/bin/env node

import { greetings, game } from '../src/index.js';
import getCalcRules from '../games/get-calc-rules.js';

const userName = greetings();
const gameRules = getCalcRules();
game({
  userName,
  gameRules,
});
