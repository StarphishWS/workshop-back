import * as sgMail from '@sendgrid/mail';
import { sendToEmployee } from '../campaign/campaign.service';
import config from '../config';

export const EMAIL = 'noreply.goog1e@epsiwis.fr';


export const sendMail = async (email) => {
    sgMail.setApiKey(config.server.sendgridKey);
    
    const CONTENT = '<p style="color:red; font-size: 24px;"><strong>Tentative de connexion bloquée</strong></p><br>Quelqu\'un vient d\'utiliser votre mot de passe pour se connecter à votre compte. La tentative a été rejetée, mais nous vous conseillons de <a href="localhost:3000/google">vous connecter</a> pour vérifier ce qui s\'est passé.'

    const msg = {
        to: email,
        from: EMAIL,
        subject: 'Alerte de sécurité Gmail',
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



