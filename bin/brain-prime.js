#!/usr/bin/env node

import { greetings, game } from '../src/index.js';
import getPrimeRules from '../games/get-prime-rules.js';

const userName = greetings();
const gameRules = getPrimeRules();
game({
  userName,
  gameRules,
});
