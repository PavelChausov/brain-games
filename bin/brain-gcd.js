#!/usr/bin/env node

import { game } from '../src/index.js';
import getGCDRules from '../games/get-gcd-rules.js';

const gameRules = getGCDRules();
game(gameRules);
