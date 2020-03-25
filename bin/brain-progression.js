#!/usr/bin/env node

import { greetings, game } from '../src/index.js';
import getProgressionRules from '../games/get-progression-rules.js';

const userName = greetings();
const gameRules = getProgressionRules();
game({
  userName,
  gameRules,
});
