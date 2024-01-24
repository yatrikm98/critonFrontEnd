import './EditUser.css'
import { useState } from 'react'
const EditUser = ({ user, onClose }) => {
    const [text, setText] = useState(user.text)
    const [contact, setContact] = useState(user.contact)
    const [userName, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
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
        fetch('http://localhost:3000/updateuser', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: user.id,
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
        <div>
            <div className="outerModal" onClick={() => {
                onClose()
            }}></div>
            <div className='innerModalMainDiv'>
                <div className="innerModal">
                    <div>
                        <form onSubmit={handleRegisterSubmit}>
                            <div className='upperPartEditDiv'>
                                <div className='editBlock'>
                                    <label>Name</label>
                                    <input value={text} placeholder='Enter Name' onChange={handleNameChange} />
                                </div>
                                <div className='editBlock'>
                                    <label>Contact</label>
                                    <input value={contact} placeholder='Enter Name' onChange={handlContactChange} />
                                </div>

                            </div>
                            <div className='lowerPartEditDiv'>
                                <div className='editBlock'>
                                    <label>Username</label>
                                    <input value={userName} placeholder='Enter Name' onChange={handleUserNameChange} />
                                </div>
                                <div className='editBlock'>
                                    <label>Email</label>
                                    <input value={email} placeholder='Enter Name' onChange={handleEmailChange} />
                                </div>
                            </div>
                            <div className='updateButtonDiv'>
                                <button className='updateButton'>Update</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditUser