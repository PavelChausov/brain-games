#!/usr/bin/env node

import { greetings, game } from '../src/index.js';
import getGCDRules from '../games/get-gcd-rules.js';

const userName = greetings();
const gameRules = getGCDRules();
game({
  userName,
  gameRules,
});
