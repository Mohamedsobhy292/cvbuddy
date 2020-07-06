import React, { useReducer } from 'react'

const initialDetails = {
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
            city: 'Cairo',
            startDate: 'Aug 2019',
            endDate: 'May 2020',
            currentlyWorkHere: false,
            description:
                'worked on the marketing team for achieving business needs by implementing new features using React + Redux',
        },
        {
            title: 'Front end developer',
            company: 'Wuzzuf',
            city: 'Cairo',
            startDate: 'Aug 2019',
            endDate: 'May 2020',
            currentlyWorkHere: false,
            description:
                'worked on the marketing team for achieving business needs by implementing new features using React + Redux',
        },
        {
            title: 'Front end developer',
            company: 'Amazon',
            city: 'Cairo',
            startDate: 'Aug 2019',
            endDate: 'May 2020',
            currentlyWorkHere: false,
            description:
                'worked on the marketing team for achieving business needs by implementing new features using React + Redux',
        },
    ],
    skills: [
        {
            name: 'React',
            level: 'beginner',
        },
        {
            name: 'Angular',
            level: 'beginner',
        },
        {
            name: 'c++',
            level: 'beginner',
        },
        {
            name: 'Java',
            level: 'beginner',
        },
    ],
    links: [
        {
            label: 'website',
            link: 'https://www.linkedin.com/in/mohamedsobhy292/',
        },
        {
            label: 'linkedin',
            link: 'https://www.linkedin.com/in/mohamedsobhy292/',
        },
        {
            label: 'facebook',
            link: 'https://www.linkedin.com/in/mohamedsobhy292/',
        },
    ],
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

    if (action.type === 'UPDATE_EXPERIENCE_FIELD') {
        const experienceObject = [...state.userData.experience]
        const idx = action.payload.index
        experienceObject[idx] = action.payload.experience

        return {
            ...state,
            userData: {
                ...state.userData,
                experience: experienceObject,
            },
        }
    }

    if (action.type === 'UPDATE_SKILLS_FIELD') {
        const skillsObj = [...state.userData.skills]
        const idx = action.payload.index
        skillsObj[idx] = action.payload.skills

        return {
            ...state,
            userData: {
                ...state.userData,
                skills: skillsObj,
            },
        }
    }

    if (action.type === 'UPDATE_LINKS_ITEM') {
        const linksObj = [...state.userData.links]
        const idx = action.payload.index
        linksObj[idx] = action.payload.skills

        return {
            ...state,
            userData: {
                ...state.userData,
                links: linksObj,
            },
        }
    }

    if (action.type === 'REMOVE_SKILL_ITEM') {
        const skillObj = [...state.userData.skills]
        const idx = action.payload.index
        skillObj.splice(idx, 1)

        return {
            ...state,
            userData: {
                ...state.userData,
                skills: skillObj,
            },
        }
    }

    if (action.type === 'REMOVE_LINKS_ITEM') {
        const linksObj = [...state.userData.links]
        const idx = action.payload.index
        linksObj.splice(idx, 1)

        return {
            ...state,
            userData: {
                ...state.userData,
                links: linksObj,
            },
        }
    }

    if (action.type === 'REMOVE_EXPERIENCE_ITEM') {
        const experienceObject = [...state.userData.experience]
        const idx = action.payload.index
        experienceObject.splice(idx, 1)

        return {
            ...state,
            userData: {
                ...state.userData,
                experience: experienceObject,
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
        userData: { ...initialDetails },
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
