import config from "config";
import { configSchema } from "./env.schema";

const parsedConfig = configSchema.safeParse(config);

if (!parsedConfig.success) {
  throw new Error(`Invalid configuration: ${parsedConfig.error}`);
}

export const configuration = parsedConfig.data;
