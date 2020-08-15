import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const initialDetails = {
    firstName: 'Ricky',
    lastName: 'Metzger',
    email: 'oneRandomMail@gmail.com',
    phone: '+1234567989',
    jobTitle: 'Designer',
    residence: 'Washington, DC',
    summary:
        'Do you think youre living an ordinary life? You are so mistaken its difficult to even explain. The mere fact that you exist makes you extraordinary. The odds of you existing are less than winning the lottery, but here you are. Are you going to let this extraordinary opportunity pass?',
    experience: [
        {
            id: uuidv4(),
            title: 'Product Designer',
            company: 'Google',
            city: 'London',
            startDate: 'Aug 2019',
            endDate: '',
            currentlyWorkHere: true,
            isInternship: false,
            description:
                'worked on the marketing team for achieving business needs by implementing new features using React + Redux',
        },
        {
            id: uuidv4(),
            title: 'UI Designer',
            company: 'Apple',
            city: 'New york',
            startDate: 'Aug 2019',
            endDate: 'May 2020',
            currentlyWorkHere: false,
            isInternship: false,
            description:
                "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones",
        },
        {
            id: uuidv4(),
            title: 'UI Designer',
            company: 'Amazon',
            city: 'New york',
            startDate: 'Aug 2012',
            endDate: 'May 2019',
            currentlyWorkHere: false,
            isInternship: true,
            description:
                "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones",
        },
    ],
    skills: [
        {
            id: uuidv4(),
            name: 'Internet',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Software',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Mobile apps',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Social Network',
            level: 'beginner',
        },
    ],
    links: [
        {
            id: uuidv4(),
            label: 'website',
            link: 'https://www.linkedin.com/in/mohamedsobhy292/',
        },
        {
            id: uuidv4(),
            label: 'linkedin',
            link: 'https://www.linkedin.com/in/mohamedsobhy292/',
        },
        {
            id: uuidv4(),
            label: 'facebook',
            link: 'https://www.linkedin.com/in/mohamedsobhy292/',
        },
    ],
    education: [
        {
            id: uuidv4(),
            school: 'Bachelor Degree of Fine Art (BFA)',
            city: 'Cairo',
            degree: 'bachelors',
            startDate: 2019,
            endDate: 2019,
            description:
                "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones",
        },
    ],
    languages: [
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'English',
            level: 'beginner',
        },
        {
            id: uuidv4(),
            name: 'Arabic',
            level: 'intermediate',
        },
    ],
    certificates: [],
    showSkillsLevel: true,
}

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
