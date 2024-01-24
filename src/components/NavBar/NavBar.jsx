import {  NavLink } from "react-router-dom"
import './NavBar.css'


const Navbar = () => {
    return (
        <div className="navBar-main-div">
            <ul className="navBar-middleDIv">
                <li className="li" >
                    <NavLink to='/' className='navLink'>Registration</NavLink>
                </li>
                <li className="li">
                    <NavLink to='/login' className='navLink'>Login</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar