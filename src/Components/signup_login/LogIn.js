import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

/* Import Styles */
import '../../Styles/LoginSt.css'

/* Import Componentes */
/* Import Imagenes */
/* Import Context */
import UsuarioContext from '../../Context/Usuarios/UsuarioContext';

export default class Login extends Component {

    static contextType = UsuarioContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.verificarUsuario();
    }

    verificarUsuario = () => {
        let existe = false;
        let usuarioIng = ''
        const usuario = this.context;
        console.log(usuario);
        usuario.obtenerUsuarios();
        console.log(this.state)
        if( !usuario.usuarioSelect ){
            for( let i = 0; i < usuario.state.usuarios.length; i++ ){
                if( this.state.username === usuario.state.usuarios[i].identificacion && this.state.password === usuario.state.usuarios[i].pass ){
                    existe = true;
                    usuarioIng = usuario.state.usuarios[i]
                    break;
                }
            }

            if(existe) {
                usuario.autUsuario(usuarioIng.identificacion);
                this.props.history.push('/home');
            }
            else{
                alert('Erro no se encontro usuario o contraseña ');
            }
        }
        else{
            this.props.history.push('/home');
        }
        
        
    }    

    render() {
        return (
            <div className='bodyLogin'>
                <div className='bodyForm'>
                    <form >
                        <input type='text' name='username' placeholder='USERNAME' onChange={this.handleChange} required ></input>
                        <input type='password' name='password' placeholder='PASSWORD' onChange={this.handleChange} required ></input>
                        <div className='contButon'>
                            <button onClick={this.handleSubmit} > ENVIAR </button>
                            <button onClick={() => console.log('Olvide Contraseña')} >
                                Olvide la Contraseña
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}
