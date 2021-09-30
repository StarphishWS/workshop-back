import * as sgMail from '@sendgrid/mail';
import { sendToEmployee } from '../campaign/campaign.service';
import config from '../config';

export const EMAIL = 'google@epsiwis.fr';
export const CONTENT = 
'<p>Alerte de sécurité sur votre compte google</p><br><a href="google.fr">Connectez vous</a> pour la consulter';


export const sendMail = async (email) => {
    sgMail.setApiKey(config.server.sendgridKey);
    

    const msg = {
        to: email,
        from: EMAIL,
        subject: 'C\'est très la russie, gare à tes données',
        html: CONTENT,
    }

    sgMail.send(msg).then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
    })
    .catch((error) => {
        console.error(error)
    })
}



