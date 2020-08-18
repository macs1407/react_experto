export const todoReducer = (state = [], action)=>{
    switch(action.type){
        case 'add':
            return [...state, action.payload];
        // Regresa un nuevo arreglo menos el id que se envia
        case 'delete':
            return state.filter(tudu=> tudu.id !== action.payload);
        // Forma larga
        case 'toogle-old':
            return state.map(todo=>{
                // Es tudu que toca cambiar
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo
                }
            });
        // Forma corta
        case 'toogle':
                return state.map(todo=>
                    (todo.id === action.payload) ? {...todo, done: !todo.done} : todo
                );
        default:
            return state;
    }
}