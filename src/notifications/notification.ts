import { configuration } from "../configuration";
import notifier from "node-notifier";

export const sendNotification = async () => {
  notifier.notify({
    title: configuration.notification.title,
    message: configuration.notification.message,
  });
};
