import moment from 'moment';

export const prepareEvents = (eventos = [])=>{
    // Iterar cada evento y convertir la fecha
    return eventos.map(evento=>({
        ...evento,
        end: moment(evento.end).toDate(),
        start: moment(evento.start).toDate(),
    }))
}