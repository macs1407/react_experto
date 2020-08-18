import React from 'react'

export const WeaterForm = ({formulario, handleSubmit, handleChange, handleCancel}) => {

    const {ciudad, pais} = formulario;

    return (
        <div className="card card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input  placeholder="ciudad" 
                            className="form-control" 
                            name="ciudad"
                            value={ciudad}
                            onChange={handleChange}
                            autoComplete="off"
                            />
                </div>
                <div className="form-group">
                    <input  placeholder="pais" 
                            className="form-control" 
                            name="pais"
                            value={pais}
                            onChange={handleChange}
                            autoComplete="off"
                            />
                </div>
                <button className="btn btn-success btn-block">Consultar</button>
                <button className="btn btn-danger btn-block" onClick={handleCancel}>Limpiar</button>
            </form>
        </div>
    )
}
