import React from 'react'
import Child2 from './Child2'
import { useCount } from '../Context/Context'
// import CountContext from '../Context/CountContext'

function Child() {
// const data = useContext(CountContext)
// const{count,setCount}=useContext(CountContext)
const{count,setCount}=useCount()
  return (
    <>
    {/* <h1>CHILD Component</h1>
    <h2>{data}</h2> */}
    <h1 style={{background:"red",display:"inline-block"}}>child component</h1>
    <h1>{count}</h1> 
    <button onClick={()=>setCount(count+1)}>inc</button>
    <button onClick={()=>setCount(count-1)}>dec</button>

    <br />
    {/* <Child2 /> */}
    </>

)
}

export default Child