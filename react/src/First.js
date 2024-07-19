    import { useState } from "react";



    // let msg="wlcome to class"
    // return(
    //     <div>
    //         <h4 style={{backgroundColor:"red",color:"blue"}}>it is our first component</h4>
    //         <h1 style={{color:"green"}}>{msg}</h1>
    //     </div>
    // )


    // function print(){
    //     console.log("clicked");
    // }
    // return(
    //     <div>
    //         <button onClick={print}>click</button>
    //     </div>
    // )


    // let age=+prompt('enter your age')
    // if(age>18){
    //     return(
    //         <h1 style={{backgroundColor:"grey",color:"green"}}>you are eligible</h1>
    //     )
    // }
    // else{
    //     return(
    //         <h1 style={{backgroundColor:"black",color:"white"}}>you are not eligible</h1>
    //     )
    // }

    // for(let i=0;i>=10;i++){
    //     if(i%2===0){
    //         return <h1>{i}</h1>
    //     }
    // }

    // let fruits=["apple","banana","mango","kiwi","sapoto"]
    //     let displayFruits=[]
    //     for(let fruit of fruits){
    //         displayFruits.push(<h1>{fruit}</h1>)
    //     }
    //     return(
    //         <div>
    //         {displayFruits}
    //         {
    //             fruits.map((ele)=>{
    //                 return <h2>{ele}</h2>
    //             })
    //         }
    //         </div>
    //     )


    // let student = {name:"virat", age:27, add:"delhi"}
    // let displayStudent=[]
    // for(let key in student){
    //     displayStudent.push(<li>{student[key]}</li>)
    // }
    // return(
    //     <div>
    //         <h1>{student.name}</h1>
    //         <h1>{student.age}</h1>
    //         <h1>{student.add}</h1>
    //         <h2>{displayStudent}</h2>
    //         {
    //             Object.keys(student).map(ele=>{
    //                 return(
    //                     <h3>{ele}-{student[ele]}</h3>
    //                 )
    //             })
    //         }

    //     </div>
    // )


    // return(
    //     <div>
    //         <img src="https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    //          alt="nature" height={300} width={500}></img>
             
    //          <img src={image} alt="" height={300} width={500}/>
    //     </div>
    // )


        // let data=[
            
        //         {name:'nirmal',age:25,occ:'developer',add:'AP'},
        //         {name:'pranjal',age:30,occ:'developer',add:'MH'},
        //         {name:'jyothi',age:22,occ:'developer',add:'OD'}
        //          ]
        // return(
        //     <div>
                
        //     </div>
        // )


        // const First=(props)=>{
        //     console.log(props);
        //     function clickhandel(){
        //         props.getdata("hi i am from child")
        //     }
            // let msg='it is a functional companent'
            // console.log(props);
            // return(
            //     <div>
            //         <button onClick={clickhandel}>send data</button>
            //         <h1>{msg}</h1>
            //         <h2>{props.message}</h2>
            //         <h3>{props.Children[0]}</h3>
            //         <h3>{props.Children[1]}</h3>
            //         <h3>{props.Children[2]}</h3>

            //         <h3>{props.trainer.name}</h3>
            //         <h3>{props.trainer.id}</h3>
            //         <h3>{props.trainer.gender}</h3>

            //     </div>

            // )
        // }


        const First = () => {
            let[count,setcount]=useState(10)
            let[color,setcolor]=useState("red")
            const increment = () => {
                setcount(count+5)
                console.log(count);
            }
            const decrement = () => {
                setcount(count-5)
                console.log(count);
                
            }
            const changecolor = () => {
                setcolor("green")
            }
        
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <div style={{
                    height:"300px",
                    width:"300px",
                    backgroundColor:color
                }}>
                    <button onClick={changecolor}>change</button>
                </div>
            </div>
        )
        }








export default First;