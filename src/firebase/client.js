import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDu1vngIevbgTjLq-yI_-wr-gIQEbVqA88",
    authDomain: "proyectocoderhouse-43acb.firebaseapp.com",
    projectId: "proyectocoderhouse-43acb",
    storageBucket: "proyectocoderhouse-43acb.appspot.com",
    messagingSenderId: "674101176920",
    appId: "1:674101176920:web:ebe262eb79f4292509b82d"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);