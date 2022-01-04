/* eslint-disable array-callback-return */
import React, { Component } from 'react'

/* Import Styles */
import '../../Styles/HomeSt.css'
import '../../Styles/modalHome.css'

export default class Admin extends Component {
    
    state = {
        isOpenModal: false,
        modalEn: ''
    }

    CursosList = () => {
        return <></>
    }
   
    EstudinatesList = () => {
        return <div className='tablaAdminsListData'>
            <div className='headerList'>
                <h1 className='codigoEst'>Codigo</h1>
                <h1 className='Nombre'>Nombres</h1>
                <h1 className='Apellido'>Apellidos</h1>
                <h1 className='TotalCursos'>Total Cursos</h1>
                <h1 className='Acciones'>Acciones</h1>
            </div>
            <div className='bodyLista'>
                {this.props.estudiantes.map(student => {
                    return <div className='itemList' key={student.codigo_est}>
                        <p className='codigoEst'>{student.codigo_est}</p>
                        <p className='Nombre'>{this.props.usuarios.map( user => {
                            if( user.identificacion === student.identificacion ){
                                return user.nombres
                            }
                        } )}</p>
                        <p className='Apellido'>{this.props.usuarios.map( user => {
                            if( user.identificacion === student.identificacion ){
                                return user.apellidos
                            }
                        } )}</p>
                        <p className='TotalCursos'>10</p>
                        <p className='Acciones'>
                            <button className='btnEdit'>E</button>
                            <button className='btnDelete'>D</button>
                        </p>
                    </div>
                })}
            </div>
        </div>
    }
   
    PerosnalList = () => {
        return <div className='tablaAdminsListData'>
            <div className='headerList'>
                <h1 className='numIdDoc'>#Identificacion</h1>
                <h1 className='Nombre'>Nombres</h1>
                <h1 className='Apellido'>Apellidos</h1>
                <h1 className='Salario'>Salario</h1>
                <h1 className='Acciones'>Acciones</h1>
            </div>
            <div className='bodyLista'>
                {this.props.docentes.map(docente => {
                    return <div className='itemList' key={docente.identificacion}>
                        <p className='numIdDoc'>{docente.identificacion}</p>
                        <p className='Nombre'>{this.props.usuarios.map( user => {
                            if( user.identificacion === docente.identificacion ){
                                return user.nombres
                            }
                        } )}</p>
                        <p className='Apellido'>{this.props.usuarios.map( user => {
                            if( user.identificacion === docente.identificacion ){
                                return user.apellidos
                            }
                        } )}</p>
                        <p className='Salario'>{this.props.personal.map( pers => {
                            if( pers.identificacion === docente.identificacion ){
                                return pers.salario
                            }
                        } )}</p>
                        <p className='Acciones'>
                            <button className='btnEdit'>E</button>
                            <button className='btnDelete'>D</button>
                        </p>
                    </div>
                })}
            </div>
        </div>
    }

    openOrCloseModal = (opcion) => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
            modalEn: opcion ? opcion : ''
        })
    }

    openModal = () => {
        if(this.state.isOpenModal){
            return <ModalAdmins openOrCloseModal={this.openOrCloseModal}/>
        }
        else{
            return <></>
        }
    }

    render() {
        return <div className='zonaAdmin'>

            <div className='contCursos'>
                <div className='headerCursos'>
                    <h1>LIST CURSOS</h1>
                </div>
                <div className='listCursos'></div>
                <div className='contBtnVermas'>
                    <button onClick={this.openOrCloseModal.bind(this, 'curso')}>VER MAS</button>
                </div>
            </div>

            <div className='contMiembros'>

                <div className='contPersonal'>
                    <div className='headerMiembros'>
                        <h1>LIST PERSONAL</h1>
                    </div>
                    <div className='listMiembros'>
                        {this.PerosnalList()}
                    </div>
                    <div className='contBtnVermas'>
                        <button onClick={this.openOrCloseModal.bind(this, 'personal')}>VER MAS</button>
                    </div>
                </div>

                <div className='contEstudiantes'>
                    <div className='headerMiembros'>
                        <h1>LIST ESTUDIANTES</h1>
                    </div>
                    <div className='listMiembros'>
                        {this.EstudinatesList()}
                    </div>
                    <div className='contBtnVermas'>
                        <button onClick={this.openOrCloseModal.bind(this, 'students')}>VER MAS</button>
                    </div>
                </div>

            </div>

            {this.openModal()}

        </div>
    }
}

class ModalAdmins extends Component {
    render() {
        return (
            <div className='containerModal'>
                
            </div>
        )
    }
}
