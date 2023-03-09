import {useState,useRef} from "react";
import axios from "axios";
const Post=()=>{
    const box1=useRef("");
    const box2=useRef("");
    const [res,setRes]=useState({});
    const func=()=>{
        axios.post(`https://reqres.in/api/register`,{"email":box1.current.value,
    "password":box2.current.value})
    .then((posRes)=>{
        const {data}=posRes;
        setRes(data);
    },(errRes)=>{
        console.log(errRes);
    })
    }
    return(
        <>
        <div className="container mt-5"
>
       Email: <input type={"text"} ref={box1}></input>
        <br></br><br></br>
       Password: <input type={"password"} ref={box2}></input>
            <br></br><br></br>
        <button onClick={func}>send</button>
        {
            Object.keys(res).length==0?(<div></div>):(<div>{JSON.stringify(res)}</div>)
        }
        </div>
        </>
        
    )
}
export default Post;