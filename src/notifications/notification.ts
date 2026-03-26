import notifier from 'node-notifier';
import { configuration } from '../configuration';

export const sendNotification = async () => {
  notifier.notify({
    title: configuration.notification.title,
    message: configuration.notification.message,
  });
};
