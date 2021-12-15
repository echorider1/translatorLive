import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { useState, useEffect } from 'react'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../store/UserContext'
import { STORAGE_KEY_USER } from '../../const/storageKeys'
import './Login.css'

const usernameConfig = {
    required: true,
    minLength: 3,
    maxLength: 10
}



const LoginForm = () => {

    const {
        register, 
        handleSubmit,
        formState: { errors }

    } = useForm();

    const { user, setUser} = useUser()

    const navigate = useNavigate()

    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(null)

    useEffect(() => {
        if (user !== null) {
            navigate('orders')
        }

        console.log('User has changed!', user)
    }, [ user, navigate ])

    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [error, userResponse] = await loginUser(username)
        if (error) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave( STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    };

    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }
        if (errors.username.type === 'required') {
            return <span> A valid username is required</span>
        }
        if (errors.username.type === 'minLength') {
            return <span>The username is too short!</span>
        }
        if (errors.username.type === 'maxLength') {
            return <span>The username is too long!</span>
        }
    })()

    return (
        <>
            <h2>What is your name?</h2>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset id="field">
                    <label htmlFor="username" id="label">Username:</label>
                    <input id="input"
                        type="text" 
                        placeholder="John Doe"
                        { ...register("username", usernameConfig) } />
                        { errorMessage }
                </fieldset>

                <button type="submit" disabled = {loading} id="loginButton">Continue</button>

            { loading && <p id="loading">Logging in...</p> }
            { apiError && <p>{ apiError }</p> }

            </form>
        </>
    )
}

export default LoginForm;