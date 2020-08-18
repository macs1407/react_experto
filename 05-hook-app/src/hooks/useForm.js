import { useState } from "react"

export const useForm = (initialState={}) => {
    const [values, setValues] = useState(initialState);

    const reset = ()=>{
        setValues(initialState);
    }

    const handleInputChange = (e)=>{
         // Se haca una copia del estado actual con ... o si no sobre escrbiriamos el state actual
        // el [target.name] hace referencia a name y email
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return [values, handleInputChange, reset];
}
