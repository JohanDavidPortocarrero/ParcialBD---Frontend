import React, {useReducer} from 'react'

import SedesContext from './SedesContext'
import SedesReducer from './SedesReducer'
import axios from 'axios'

const SedesState = (props) => {

    const inicialState = {
        
    }

    const [state, dispatch] = useReducer(SedesReducer, inicialState)


    return (
        <SedesContext.Provider value={{
            
        }}>
            {props.children}
        </SedesContext.Provider>
    )

}

export default SedesState