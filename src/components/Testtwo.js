import React,{useState,useEffect,useRef} from "react";

function Testtwo()
{
    const [count,setcount]=useState(0);
    const intarvel=useRef();
    useEffect(()=>{
        intarvel.current=setInterval(()=>{
            setcount(time=>time+1)
        },100)
        return()=>{
            clearInterval(intarvel.current)
        }
    })

    return(
        <>
        <center>
        <h1>{count}</h1>
        
        <button  onClick={()=>clearInterval(intarvel.current)}>stop</button>
        </center>
        </>
    )
}

export default Testtwo;