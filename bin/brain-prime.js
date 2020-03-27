#!/usr/bin/env node

import { game } from '../src/index.js';
import getPrimeRules from '../games/get-prime-rules.js';

const gameRules = getPrimeRules();
game(gameRules);
