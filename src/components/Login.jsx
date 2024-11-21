import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'

const Login = () => {
    const { setUser } = useContext(userContext)
    const [userCredentials, setUserCredentials] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(userCredentials)
        console.log(userCredentials)
    }
    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>

                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' placeholder="name@example.com" onChange={handleChange} value={userCredentials.email} />
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name='password' onChange={handleChange} value={userCredentials.password} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login