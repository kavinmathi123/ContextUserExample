// using pros

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Container from './Container'

// function App() {
//   const [theme, setTheme] = useState("light");
//   const toggleTheme = () => {
//     setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
//   }
//   return (
//     <>
//       <div>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//         <h1>App</h1>
//         <Container theme={theme} />
//       </div>
//     </>
//   )
// }

// export default App


// using context 

import { useState } from 'react'
import './App.css'
import Container from './Container'
import { createContext } from 'react';

// creactecontext func to create context
// ThemeContext to cover the application 
// ThemeContext is component that componet provide a provider component
// pass pros
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <h1>App</h1>
        <Container />
      </ThemeContext.Provider>
    </>
  )
}

export default App
