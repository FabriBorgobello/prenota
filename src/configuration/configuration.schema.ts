import { z } from 'zod';

export const configSchema = z.object({
  email: z.object({
    message: z.object({
      subject: z.string(),
      text: z.string(),
    }),
    sender: z.object({
      name: z.string(),
      address: z.email(),
      password: z.string(),
    }),
    receiver: z.object({
      address: z.email(),
    }),
  }),
  telegram: z.object({
    botToken: z.string(),
    chatId: z.string(),
  }),
  notification: z.object({
    title: z.string(),
    message: z.string(),
  }),
  prenotaOnline: z.object({
    url: z.url(),
    cookie: z.string(),
  }),
});
