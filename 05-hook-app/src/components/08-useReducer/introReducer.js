// Crear state inicial
const initialState = [{
    id:1,
    todo:'Hacer al aplicacion de shardMusc',
    donde:false,
}];
// Reducer basico
// el reducer recibe dos argumentos, el state y la accion que va a cambiar el state
const todoReducer = (state = initialState, action)=>{
    // Acciones a realizar sobre el state
    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }
    // Siempre se tiene que retornar un state
    return state;
}

// Inicializar
let todos = todoReducer();

// Crear un nuevo objeto
const nuevoTodo = {
    id:2,
    todo:'Seguir estudiando',
    donde:false,
};

// Para enviar un nuevo todo, se crea un objeto con 
// Type: accion a ejecutar
// payload: objeto que se envia
const agregarAccion = {
    type:'agregar',
    payload: nuevoTodo
}

// Enviar un nuevo objeto
todos = todoReducer(todos, agregarAccion);

// Imprimir la lista de tareas
console.log(todos);