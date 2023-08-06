import { configuration } from '../configuration';

export const sendTelegram = async () => {
  console.log('Sending Telegram message');
  try {
    const TELEGRAM_URL = `https://api.telegram.org/bot${configuration.telegram.botToken}/sendMessage`;
    const params = new URLSearchParams();
    params.append('chat_id', configuration.telegram.chatId);
    params.append('text', 'Appointment available');
    const response = await fetch(`${TELEGRAM_URL}?${params.toString()}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
