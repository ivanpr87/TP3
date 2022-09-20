import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList'
//import DataProductos from "../../Productos/DataProductos";
import { useParams } from 'react-router-dom';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';




export default function ItemListConteiner() {
  
    const [item, setItem] = useState([]);

    const {categoriaId} = useParams ()

    /*useEffect (() => {
      const getItemData = new Promise((resolve, reject) => {

        if(categoria){
          resolve(DataProductos.filter(item => item.categoria === categoria))
        }
        else{
          resolve(DataProductos)
        }
          
      
      })*/
/*
      const getData = async (categoria) =>{
        try {
        const document = collection(db,"productos")
        const col = await getDocs (document)
        const result = col.docs.map((doc) => doc ={id:doc.id,...doc,data()})
        setItem(result)
        setLoad(false)
      }catch (error){
          console.log(error)
      }

      }
      useEffect(() => {
          categoryId?getDatacategory(categoryId):getData()
      },[categoryId])

      getItemData
      .then(response => setItem(response))
    }, [categoria];

  */
    useEffect(()=>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb, `productos`);
      if (categoriaId) {
        const queryFilter = query(queryCollection, where(`category`, "==", categoriaId))
        getDocs(queryFilter)
        .then(res=>setItem(res.docs.map(product =>({ id: product.id, ...product.data()}))))
      }else {
        getDocs(queryCollection)
        .then(res=>setItem(res.docs.map(product =>({ id: product.id, ...product.data()}))))
      }
    },[categoriaId])


  return item ? <ItemList item={item} setItem={setItem} />: <h1>Cargando...</h1>
}

