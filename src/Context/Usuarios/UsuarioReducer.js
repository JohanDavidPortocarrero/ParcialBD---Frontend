import {
    CREAR_USUARIO,
    OBTENER_USUARIO,
    WELCOME_USUARIO,
    EDITAR_USUARIO,
    BORRAR_USUARIO,
    AUTENTICAR_USUARIO,
    OBTENER_ADMINS,
    OBTENER_ESTUDIANTES,
    OBTENER_PERSONAL,
    OBTENER_PROFESORES
} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case CREAR_USUARIO:
            return {
                ...state,
                usuarios: payload
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                usuarios: payload
            }
        case OBTENER_ADMINS:
            return {
                ...state,
                admins: payload
            }
        case OBTENER_ESTUDIANTES:
            return {
                ...state,
                estudiantes: payload
            }
        case OBTENER_PROFESORES:
            return {
                ...state,
                docentes: payload
            }
        case OBTENER_PERSONAL:
            return {
                ...state,
                personal: payload
            }
        case WELCOME_USUARIO:
            return {
                ...state,
                usuarioSelect: payload
            }
        case EDITAR_USUARIO:
            return {
                ...state,
                usuarios: payload
            }
        case BORRAR_USUARIO:
            return {
                ...state,
                usuarios: payload
            }
        case AUTENTICAR_USUARIO:
            return {
                ...state,
                usuarioSelect: payload
            }
        default:
            return state;
    }

}