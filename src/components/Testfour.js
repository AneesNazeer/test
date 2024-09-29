import axios from 'axios';
import React, { Component }  from 'react';
class Testfour extends Component{
    constructor(){
        super()
        this.state={posts:[]}
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{console.log(Response)
        this.setState({posts:Response.data})

        })
        .catch(err=>{console.log(err)})
    }
    render(){
        const {posts}=this.state
        return(
            <center>
        <table cellPadding="0" cellSpacing="0" border="1">
        <thead>
            <tr>
                <th>userid</th>
                <th>title</th>
                <th>Body</th>
            </tr>
        </thead>
 
        <tbody>
            {this.state.posts.map(posts =>
                <tr>
                    <td>{posts.userId}</td>
                    <td>{posts.title}</td>
                    <td>{posts.body}</td>
                </tr>
            )}
        </tbody>
    </table></center>);
        
    }
}
export default Testfour