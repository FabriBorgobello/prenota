import { configuration } from 'configuration';
import { sendEmail } from '../notifications/email';
import { sendNotification } from '../notifications/notification';
import { sendTelegram } from '../notifications/telegram';

export async function prenotaOnlineJob() {
  const URL = configuration.prenotaOnline.url;

  try {
    console.log('Prenota Online Job');
    const myHeaders = new Headers();
    myHeaders.append('Cookie', configuration.prenotaOnline.cookie);

    const response = await fetch(URL, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'manual',
    });

    // Redirections
    if (response.status === 302) {
      const redirectionUrl = response.headers.get('location');
      const loginUrl = '/Home';
      const servicesUrl = '/Services';

      // No redirection URL (idk if it's possible)
      if (!redirectionUrl) throw new Error('Redirection URL not found');

      if (redirectionUrl.includes(loginUrl)) {
        // Cookie expired
        console.log('Authentication required');
        throw new Error('Authentication required');
      } else if (redirectionUrl.includes(servicesUrl)) {
        // Cookie valid but no appointments available
        console.log('No appointments available');
      } else {
        // Unknown redirection URL
        // TODO: It may get here if there's an appointment available. Check it.
        console.log('Unknown redirection URL: ' + redirectionUrl);
        throw new Error('Unknown redirection URL: ' + redirectionUrl);
      }
    } else {
      console.log('Appointment available');
      await sendEmail();
      await sendTelegram();
      await sendNotification();
    }
  } catch (error) {
    console.log(error);
  }
}
