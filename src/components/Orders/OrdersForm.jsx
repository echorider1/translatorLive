import { useForm } from "react-hook-form"
import './OrdersForm.css'

const OrdersForm = ({onOrder}) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = ({ orderNotes }) => { onOrder(orderNotes) }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="order-notes" id="searchTag">Search:</label>
                <input type="text"  { ...register('orderNotes') } placeholder="Type something!" />
            </fieldset>

            <button id="submitButton" type="submit">Submit</button>
        </form>
    )
}

export default OrdersForm