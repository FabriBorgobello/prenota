import dotenv from "dotenv";
dotenv.config();

import { prenotaOnlineJob } from "./jobs/prenota_online.job";
import { scheduleTask } from "./scheduler";

scheduleTask({
  name: "Prenota Online",
  interval: "*/30 * * * * *",
  job: prenotaOnlineJob,
});
