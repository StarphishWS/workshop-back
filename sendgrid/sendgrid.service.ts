import * as sgMail from '@sendgrid/mail';
import config from '../src/config';

sgMail.setApiKey(config.server.sendgridKey);

export const EMAIL = 'google@epsiwis.fr';


const sendMail = async () => {
    
}



