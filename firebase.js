
import "dotenv/config"
import { initializeApp } from "firebase/app";
import { doc, collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "mi-verduleria-4d0f8.firebaseapp.com",
    projectId: "mi-verduleria-4d0f8",
    storageBucket: "mi-verduleria-4d0f8.appspot.com",
    messagingSenderId: "818063142603",
    appId: "1:818063142603:web:df205159527d82362af54e",
    measurementId: "G-TLKSPMYG6K"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

async function cargarBaseDeDatos  () {
    const promise = await fetch('./src/Productos/DataProductos.json')
    const productos = await promise.json()
    productos.forEach(async (producto) => {
        await addDoc(collection(db, "productos"), {
            nombre: producto.name,
            categoria: producto.categoria,
            precio: producto.price,
            stock: producto.stock,
            img: ""
        });
    })
    
}

export {db,app, cargarBaseDeDatos}