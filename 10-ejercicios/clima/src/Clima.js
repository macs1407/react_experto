import React, { useState } from 'react'
import { WeaterInfo } from './components/WeaterInfo';
import { WeaterForm } from './components/WeaterForm';
import Swal from 'sweetalert2';


const estadoInicialTemperatura = {
    temperature: '',
    description: '',
    humidity: '',
    wind_speed: 0,
    city: '',
    country: '',
    error: null
}

export const Clima = () => {
    const [formulario, setFormulario] = useState({
        ciudad:'bogota',
        pais:'colombia'
    });

    const [datos, setDatos] = useState(estadoInicialTemperatura)

    const handleChange = (e)=>{
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    const handleCancel = (e)=>{
        e.preventDefault();
        setDatos(estadoInicialTemperatura);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {ciudad, pais} = formulario;
        if(ciudad === '' || pais === ''){
            Swal.fire('Error', 'Debe ingresar la ciudad y el pais', 'error');
            return;
        }
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=571dc2a45a7ad42f5d8d0033fe2ff229&units=metric`;
        const body = await fetch(API_URL);
        const data = await body.json();
            
        setDatos({
            ...datos,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            city: data.name,
            country: data.sys.country,
            error: null
        });
    }

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <WeaterForm 
                        formulario={formulario}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        datos={datos}
                        handleCancel={handleCancel}
                    />
                    <WeaterInfo datos={datos}/>
                </div>
            </div>
        </div>
    )
}
