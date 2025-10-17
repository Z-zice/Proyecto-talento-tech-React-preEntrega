import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () =>{
    const[detail ,setDetail] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetch("/data/productos.json").then((res)=>{
            if(!res.ok){
                throw new Error("Hubo un problema al buscar produtos");
            }
            return res.json();
        }).then((data)=>{
            const found =data.find((p)=> p.id == id);
            if(found){
                setDetail(found);
            }else{
                throw  new Error("Producto no encontrado");
            }
            
        }).catch(() => {
            console.log(err);
        });
    },[id]);



    return <main>
        {
            Object.keys(detail).length ? (
                <ItemDetail detail = {detail}/>
            ):(
                <p>Cargando...</p>
            )}
        </main>;
};