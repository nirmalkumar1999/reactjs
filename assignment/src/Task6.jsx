import React,{useState} from 'react'

function Task6() {
    const [flag,setflag] = useState(true)
    function colorhandler(){
      setflag(!flag)
    }
      return (
      <>
        <div style={{
          height:"200px",width:"500px",
          textAlign:"center",alignContent:"center",
          border:"2px solid black",backgroundColor:flag ?  "blue" : "red"
        }}>
          <button onClick={colorhandler}>{flag ? "red" : "blue"}</button>
        </div>
      </>
    )
}

export default Task6