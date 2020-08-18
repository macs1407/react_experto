import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';
import { uiCloseModal } from '../../actions/ui';
import {startAddNew, eventClearActiveEvent, eventStartUpdate} from '../../actions/events';
import { useEffect } from 'react';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowEnd = moment().minutes(0).seconds(0).add(2, 'hours');

const initEvent = {
    title:'',
    notes:'',
    start: now.date(),
    end: nowEnd.toDate()
}

export const CalendarModal = () => {

    const dispatch = useDispatch();
    // Estar pendiente del store
    const {modalOpen} = useSelector(state => state.ui);
    const {activeEvent} = useSelector(state => state.calendar);

    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(nowEnd.toDate());

    const [formValues, setFormValues] = useState(initEvent);

    const {title, notes, start, end} = formValues;

    const handleInputChange = ({target})=>{
        setFormValues({
            ...formValues,
            [target.name]:target.value
        });
    }

    const handleStartDateChange = (e)=>{
        setDateStart(e);
        setFormValues({
            ...formValues,
            start:e
        });
    }

    const handleEndDateChange = (e)=>{
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end:e
        });
    }

    const handleSubmitForm = (e)=>{
        e.preventDefault();
        // Trabajarlo como instancia de momemt
        let momentStart = moment(start);
        let momentEnd = moment(end);
        if(momentStart.isSameOrAfter(momentEnd)){
            Swal.fire('Error', 'La fecha fin debe ser mayor a la incial', 'error');
            return;
        }
        if(title.trim().length < 2){
            Swal.fire('Error', 'El titulo debe tener mas de 2 caracteres', 'error');
            return;
        }
        // Si no hay una accion de event, entonces es nuevo
        if(!activeEvent){
            dispatch(startAddNew({...formValues}));
        } else {
            dispatch(eventStartUpdate(formValues));
        }
        
        // Realizar grabacion en base de datos
        cerrarModal();
    }

    const cerrarModal = ()=>{
        setFormValues(initEvent);
        // Cerrar el modal
        dispatch(eventClearActiveEvent());
        dispatch(uiCloseModal());
    }

    useEffect(() => {
       if(activeEvent){
           // Setear los valores del evento activo al formulario
           setFormValues(activeEvent);
       } else {
           // Si el evento activo esta nulo se restablecen los valores por defecto del formulario
           setFormValues(initEvent);
       }
    }, [activeEvent, setFormValues])

    return (
        <Modal
          isOpen={modalOpen}
          //onAfterOpen={afterOpenModal}
          onRequestClose={cerrarModal}
          style={customStyles}
          closeTimeoutMS={200}
          className="modal"
          overlayClassName="modal-fondo"
        >
            {
                (activeEvent)?(<h1> Editar evento </h1>):(<h1> Nuevo evento </h1>)
            }
            
            <hr />
            <form className="container" onSubmit={handleSubmitForm}>

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={dateStart}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={dateEnd}
                        minDate={dateStart}
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
