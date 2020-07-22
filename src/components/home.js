import React, {useState} from 'react'
import { navigate } from '@reach/router'
import './home.css'

const Home = () => {

    const [user, setUser] = useState({
        username: ' ',
        password: ' '
    })
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setError(false)
        const value = e.target.value 
        if(!value){
            setError(true)
            return
        }
        setUser({
            ...user,
            [e.target.name]: value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        if(!error){
            navigate('/dashboard')
        }
    }

    return(
        <div className="container">
            <div className="home" >
                <input placeholder="Username" onChange={handleChange} name="username" className="home-input" /><br/>
                <input placeholder="Password" onChange={handleChange} name="password" className="home-input" /><br/>
                <button onClick={handleLogin} className="btn">Login</button>
                {error && <p>Please enter the values!</p>}
            </div>
        </div>
    )

}

export default Home