import {createContext,useContext,useState} from 'react'

const Context=createContext()

function ContextAPI({children}) {
    const[count,setCount]=useState(0)
  return (
    <>
        <Context.Provider value={{count,setCount}}>
            {children}
        </Context.Provider>
    </>
  )
}
export function useCount(){
    return useContext(Context)
}

export default ContextAPI