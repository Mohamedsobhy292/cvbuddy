import React from 'react'

const ThreeDots = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 426.667 426.667"
            {...props}
        >
            <circle cx="42.667" cy="213.333" r="42.667" />
            <circle cx="213.333" cy="213.333" r="42.667" />
            <circle cx="384" cy="213.333" r="42.667" />
        </svg>
    )
}

export { ThreeDots }
