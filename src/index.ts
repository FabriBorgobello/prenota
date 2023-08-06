// Accept environment variables from .env file
import dotenv from 'dotenv';
import { prenotaOnlineJob } from './jobs/prenota_online.job';
import { scheduleTask } from './scheduler';
dotenv.config();

// Configure node-config directory
// https://github.com/node-config/node-config/wiki/Configuration-Files#config-directory
process.env['NODE_CONFIG_DIR'] = __dirname + '/environments';

scheduleTask({
  name: 'Prenota Online',
  interval: '*/30 * * * * *',
  job: prenotaOnlineJob,
});
