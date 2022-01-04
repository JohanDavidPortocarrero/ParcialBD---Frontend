import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

/* Import Styles */
import './Styles/App.css';

/* Import Componentes */
import Home from './Components/home/Home'
import Login from './Components/signup_login/LogIn';
import Welcome from './Components/welcome/Welcome';

/* Import Context */
import UsuarioState from './Context/Usuarios/UsuarioState';

/* Import Imagenes */

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UsuarioState>

          <Router>
            <Routes>

              <Route path="/" element={<Welcome />} /> 
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} /> 

            </Routes>
          </Router>
          
        </UsuarioState>
        
      </div>
    )
  }
}

