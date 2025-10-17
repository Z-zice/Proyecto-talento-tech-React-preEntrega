import { useEffect,useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({titulo}) =>{
    const[products, setProducts]= useState([]);
    
    useEffect(()=>{
        fetch("/data/productos.json").then((res)=>{
            if(!res.ok){
                throw new Error("Hubo un problema al buscar produtos");
            }
            return res.json();

        }).then((data)=>{
            setProducts(data)
        }).catch(()=>{
            console.log((err)=> console.error("Error cargando JSON:",err));
        });
    },[]);



    return ( 
    <section>
        <h1>{titulo}</h1>
        <ItemList lista={products} />
        
    </section>
    );
};