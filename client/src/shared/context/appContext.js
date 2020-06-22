import React, { useReducer } from 'react'

const details = {
    firstName: 'Mohamed',
    lastName: 'sobhy',
    email: 'mohamedsobhy292@gmail.com',
    phone: '01092525921',
    jobTitle: 'front end developer',
    summary:
        'Do you think youre living an ordinary life? You are so mistaken its difficult to even explain. The mere fact that you exist makes you extraordinary. The odds of you existing are less than winning the lottery, but here you are. Are you going to let this extraordinary opportunity pass?',
    experience: [
        {
            title: 'Front end developer',
            company: 'Auto1',
            startDate: 'Aug 2019',
            endDate: 'May 2020',
            description:
                'worked on the marketing team for achieving business needs by implementing new features using React + Redux',
        },
        {
            title: 'Front end developer',
            company: 'Wuzzuf',
            startDate: 'Aug 2019',
            endDate: 'May 2020',
            description:
                'worked on the marketing team for achieving business needs by implementing new features using React + Redux',
        },
        {
            title: 'Front end developer',
            company: 'Amazon',
            startDate: 'Aug 2019',
            endDate: 'May 2020',
            description:
                'worked on the marketing team for achieving business needs by implementing new features using React + Redux',
        },
    ],
}

const AppContext = React.createContext({
    userData: {},
})

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

    if (action.type === 'UPDATE_USER_EXPERIENCE') {
        const experienceObj = [...state.userData.experience]
        experienceObj[0] = action.payload.value
        console.log(experienceObj)
        return {
            ...state,
            userData: {
                ...state.userData,
                experience: experienceObj,
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
}

const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        userData: {
            ...details,
        },
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
