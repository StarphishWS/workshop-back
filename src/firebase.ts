import * as admin from 'firebase-admin';
import config from "./config";

admin.initializeApp({
    credential: admin.credential.cert('../firebase.json')
})

export default admin;
export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();
