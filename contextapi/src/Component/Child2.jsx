import React from 'react'
// import Child3 from './Child3'
// import CountContext from '../Context/CountContext'
import { useCount } from '../Context/Context'
import Child3 from './Child3'



function Child2() {
  const{count,setCount}=useCount()
  return (
<>
<h1 style={{background:"blue",display:"inline-block"}}>Child 2 Component</h1>
<h1>{count}</h1>
<Child3></Child3>
</>
    
)
}

export default Child2