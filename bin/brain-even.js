#!/usr/bin/env node

import { game } from '../src/index.js';
import getEvenRules from '../games/get-even-rules.js';

const gameRules = getEvenRules();
game(gameRules);
