import { format } from 'date-fns';
import cron from 'node-cron';

interface Task {
  name: string;
  interval: string;
  job: () => void;
}

export const scheduleTask = ({ name, interval, job }: Task) => {
  if (!cron.validate(interval)) {
    console.error('Invalid cron expression.');
    return;
  }

  cron.schedule(interval, () => {
    const date = new Date();
    const time = format(date, 'dd/MM/yyyy HH:mm:ss');
    console.log(`\x1b[32m[${time}]\x1b[0m - Running task: ${name}`);
    job();
  });

  console.log(`Task "${name}" scheduled with interval ${interval}`);
};
