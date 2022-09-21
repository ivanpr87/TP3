
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: "miproyecto-7f510.firebaseapp.com",
        projectId: "miproyecto-7f510",
        storageBucket: "miproyecto-7f510.appspot.com",
        messagingSenderId: "621795708048",
        appId: "1:621795708048:web:13aeba0b77fdb140371c15"
    };


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



export default db