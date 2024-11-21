import React, { useContext } from 'react'
import userContext from '../context/userContext'

const Profile = () => {
    const {user} = useContext(userContext)
    return (
        <>
            {user !== null ? user.email : "Please login first"}
        </>
    )
}

export default Profile