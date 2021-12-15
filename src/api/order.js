import { createHeaders } from "."
import { apiUrl } from "./user"

export const orderAdd = async ( user, order ) => {
    try {
        const response = await fetch(`${ apiUrl }/${ user.id }`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                username: user.username,
                orders: [ ...user.orders, order ]
            })
        })

        if ( !response.ok ) {
            throw new Error ('Could not update the request')
        }

        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}

export const orderClearHistory = async ( userId ) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                orders: []
            })
        })

        if ( !response.ok ) {
            throw new Error('Could not update orders')
        }

        const result = await response.json()

        return [ null, result ]

    } catch (error) {
        return [ error.message, null ]
    }
}