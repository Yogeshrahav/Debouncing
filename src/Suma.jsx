// import React, { useState } from 'react'

import { useState } from "react"

// const Suma = () => {
    
//     const [ load, setLoad ] = useState('red')

//     const handleChangeColor = () =>{
//         setLoad(prevColor =>( prevColor === 'red' ? 'blue' : 'red'))
//     }
//   return (
//     <div style={{ backgroundColor:load, padding:'50px', textAlign: 'center'}}>
//         <button onClick={handleChangeColor}>
//             Add
//         </button>
//     </div>
//   )
// };

// export default Suma;


const Suma = () => {
    const [ load , setLoad ] = useState('red')
    const handleChangeColor =()=>{
        setLoad(prevColor => (prevColor === "red" ? 'green' : 'red'))
    }
    return(
        <div style={{backgroundColor:load, padding:'50px', textAlign:'center'}}>
            <button onClick={handleChangeColor}>
                Add
            </button>
        </div>
    )
}

export default Suma;