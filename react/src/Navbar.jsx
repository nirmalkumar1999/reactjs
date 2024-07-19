import { Component } from "react";
class Navbar extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            color:"red"
        }
    }
        decrement = () =>{
            this.setState({count:this.state.count-1})
            console.log(this.state.count);
        }
        increment = () =>{
            if(this.state.count<0){
                this.setState({count:this.state.count+1})
            }
        }
        changeColor = () => {
            this.setState({color:"green"})
        }
        render(){
            return(
                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                    <div style={{
                        height: "300px",
                        width: "300px",
                        backgroundColor:this.state.color
                    }}></div>
                    <button onClick={this.changeColor}>change color</button>
                </div>
            )
        }
    // render(){
    //     console.log(this.props);
    //     return(
    //         <div>
    //             <h1>this is class component</h1>
    //             <h2>{this.msg}</h2>
    //             <h3>{this.props.name}</h3>
    //             <h3>{this.props.age}</h3>
    //             <h3>{this.props.add}</h3>
    //         </div>
    //     )
    // }


    // clickhandel=()=>{
    //     this.props.getdata('class component')
    // }
    // render(){
    //     return(
    //         <div>
    //             <button onClick={this.clickhandel}>
    //                 send data
    //             </button>
    //         </div>
    //     )
    // }


}
    // Navbar.defaultProps={
    //     name:"name is not defined",
    //     age:"age is not defined",
    //     add:"add is not defined"

    // }

export default Navbar;