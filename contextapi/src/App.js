import React,{useState} from "react";
// import CountContext from "./Context/CountContext";
import ContextAPI from "./Context/Context";
import Child from "./Component/Child";


function App(){
// let count = 100;
// const[count,setCount]=useState(0)
  return(
    <>
  {/* <CountContext.Provider value={count}>
    <Child />
  </CountContext.Provider> */}

    {/* <CountContext.Provider value={{count,setCount}}> */}
      {/* <Child/> */}
    {/* </CountContext.Provider> */}

    <ContextAPI>
      <Child></Child>
    </ContextAPI>
    </>
  )
}

export default App