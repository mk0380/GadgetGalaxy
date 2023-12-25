import React, { useState } from 'react'
import styles from './auth.module.scss'
import loginImg from '../../assets/register.png'
import Card from '../../components/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        cPassword:""
    })

    const navigate = useNavigate()

    const {name, email, password, cPassword} = formData

    const handleChange = (ev)=>{
        setFormData({
            ...formData,[ev.target.name]:ev.target.value
        })
    }

    const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

    const registerUser = async (e)=>{

        e.preventDefault()
        if(password!==cPassword){
            toast.error("Passwords do not match")
            return
        }
    
        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL+'/api/users' + '/register', { name,email,password }, config)

        if(data.success){
            toast.success(data.message)
            localStorage.setItem('userId',data.data.id)
            navigate('/')
            
        }else{
            toast.error(data.message)
        }
    }

    return (
        <section className={`container ${styles.auth}`}>
            <Card>
                <div className={styles.form}>
                    <h2>Register</h2>
                    <form onSubmit={registerUser}>
                        <input type="text" placeholder='Name' required value={name} name='name' onChange={handleChange} />
                        <input type="text" placeholder='Email' required value={email} name='email' onChange={handleChange} />
                        <input type="password" placeholder='Password' required value={password} name='password' onChange={handleChange} />
                        <input type="password" placeholder='Confirm Password' required value={cPassword} name='cPassword' onChange={handleChange} />
                        <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
                    </form>
                    <span className={styles.register}>
                        <p>Already have an account ? </p>
                        <Link to='/login'>Login</Link>
                    </span>
                </div>
            </Card>
            <div className={styles.img}>
                <img src={loginImg} alt="register" width='400' />
            </div>
        </section>
    )
}

export default Register
