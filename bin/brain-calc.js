#!/usr/bin/env node

import { game } from '../src/index.js';
import getCalcRules from '../games/get-calc-rules.js';

const gameRules = getCalcRules();
game(gameRules);
