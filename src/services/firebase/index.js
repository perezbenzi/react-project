import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdDDsWGXrw-dgf-sIUBLCXabLfduEFh9U",
    authDomain: "coderreactapp.firebaseapp.com",
    projectId: "coderreactapp",
    storageBucket: "coderreactapp.appspot.com",
    messagingSenderId: "204623546723",
    appId: "1:204623546723:web:e361b845ed83010a366b56",
    measurementId: "G-04Z6JCHJRZ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
