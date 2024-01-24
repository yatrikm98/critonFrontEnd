import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { NavLink } from "react-router-dom"
import './Users.css'
import EditUser from "../EditPage/EditUser";
const Users = () => {
    const [screenWidth, setScreenWidth] = useState(window.outerWidth)
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([])
    const [editUser, setEditUser] = useState()
    const getData = () => {
        fetch('http://localhost:3000')
            .then((response) => response.json())
            .then((allData) => setData(allData))
    }
    useEffect(() => {
        getData()
        const screenWidth = () => {
            setScreenWidth(window.outerWidth)
        }
        window.addEventListener('resize', screenWidth)
        return () => {
            window.removeEventListener('resize', screenWidth)
        }
    }, [])

    console.log(data)
    const handleDeleteUser = (userId) => {
        fetch(`http://localhost:3000/users/${userId}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',

            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })

    }

    const handleOpenModal = (user) => {
        console.log(user)
        setModal(true)
        setEditUser(user)
    }

    const handleModalClose = () => {
        setModal(false)
    }
    const renderedData = data.map((user) => {
        return (screenWidth > 768 ? <tr className="fullRow" key={user.id}>
            <th className="userText">{user.text}</th>
            <th className="userContact">{user.contact}</th>
            <th>{user.email}</th>
            <th className="action">
                <MdEdit fontSize={20} className="onEdit" onClick={() => {
                    handleOpenModal(user)
                }} />
                <FaTrash className="onTrash" onClick={() => {
                    handleDeleteUser(user.id)
                }} /></th>
        </tr>
            :
            <div key={user.id} className="row-media">
                <div className="commonDiv name-media">
                    <div>Name</div>
                    <div>{user.text}</div>
                </div>
                <div className="commonDiv contact-media">
                    <div>Contact</div>
                    <div>{user.contact}</div>
                </div>
                <div className="commonDiv email-media">
                    <div>Email</div>
                    <div>{user.email}</div>
                </div>
                <div className="commonDiv action-media">
                    <div>Action</div>
                    <div className="internalActionDiv">
                        <div><CiEdit fontSize={20} className="onEdit" /></div>
                        <div><FaTrash className='onTrash' onClick={() => {
                            handleDeleteUser(user.id)
                        }} /></div>
                    </div>
                </div>
            </div>

        )
    })

    return (
        <div>
            <div className="signOutButton">
                <NavLink to='/login' >
                    <button className='button-User'>Sign Out</button>
                </NavLink>
            </div>
            <div className="list">List Of Users :</div>
            <div className="lineDiv">
                <hr className="horizontalLine" />
            </div>
            {screenWidth > 768 ? <table>
                <thead className="thead">
                    <tr className="heading">
                        <td>Name </td>
                        <td>Contact </td>
                        <td>Email </td>
                        <td> Action</td>
                    </tr>
                </thead>
                <div className="lineDiv">
                    <hr className="horizontalLine" />
                </div>
                <tbody className="body">
                    {renderedData}
                </tbody>
            </table>
                :
                <div className="bigTableDiv">{renderedData}</div>}
            {modal && (<EditUser user={editUser} onClose={handleModalClose} />)}
        </div>
    )
}

export default Users;