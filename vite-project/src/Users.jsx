// using pros

// import React from 'react'
// import User from './User'

// const Users = ({ theme }) => {
//     return (
//         <div>
//             <h1>Users</h1>
//             <User theme={theme} />
//         </div>
//     )
// }

// export default Users

// using context 

import React from 'react'
import User from './User'
import { useContext } from 'react'
import { ThemeContext } from './App'

const Users = () => {
    const { theme } = useContext(ThemeContext)
    const UserStyele = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "pink" : "white"
    }
    return (
        <div>
            <h1 style={UserStyele}>Users</h1>
            <User />
        </div>
    )
}

export default Users