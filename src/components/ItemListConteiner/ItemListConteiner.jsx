import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList'
//import DataProductos from "../../Productos/DataProductos";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from  '../../firebase/firebase';
import Spinner from '../Spinner/Spinner';





export default function ItemListConteiner() {
  
    const [items, setItems] = useState([]);

    const {categoryId } = useParams ()
    const [load, setLoad] = useState(true) 
  

    /*useEffect (() => {
      const getItemData = new Promise((resolve, reject) => {

        if(categoria){
          resolve(DataProductos.filter(item => item.categoria === categoria))
        }
        else{
          resolve(DataProductos)
        }
          
      
      })*/
   /* useEffect(()=>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'productos');
      if (categoria) {
        const queryFilter = query(queryCollection, where('categori', "==", categoria))
        getDocs(queryFilter)
        .then(res=>setItem(res.docs.map(product =>({ id: product.id, ...product.data()}))))
      }else {
        getDocs(queryCollection)
        .then(res=>setItem(res.docs.map(product =>({ id: product.id, ...product.data()}))))
      }
    },[categoria])*/

    const getData = async (categoria) => {
      try {
        setLoad(true)
        const document = categoria?query(collection(db, "productos"), where("category", "==", categoria))
          : collection(db, "productos")
        const col = await getDocs(document)
        const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
        setItems(result)
        setLoad(false)
      } catch (error) {
        console.log(error)
      }
    }
  
  
    useEffect(() => {
      getData(categoryId)
    }, [categoryId])
  
  
  
    return (
      <>
        {load ? <Spinner /> : <ItemList item={items} />}
      </>
    );
  };
  


