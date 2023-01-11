import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"


const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const { loading, error, dispatch} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleChange =(e) => {
        setCredentials((prev)=>({...prev, [e.target.id]:e.target.value}))
    }
    const handleClick = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("http://localhost:8800/auth/login", credentials)
            if (res.data.isAdmin) {
                console.log(res)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.details})
            
            
         navigate("/")
            } else {
              dispatch({type:"LOGIN_FAILURE", payload:{message:"You are not admin. you are not allowed"}})

            }
        } catch(err) {
            dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
        }

    }
  return (
    <div className='login'>
        <div className='loginContainer'>
            <input type="text" placeholder='Username' id="username" onChange={handleChange} className="loginInput"/>
            <input type="password" placeholder='Password' id="password" onChange={handleChange} className="loginInput"/>
            <button disabled={loading} onClick={handleClick} className='loginButton'> Login</button>
            {error && <span>{error.message}</span>}
        </div>

    </div>
  )
}

export default Login