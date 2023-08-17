// Configure node-config directory
// https://github.com/node-config/node-config/wiki/Configuration-Files#config-directory
process.env['NODE_CONFIG_DIR'] = __dirname + '/environments';

// Accept environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

import { prenotaOnlineJob } from './jobs/prenota_online.job';
import { scheduleTask } from './scheduler';

scheduleTask({
  name: 'Prenota Online',
  interval: '*/1 * * * *',
  job: prenotaOnlineJob,
});
