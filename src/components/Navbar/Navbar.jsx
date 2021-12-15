import { NavLink } from "react-router-dom"
import { useUser } from "../../store/UserContext"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { storageDelete } from "../../utils/storage"
import './Navbar.css'





const Navbar = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you certain?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
        <nav className="navbar">
            <ul>
                <li id="tag">The Amazing Translator</li>
            </ul>


            { user !== null &&
                <>
                <ul>
                <li className="nav1">
                    <NavLink to="/orders">Translator</NavLink>
                </li>
                <li className="nav1">
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                </ul>
                <button id="logOut" onClick={ handleLogoutClick }>Log out</button>
                </>
            }
        </nav>
    )
}


export default Navbar

