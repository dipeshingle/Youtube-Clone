import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/auth.action'
import { useNavigate } from 'react-router-dom';



import "./_loginscreen.scss"

const Loginscreen = () => {
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {

        dispatch(login())

    }

    const navigate = useNavigate();



    useEffect(() => {

        if (accessToken) {
            navigate('/');
        }

    }, [accessToken, navigate])
    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="youtubelogo" />
                <button onClick={handleLogin}>Login WIth Google</button>
                <p>This is a project made using youtube API</p>
            </div>
        </div>
    )
}

export default Loginscreen
