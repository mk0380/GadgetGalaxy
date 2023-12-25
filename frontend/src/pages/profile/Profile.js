import React, { useEffect, useState } from 'react'
import './Profile.scss'
import axios from 'axios'
import Card from '../../components/card/Card'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = () => {

    const navigate = useNavigate()

    const initialState = {
        name: "",
        email: "",
        address: "",
        state: "",
        country: "",
        phone: ""
    }

    const [profile, setProfile] = useState(initialState)
    const [edit, setEdit] = useState(false)

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const fetchData = async () => {
        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/users' + '/getUser', { id: localStorage.getItem('userId') }, config)
        setProfile(data.data)
    }

    const saveProfile = async (ev) => {
        ev.preventDefault();
        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/users' + '/updateUser', {
            id: localStorage.getItem('userId'), name: profile.name, phone: profile.phone,
            address: profile.address,
            state: profile.state,
            country: profile.country
        }, config)

        if (data.success) {
            toast.success(data.message)
            navigate(0)
        } else {
            toast.error(data.message)
        }

    }

    const handleChange = (ev) => {
        setProfile({
            ...profile, [ev.target.name]: ev.target.value
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <section >
                <div className='container'>
                    <h2>Profile</h2>
                    <div className='--flex-start profile'>
                        <Card cardClass={'card'}>
                            
                            <form onSubmit={saveProfile}>
                                <p>
                                    <label htmlFor="">Name:</label>
                                    <input type="text" name='name' value={profile.name} onChange={handleChange} disabled={!edit} />
                                </p>
                                <p>
                                    <label htmlFor="">Email:</label>
                                    <input type="text" name='email' value={profile.email} disabled />
                                </p>
                                <p>
                                    <label htmlFor="">Mobile:</label>
                                    <input type="text" name='phone' value={profile.phone} onChange={handleChange} disabled={!edit} />
                                </p>
                                <p>
                                    <label htmlFor="">Address:</label>
                                    <input type="text" name='address' value={profile.address} onChange={handleChange} disabled={!edit} />
                                </p>
                                <p>
                                    <label htmlFor="">State:</label>
                                    <input type="text" name='state' value={profile.state} onChange={handleChange} disabled={!edit} />
                                </p>
                                <p>
                                    <label htmlFor="">Country:</label>
                                    <input type="text" name='country' value={profile.country} onChange={handleChange} disabled={!edit} />
                                </p>
                                {!edit && <button className='--btn --btn-primary --btn-block' onClick={() => setEdit(true)}>Edit Profile</button>}
                                {edit && <button type='submit' className='--btn --btn-primary --btn-block'>Update Profile</button>}
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
