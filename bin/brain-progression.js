#!/usr/bin/env node

import { game } from '../src/index.js';
import getProgressionRules from '../games/get-progression-rules.js';

const gameRules = getProgressionRules();
game(gameRules);
