import React from 'react'
// import { useContext } from 'react'
// import CountContext from '../Context/CountContext'
import { useCount } from '../Context/Context'

function Child3() {
  // const data = useContext(CountContext)
  const {count,setCount}=useCount()
  return (
<>
{/* <h1>Child 3 Component</h1>
<h1>{data}</h1> */}
<h1 style={{background:"black",color:"white",display:"inline-block"}}>child 3 component</h1>
<h1>{count}</h1>
</> 
 )
}

export default Child3