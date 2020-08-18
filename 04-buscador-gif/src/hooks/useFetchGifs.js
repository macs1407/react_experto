import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


// Un custom hook no es mas que una funcion
export const useFetchGifs = (categoria)=>{
    const [state, setState] = useState({
        data:[],
        loading:true,
    });

    // Se ejecuta cuando haya un cambio sobre una lista de dependencias si no se le envia nada en [] solo se ejecutara
    // Una vez cuando el componente se renderiza
    useEffect(() => {
        getGifs(categoria).then(imgs=>{
            setTimeout(()=>{
                setState({
                    data:imgs,
                    loading:false
                });
            },3000);
          
        });
    }, [categoria]);

    return state;
}