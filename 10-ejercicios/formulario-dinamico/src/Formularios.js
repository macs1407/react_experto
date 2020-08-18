import React, { useState } from 'react'
import { Dinamico } from './components/Dinamico';
import {Context} from './Context';

const estadoInicial = {
    nombre:'maikol cucunuba',
    apellidos: 'cucunuba',
    email: 'macs1407@gmail.com',
    mascotas:[]
}


const arregloPersonas = {persona:[]};

const tipoAnimal = ['', 'Perro', 'Gato', 'Loro'];

export const Formularios = () => {

    const [formularioPrincipal, setFormularioPrincipal] = useState(estadoInicial);

    const [personas, setPersonas] = useState(arregloPersonas);

    const {nombre, apellidos, email, mascotas} = formularioPrincipal;

    //const [dinamico, setDinamico] = useState(estadoDinamico);

    /**
     * Cambiar el valor de state
     * @param {*} index 
     * @param {*} e 
     */
    const cambiaValorCampo = (e)=>{
        console.log(e.target.value);
        // Comprueb si es un campo dinamico
        if(["nombre", "edad", "tipo"].includes(e.target.className)){
            const copiamascotas = [...formularioPrincipal.mascotas];
            // Campo unico indice+nombre indice+edad
            console.log(`${e.target.dataset.id}${e.target.className}`);
            copiamascotas[e.target.dataset.id][e.target.className] = e.target.value;
            setFormularioPrincipal({
                ...formularioPrincipal,
                mascotas:copiamascotas
            });
        } else {
            setFormularioPrincipal({
                ...formularioPrincipal,
                [e.target.name]:e.target.value
            });
        }        
    }

    /**
     * Agregar una nueva mascota al formulario
     */
    const handleAgregarDinamico = ()=>{
        setFormularioPrincipal({
            ...formularioPrincipal,
            mascotas:[...formularioPrincipal.mascotas, {tipo:'',nombre:'',edad:''}]
        })
    }

    /**
     * Eliminar una mascota
     * @param {*} index 
     */
    const handleDelete = (index)=>{
        // Extraer el arreglo de las mascoyas
        const mascotas = [...formularioPrincipal.mascotas];
        // Eliminar la mascota de acuerdo al nuevo indice
        mascotas.splice(index, 1);
        // Actualizar el estate
        setFormularioPrincipal({
            ...formularioPrincipal,
            mascotas
        });
    }

    /**
     * Enviar el formulario
     * @param {*} e 
     */
    const handleSubmit = (e)=>{
        e.preventDefault();
        setPersonas({
            ...personas,
            persona:[...personas.persona, formularioPrincipal]
        });
        setFormularioPrincipal(estadoInicial);
    }

    /**
     * Cancelar todo el formulario
     */
    const handleCancelar = ()=>{
        setFormularioPrincipal(estadoInicial);
    }

    return (
        <Context.Provider value={{personas}}>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="nombre" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                autoComplete="off"
                                name="nombre"
                                value={nombre}
                                onChange={cambiaValorCampo}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input type="apellidos" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                autoComplete="off" 
                                name="apellidos"
                                value={apellidos}
                                onChange={cambiaValorCampo}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" 
                                className="form-control" 
                                id="email" 
                                aria-describedby="emailHelp"
                                autoComplete="off" 
                                name="email"
                                value={email}
                                onChange={cambiaValorCampo}
                        />
                    </div>
                    <input  type="submit" 
                            className="btn btn-primary" 
                            value="Enviar"/>
                    &nbsp; &nbsp;
                    <input  type="button" 
                            className="btn btn-warning" 
                            value="agregar"
                            onClick={handleAgregarDinamico}/>
                    &nbsp; &nbsp;
                    <input  type="button" 
                            className="btn btn-danger" 
                            value="cancelar"
                            onClick={handleCancelar}/>                
                    <br /><br />
                    {
                        mascotas?.map((val, idx)=>{
                            let mascotaId = `masc-${idx}, edad-${idx}`;
                            return(
                                <div class="form-row" key={mascotaId}>
                                    <div className="form-group col-md-2">
                                        <select className="form-control" 
                                                onChange={cambiaValorCampo}  
                                                data-id={idx}
                                                className="tipo"
                                                value={mascotas[idx].tipo}>
                                            {tipoAnimal.map(tipo=>(
                                                <option value={tipo} 
                                                        key={tipo}  
                                                        >
                                                    {tipo}
                                                </option>
                                            ))}
                                        </select>     
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input  type="text" 
                                            className="form-control" 
                                            name={idx}
                                            data-id={idx}
                                            id={mascotaId}
                                            autoComplete="off" 
                                            value={mascotas[idx].nombre}
                                            onChange={cambiaValorCampo}
                                            className="nombre"
                                            placeholder="nombre"
                                        />
                                    </div>            
                                    <div className="form-group col-md-4">
                                        <input  type="number" 
                                            className="form-control" 
                                            name={idx}
                                            data-id={idx}
                                            id={mascotaId}
                                            autoComplete="off" 
                                            value={mascotas[idx].edad}
                                            onChange={cambiaValorCampo}
                                            className="edad"
                                            placeholder="edad"
                                        />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input  type="button" 
                                            value="Del" 
                                            className="btn btn-danger" 
                                            onClick={ ()=>{handleDelete(idx)}}
                                        />
                                    </div>
                                
                                </div> 
                            )
                        })
                    }
                </form>

                <hr />
                <Dinamico />
            </div>
        </Context.Provider>
    )
}
