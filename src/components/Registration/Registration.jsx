import { useState } from 'react';
import './Registration.css'
import Navbar from '../NavBar/NavBar';
const Registration = () => {
    const [text, setText] = useState('')
    const [contact, setContact] = useState(0)
    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const handleNameChange = (event) => {
        setText(event.target.value)
    }
    const handleUserNameChange = (event) => {
        setUsername(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlContactChange = (event) => {
        const value = parseInt(event.target.value) || 0
        setContact(value)
    }

    const handleRegisterSubmit = (event) => {
        console.log('Registered')
        event.preventDefault()
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: Math.floor(Math.random() * 53),
                text,
                contact,
                userName,
                email
            })
        }).then((response) => response.json())
            .then((data) => console.log(data))
            setContact(0)
            setText('')
            setEmail('')
            setUsername('')

    }

    return (
        <>
            <Navbar />
            <div className='registrationDiv'>

                <div className="container">
                    <div className="title">Registration</div>
                    <div className="content">
                        <form onSubmit={handleRegisterSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" placeholder="Enter your name" required onChange={handleNameChange} value={text} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input type="text" placeholder="Enter your username" required onChange={handleUserNameChange} value={userName} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="text" placeholder="Enter your email" required onChange={handleEmailChange} value={email} />
                                </div>

                                <div className="input-box">
                                    <span className="details">Contact Details</span>
                                    <input type="number" placeholder="Enter Contact" required value={contact || ''} onChange={handlContactChange} />
                                </div>
                            </div>
                            <div className="buttonRegister">
                                <button>
                                    Register
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration;