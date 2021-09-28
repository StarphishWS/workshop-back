import * as admin from 'firebase-admin';
import * as firebaseconfig from "../firebase.json"
import config from "./config";

admin.initializeApp({
    credential: admin.credential.cert(firebaseconfig) 
})

export default admin;
export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();
