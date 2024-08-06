// using pros

// import React from 'react'
// import Users from './Users'

// const Container = ({ theme }) => {
//     return (
//         <div>
//             <h1>Container</h1>
//             <Users theme={theme} />
//         </div>
//     )
// }

// export default Container

// using context

import React from 'react'
import Users from './Users'

const Container = () => {
    return (
        <div>
            <h1>Container</h1>
            <Users />
        </div>
    )
}

export default Container