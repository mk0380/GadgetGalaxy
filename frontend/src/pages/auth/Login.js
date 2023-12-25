import React, { useState } from 'react'
import styles from './auth.module.scss'
import loginImg from '../../assets/login.png'
import Card from '../../components/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const config = {
        headers: {
          "Content-type": "application/json"
        }
      }

    const loginUser =async (e)=>{
        e.preventDefault()

        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL+'/api/users' + '/login', { email,password }, config)

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
            <div className={styles.img}>
                <img src={loginImg} alt="login" width='400' />
            </div>
            <Card>
                <div className={styles.form}>
                    <h2>Login</h2>
                    <form onSubmit={loginUser}>
                        <input type="text" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
                    </form>
                    <span className={styles.register}>
                        <p>Don't have an account ? </p>
                        <Link to='/register'>Register</Link>
                    </span>
                </div>
            </Card>
        </section>
    )
}

export default Login
