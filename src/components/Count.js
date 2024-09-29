import React, { useState } from 'react';
export const Count=()=>{
    const [count,setcount]=useState(0);
    return(
        <>
             <div>
                <center>
                <h1>{count}</h1>
                <button onClick={()=>setcount(count +5)}>increment 5</button>
                <button onClick={()=>setcount(count -5)}>decrement 5</button>
                <button onClick={()=>setcount(0)}>reset</button>
                </center>
              
             </div>
        </>
    )
}