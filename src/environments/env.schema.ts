import { z } from "zod";

export const configSchema = z.object({
  database: z.object({
    host: z.string(),
    port: z.number(),
  }),
  secrets: z.object({
    password: z.string(),
  }),
  // Define other environment variables here...
});
