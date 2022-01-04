import React, {useReducer} from 'react'

import UsuarioReducer from './UsuarioReducer'
import UsuarioContext from './UsuarioContext'
import axios from 'axios'

const UsuarioState = (props) => { 

    const inicialState = {
        usuarioSelect: {
            rol: 1
        },
        usuarios: [],
        personal: [],
        docentes: [],
        admins: [],
        estudiantes: [],
        error: false,
        cargando: true
    }

    const [state, dispatch] = useReducer(UsuarioReducer, inicialState)

    const obtenerUsuarios = async () => {
        try{

            const res = await axios.get('https://back-attendance.herokuapp.com/usuarios/');
            console.log(res.data)
            dispatch({
                type: 'OBTENER_USUARIO',
                payload: res.data
            })

        }catch(e){
            state.error = true;
            console.log(e)
        }
    }

    const obtenerPersonal = async () => {
        try{

            const res = await axios.get('https://back-attendance.herokuapp.com/personal/');
            console.log(res.data)
            dispatch({
                type: 'OBTENER_PERSONAL',
                payload: res.data
            })

        }catch(e){
            state.error = true;
            console.log(e)
        }
    }

    const obtenerAdmins = async () => {
        try{

            const res = await axios.get('https://back-attendance.herokuapp.com/admins/');
            console.log(res.data)
            dispatch({
                type: 'OBTENER_ADMINS',
                payload: res.data
            })

        }catch(e){
            state.error = true;
            console.log(e)
        }
    }

    const obtenerEstudiantes = async () => {
        try{

            const res = await axios.get('https://back-attendance.herokuapp.com/estudinates/');
            console.log(res.data)
            dispatch({
                type: 'OBTENER_ESTUDIANTES',
                payload: res.data
            })

        }catch(e){
            state.error = true;
            console.log(e)
        }
    }

    const obtenerDocentes = async () => {
        try{

            const res = await axios.get('https://back-attendance.herokuapp.com/profesores/');
            console.log(res.data)
            dispatch({
                type: 'OBTENER_PROFESORES',
                payload: res.data
            })

        }catch(e){
            state.error = true;
            console.log(e)
        }
    }

    const autUsuario = async (id) => {
        try{

            const res = await axios.get('https://back-attendance.herokuapp.com/usuarios/'+id);
            console.log(res.data)
            dispatch({
                type: 'AUTENTICAR_USUARIO',
                payload: res.data
            })

        }catch(e){
            state.error = true;
            console.log(e)
        }
    }


    const obtenerUsuario =  (usuario) => {
        try{
            dispatch({
                type: 'WELCOME_USUARIO',
                payload: usuario
            })
        }catch(e){
            state.error = true;
            console.log(e)
        }
    }

    const actualizar = async (userUpdate) => {
        try{

            const res = await axios.put('https://back-attendance.herokuapp.com/usuarios/', userUpdate);
            console.log(res.data)
            dispatch({
                type: 'EDITAR_USUARIO',
                payload: userUpdate
            })
            
        }catch(e){
            state.error = true;
            console.log(e)
        }
        
    }

    return (
        <UsuarioContext.Provider value={{
            usuarioSelect: state.usuarioSelect,
            usuarios: state.usuarios,
            personal: state.personal,
            docentes: state.docentes,
            admins: state.admins,
            estudiantes: state.estudiantes,
            error: state.error,
            cargando: state.cargando,
            obtenerUsuarios,
            obtenerUsuario,
            actualizarUser: actualizar,
            autUsuario,
            obtenerPersonal,
            obtenerEstudiantes,
            obtenerDocentes,
            obtenerAdmins
        }}>
            {props.children}
        </UsuarioContext.Provider>
    )
    
}

export default UsuarioState