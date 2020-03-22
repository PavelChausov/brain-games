#!/usr/bin/env node

import { greetings, brainEven } from '../src/index.js';

const userName = greetings();
brainEven(userName);
