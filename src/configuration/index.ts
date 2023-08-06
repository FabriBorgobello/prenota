import config from "config";
import { configSchema } from "./configuration.schema";

const parsedConfig = configSchema.safeParse(config);

if (!parsedConfig.success) {
  throw new Error(`Invalid configuration: ${parsedConfig.error}`);
}

export const configuration = parsedConfig.data;
