
import { initializeApp } from "firebase/app";

import { collection, addDoc, getFirestore } from "firebase/firestore";


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

async function cargarBaseDeDatos  () {
    const promise = await fetch('../Productos/DataProductos.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            nombre: producto.name,
            categoria: producto.categoria,
            descripcion: producto.description,
            precio: producto.price,
            stock: producto.stock,
            
        });
    })
    
}

export {db,app, cargarBaseDeDatos}

