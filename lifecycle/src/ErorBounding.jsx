
import React, { Component } from 'react'

class ErorBounding extends Component {
    constructor(){
        super()
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(){
        // used to set the state value if any Error occured in app
        console.log("getDerivedStateFromError method");
        return{hasError: true}
    }
    componentDidCatch(err,info){
        //used to catch the error and the information of the error
        console.log("componentDidCatch method");
        return(err,info)
    }
  render() {
    return (
     <>
     {this.state.hasError?
     <h1>some error in components</h1>:
     <div>{this.props.children}</div>
    }
     </>  
    )
  }
}

export default ErorBounding