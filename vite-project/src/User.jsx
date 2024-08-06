// using pros

// import React from 'react'

// const User = ({ theme }) => {
//     const textStyle = {
//         backgroundColor: theme === "light" ? "white" : "black",
//         color: theme === "light" ? "black" : "white"
//     }
//     return (
//         <div>
//             <h1 style={textStyle}>User</h1>
//         </div>
//     )
// }

// export default User

// using context

import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './App'

const User = () => {
    // useContext is used createContent (ThemeContext)
    const { theme } = useContext(ThemeContext);
    const textStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white"
    }
    return (
        <div>
            <h1 style={textStyle}>User</h1>
        </div>
    )
}

export default User