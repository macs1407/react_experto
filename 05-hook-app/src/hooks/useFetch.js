import { useState, useEffect, useRef } from "react"

export const useFetch = (url) => {

    // Mantener la referencia a este hook cuando siga vivo o cuando el componente que lo usa esta montado
    const isMounted = useRef(true);

    const [state, setState] = useState({data: null, loading: true, error: null});

    // Solo se va a ejecutar una vez
    useEffect(() => {
        // y cuando se desmonte el useRef pasa a ser falso indicando que el componente ya no
        // esta montado
        return ()=>{
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({loading:true,error:null,data:null});

        fetch(url).then(resp=>resp.json())
                  .then(data=>{
                      setTimeout(()=>{
                        // Si el comoponente aun esta montado hace el setState, esto haca por problemas de fuga
                        // de memoria y errores al tratar de montar el componente
                        if(isMounted.current){
                            setState({
                                loading:false,
                                error:false,
                                data
                            });
                        } else {
                            console.log('setState no se llamo');
                        }
                      },3000);                    
                   });
    }, [url]);
    return state;
}
