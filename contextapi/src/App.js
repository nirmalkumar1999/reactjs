import React,{useState} from "react";
// import CountContext from "./Context/CountContext";
import ContextAPI from "./Context/Context";
import Child from "./Component/Child";
import Child2 from "./Component/Child2";
import Child3 from "./Component/Child3";


function App(){
// let count = 100;
// const[count,setCount]=useState(0)
  return(
    <>
  {/* <CountContext.Provider value={count}>
    <Child />
  </CountContext.Provider>

    <CountContext.Provider value={{count,setCount}}> 
      <Child/>
    </CountContext.Provider> */}

    <ContextAPI>
      <Child></Child>
      <Child2></Child2>
      <Child3></Child3>
    </ContextAPI>
    </>
  )
}

export default App