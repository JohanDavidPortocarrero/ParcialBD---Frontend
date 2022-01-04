import React, {  useContext, useEffect, Component } from 'react'

/* Import Styles */
import '../../Styles/HomeSt.css'
/* Import Componentes */
import Admin from './Admin';
import NavBar from './NavBar';

/* Import Imagenes */
/* Import Context */
import UsuarioContext from '../../Context/Usuarios/UsuarioContext';

export default function Home (props){

    const usuarioContext = useContext(UsuarioContext);
    const {usuarios, 
        usuarioSelect, 
        personal, 
        docentes, 
        estudiantes, 
        obtenerUsuarios, 
        obtenerPersonal,
        obtenerEstudiantes,
        obtenerDocentes,
        eliminarUser, 
        addUser, 
        actualizarUser} = usuarioContext;

    useEffect(()=>{
        // Es asincrono? El nombre no aparece en la 1° ejecucion per se
        obtenerUsuarios();
        obtenerPersonal();
        obtenerEstudiantes();
        obtenerDocentes();
    }, [])

    /* Funciones Componentes */

    const userView = () => {
        if( usuarioSelect.rol === 1 ){
            return <Admin
                usuarios = {usuarios}
                personal = {personal}
                docentes = {docentes}
                estudiantes = {estudiantes}
            />
        }
        else if( usuarioSelect.rol === 2 ){
            return <div className='zonaDocen'></div>
        }
        else if( usuarioSelect.rol === 3 ){
            return <div className='zonaEst'></div>
        }
    }

    return <>
        <NavBar rol={'ADMIN'}/>
        <div className='bodyHome'>
            {userView()}
        </div>
    </>
    
    /*
    <HomeComponent 
        usuarios = {usuarios}
        obtenerUsuario = {obtenerUsuarios}
        eliminar = {eliminarUser}
        add = {addUser}
        actualizar = {actualizarUser}
    />*/
}