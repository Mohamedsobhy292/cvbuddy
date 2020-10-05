import React, { useReducer } from 'react'

const AppContext = React.createContext()

const reducer = (state, action) => {
    if (action.type === 'UPDATE_USER_FIELD') {
        return {
            ...state,
            userData: {
                ...state.userData,
                [action.payload.name]: action.payload.value,
            },
        }
    }

    if (action.type === 'RESET_USER_INFO') {
        return {
            ...state,
            userData: {
                ...action.payload,
            },
        }
    }

    if (action.type === 'UPDATE_USER_INFO') {
        return {
            ...state,
            userData: {
                ...state.userData,
                ...action.payload,
            },
        }
    }
}

const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        userData: {},
    })

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppStateProvider, AppContext }
