import React, {useReducer} from 'react'

import AsistenciaContext from './AsistenciaContext'
import AsistenciaReducer from './AsistenciaReducer'
import axios from 'axios'

const AsistenciaState = (props) => {

    const inicialState = {
        
    }

    const [state, dispatch] = useReducer(AsistenciaReducer, inicialState)


    return (
        <AsistenciaContext.Provider value={{
            
        }}>
            {props.children}
        </AsistenciaContext.Provider>
    )

}

export default AsistenciaState