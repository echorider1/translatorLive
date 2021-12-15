import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem"
import './Action.css'

const ProfileOrderHistory = ({ orders = [] }) => {
    const orderList = orders.map(
        (order, index) => <ProfileOrderHistoryItem key={ index + order } order={ order } />)

    return (
        <>
        <p className="history" id="prevSearch">Previous searches:</p>
        <section id="section">
            <ul>
                <li>
                { orderList}
                </li>
            </ul>
        </section>
        </>
    )
}

export default ProfileOrderHistory