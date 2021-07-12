import React, {useEffect, useState} from 'react'
import axios from "axios"
import './UserList.css'
import prfimg from './user.png'


function UserList() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get ('https://jsonplaceholder.typicode.com/users')
        .then (idnt => {
            console.log (idnt)
            setUsers (idnt.data)
        })

        .catch (error => {
            console.log(error)
        })
    })
    
    return (
        <div>
            {users.map((user,i)=>(
                <div key={i} className="user">
                    <img className="pic" src = {prfimg} style={{width:"50px", height:"50px"}} alt ="pic"></img>
                    <div className="user-name"> Name : {user.name} </div> 
                    <div className="user-username"> UserName : {user.username} </div>
                    <div className="user-email"> E-mail : {user.email} </div>
                </div>
                ))}
            
        </div>
    )
}

export default UserList