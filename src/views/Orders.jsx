import { useState } from "react"
import { orderAdd } from "../api/order"
import OrdersForm from "../components/Orders/OrdersForm"
import TranslationImages from "../components/TranslationImages"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import withAuth from "../hoc/withAuth"
import { useUser } from "../store/UserContext"
import { storageSave } from "../utils/storage"
import './Orders.css'


const Orders = () => {

    const [ translation, setTranslation ] = useState('')
    const { user, setUser } = useUser()

    const handleOrderClicked = async (currentTranslation) => {
        console.log(currentTranslation)
        if (!currentTranslation) {
            alert ('Please form a word or sentence')
            return
        }

        const [ error, updatedUser ] = await orderAdd(user, currentTranslation)
        if (error !== null ) {
            return
        }

        setTranslation(currentTranslation)
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)

        console.log('Error', error);
        console.log('result', updatedUser);
    }

    

    return (
        <>
            <h1>Sign Alphabet</h1>

            <section id="order-notes">
                <OrdersForm onOrder={ handleOrderClicked } />
            </section>
            <h4 id="result">Result: </h4>
            { translation && <TranslationImages translateText={ translation }/> }
        </>
    )
}

export default withAuth(Orders)