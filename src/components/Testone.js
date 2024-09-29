import React,{useState,useEffect} from "react";
import axios from 'axios'
function Testone()
{
    const [samp,sample]=useState([]);
    const [neww,end]=useState(1);
    
   
    useEffect(()=>{axios.get(`https://jsonplaceholder.typicode.com/posts/${neww}`)

.then(obj=>{console.log(obj)
sample(obj.data)})
.catch(err=>{console.log(err)})
}
)
    return(
            <div>
                <input type={"text"} value={neww} onChange={e=>end(e.target.value)}></input>
                <div>{samp.title}</div>
                
            </div>
    )
}

export default Testone