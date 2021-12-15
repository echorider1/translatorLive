import { orderClearHistory } from "../../api/order"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../store/UserContext"
import { storageSave } from "../../utils/storage"
import './Action.css'



const ProfileActions = ({ logout }) => {

    const { user, setUser } = useUser()

    const handleClearHistoryClick = async () => {
        if ( !window.confirm('Are you sure?\n This can not be undone!') ) {
            return
        }

        const [ clearError ] = await orderClearHistory(user.id)

        if (clearError !== null ) {
            return
        }

        const updatedUser = {
            ...user,
            orders: []
        }

        storageSave( STORAGE_KEY_USER, updatedUser )

        setUser( updatedUser )
    }

    return (
        <button onClick={ handleClearHistoryClick } id="clearButton" className="history">Clear history</button>
    )

    
}

export default ProfileActions