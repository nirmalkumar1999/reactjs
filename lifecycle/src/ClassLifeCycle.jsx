import React, { Component } from 'react'

class ClassLifeCycle extends Component {
    constructor() {
        super()
        this.name = "Nirmal"
        this.state = {
            count: 0,
            color: "red"
        }
    }
    static getDerivedStateFromProps(props, state) {
        //this is the second method of mounting phase which used to modify the state object
        //according to props value
        //first method of updating which overwites the changed state value with props value
        console.log(props, state);
        console.log("getDerivedStateFromProps method");
        return { color: props.color }
    }
    componentDidMount() {
        //this method exicutes only for once after the initial render
        //last method of mounting phase
        //it used for sideeffects after component mounting
        console.log("componentDidMount method");
    }
    shouldComponentUpdate() {
        //this is the second method of updating phase which defines the component will re-render or not
        // it returns boolean
        console.log("shouldComponentUpdate method");
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        //used to catch previous state and props value
        console.log(prevProps, prevState);
        console.log("getSnapshotBeforeUpdate method");
        return { count: prevState.count }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //the last method of updating phase
        //it recives the previous state and props and snapshot value from getsnapshotBeforeUpdate method 
        //it used to work with the sideEffect after re-renders
        console.log("componentDidUpdate method");
        console.log(snapshot);
    }
    componentWillUnmount() {
        // this is a method of unmounting phase
        // it exicutes when the component is going to remove from the dom
        // alert("component removed")
        console.log("component is removed");
    }
    render() {
        console.log("render method");
        return (
            <>
                <h1>Class Based Component Lifecycle Methods</h1>
                <h2>{this.name}</h2>
                <h1 style={{
                    height: "200px",
                    backgroundColor: this.state.color
                }}>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Inc</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>Dec</button>
                <button onClick={() => this.setState({ color: "blue" })}>color change</button>
                <h1>{this.props.color}</h1>
            </>
        )
    }
}

export default ClassLifeCycle