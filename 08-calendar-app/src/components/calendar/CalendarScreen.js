import React, { useState, useEffect } from 'react'
import { Navbar } from '../ui/Navbar';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { messages } from '../../helpers/calendar-messages';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive, eventClearActiveEvent, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    // Traer los eventos de acuerdo a lo que este en el store, mas preciso el calendar
    const {events, activeEvent} = useSelector(state => state.calendar);

    const {uid} = useSelector(state => state.auth);

   // const [lastView, setLastView] = useState((localStorage.getItem('lastView') || 'mont') || '');
    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

    const onDoubleClick = (e)=>{
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e)=>{
        dispatch(eventSetActive(e));
    }

    const onSelectSlot = ()=>{
        dispatch(eventClearActiveEvent());
    }

    // Guardar en el local storage la ultima pestaña que se visito
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }
    

    const eventStyleGetter = (event, start, end, isSelected)=>{
        const style = {
            backgroundColor:(uid === event.user._id) ? '#367CF7' : '#465660',
            borderRadius:'0px',
            opacity:0.8,
            display:'block',
            color:'white'
        }
        return {
            style        
        }
    }

    // Cargar los eventos al cargar el componente
    useEffect(() => {
       dispatch(eventStartLoading());
    }, [dispatch])

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />
            {
                (activeEvent) && (<DeleteEventFab />)
            }
            <AddNewFab />
            <CalendarModal />
        </div>
    )
}
