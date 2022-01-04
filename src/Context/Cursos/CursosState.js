import React, {useReducer} from 'react'

import CursosContext from './CursosContext'
import CursosReducer from './CursosReducer'
import axios from 'axios'

const CursoState = (props) => {

    const inicialState = {
        
    }

    const [state, dispatch] = useReducer(CursosReducer, inicialState)


    return (
        <CursosContext.Provider value={{
            
        }}>
            {props.children}
        </CursosContext.Provider>
    )

}

export default CursoState