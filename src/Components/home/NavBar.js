import React, { Component } from 'react'

/* import Imagenes */
import img2 from '../../assets/img2.png'

/* import Styles */
import '../../Styles/navbarSt.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className='bodyNavBar'>
                <h1 className='titleSitio'>Attendance</h1>
                <div className='contRolAndIcon'>
                    <h2 className='rolUser'>{this.props.rol}</h2>
                    <div className='contIcon'>
                        <img src={img2} alt='../'></img>
                    </div>
                </div>
            </div>
        )
    }
}
