import React from 'react';
// import First from './First.js';
// import Navbar from './Navbar.jsx';
// import Function from './Function.jsx';
// import Class from './Class.jsx'
import Useref from './Useref.jsx';
import Createref from './Createref.jsx';
function App() {
  // let age=20
  // let user={
  //   name:"utsav",
  //   gender:"male",
  //   id:101,
  // }
  // return (
  //   <div>
  //     <h2> this is app component</h2>
  //     <First message={"it is a props"} >
  //       hi it is a children props
  //       {100+200}
  //       {user.name}
  //     </First>

  //     <Navbar name={"niraml"} age={age}/>
  //     <Navbar name={"pranjal"} age={30} add={""}/>
  //   </div>
  // );

  // const getdata=(str)=>{
  //   console.log(str);
  // }
    return(
      <div>
        {/* <First getdata={getdata}/> */}
        {/* <Navbar getdata={getdata}/> */}
        {/*<Function></Function> */}
        {/*<Class></Class>*/}
        <Useref></Useref>
        <Createref></Createref>
      </div>
    )
}

export default App
