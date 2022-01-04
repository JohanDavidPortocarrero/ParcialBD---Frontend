import React, {useReducer} from 'react'

import MatriculaContext from './MatriculaContext'
import MatriculaReducer from './MatriculaReducer'
import axios from 'axios'

const MatriculaState = (props) => {

    const inicialState = {
        matriculasList: []
    }

    const [state, dispatch] = useReducer(MatriculaReducer, inicialState)

    const obtenerMatriculas = async () => {
        try{
            const res = await axios.get('https://back-attendance.herokuapp.com/matricula/');
            console.log(res.data)
            dispatch({
                type: 'OBTENER_MATRICULA',
                payload: res.data
            })
        }catch(e){
            console.log(e)
        }
    }

    const eliminar = async (id) => {
        try{
            const res = await axios.delete('https://back-attendance.herokuapp.com/matricula/'+id);
            console.log(res.data)
            dispatch({
                type: 'BORRAR_MATRICULA',
                payload: res.data
            })
        }catch(e){
            console.log(e)
        }
    }

    const actualizar = async (id, datos) => {
        try{
            const res = await axios.get('https://back-attendance.herokuapp.com/matricula/');
            console.log(res.data)
            dispatch({
                type: 'EDITAR_MATRICULA',
                payload: res.data
            })
        }catch(e){
            console.log(e)
        }
    }

    const add = async () => {
        try{
            const res = await axios.get('https://back-attendance.herokuapp.com/matricula/');
            console.log(res.data)
            dispatch({
                type: 'CREAR_MATRICULA',
                payload: res.data
            })
        }catch(e){
            console.log(e)
        }
    }

    return (
        <MatriculaContext.Provider value={{
            
        }}>
            {props.children}
        </MatriculaContext.Provider>
    )

}

export default MatriculaState