import { useNavigate } from 'react-router-dom'
import './Login.css'
import Navbar from '../NavBar/NavBar'
import { useState } from 'react'

const Login = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState("")

    const handleLoginFormSubmit = (event) => {
        event.preventDefault()
        if (name === 'ADMIN' && password === 'Yatrik123@') {
            navigate('/users')
        } else {
            alert('Entered Wrong Credentials')
        }

    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    return (
        <>
            <Navbar />
            <div className='main-loginDiv'>
                <div class="login-box">
                    <h2>Login Page </h2>
                    <form className='form-login' onSubmit={handleLoginFormSubmit}>
                        <div class="user-box">
                            <input type="text" required placeholder='Enter username' value={name} onChange={handleNameChange} className='inputDiv' />
                        </div>
                        <div class="password-box">
                            <input type="password" required placeholder='Enter Password' value={password} onChange={handlePasswordChange} className='inputDiv' />
                        </div>
                        <div className='divButtonLogin'>
                            <button className='button-login'>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;