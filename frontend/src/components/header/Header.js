import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'
import { FaTimes } from 'react-icons/fa'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import axios from 'axios'
import { toast } from 'react-toastify'

export const logo = <div className={styles.logo}>
    <Link to='/'>
        <h2>Gadget<span>Galaxy</span></h2>
    </Link>
</div>

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '')

const Header = () => {

    const navigate = useNavigate()


    const [userData, setUserData] = useState({
        name: "",
        email: ""
    })

    const [scrollPage, setScrollPage] = useState(false)

    const fixNavbar = () => {
        if (window.scrollY > 0.000000000001) {
            setScrollPage(true)
        } else {
            setScrollPage(false)
        }
    }

    window.addEventListener('scroll', fixNavbar)

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    const hideMenu = () => {
        setShowMenu(false)
    }

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const fetchData =async () => {
        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL+'/api/users' + '/getUser', { id:localStorage.getItem('userId') }, config)
        setUserData(data.data)
    }

    const logout =()=>{
        localStorage.clear()
        toast.success('Logout successful')        
        setUserData({
            name:"",
            email:""
        })
        navigate('/login')
    }

    useEffect(() => {
        if (localStorage.getItem("userId")!==null) {
            fetchData()
        }else{
            setUserData({
                name:"",
                email:""
            })
        }
    }, [setUserData])

    return (
        <header className={scrollPage ? `${styles.fixed}` : null}>
            <div className={styles.header}>{logo}
                <nav className={showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`}>
                    <div className={showMenu ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}` : `${styles['nav-wrapper']}`} onClick={hideMenu}>

                    </div>
                    <ul>
                        <li className={styles['logo-mobile']}>
                            {logo}
                            <FaTimes size={22} color='#fff' onClick={hideMenu} />
                        </li>
                        <li>
                            <NavLink to='/shop' className={activeLink}>Shop</NavLink>
                        </li>
                    </ul>
                    <div className={styles['header-right']}>
                        <span className={styles.links}>
                            {localStorage.getItem('userId')===null && <NavLink to={"login"} className={activeLink}>Login</NavLink>}
                            {localStorage.getItem('userId')===null && <NavLink to={"register"} className={activeLink}>Register</NavLink>}
                            {localStorage.getItem('userId')!==null && <NavLink to={"profile"} className={activeLink}>Profile</NavLink>}
                            {localStorage.getItem('userId')!==null && <Link to={"/"} onClick={logout} >Logout</Link>}
                        </span>
                        {/* {cart} */}
                    </div>
                </nav>
                <div className={styles['menu-icon']}>
                    {/* {cart} */}
                    <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
                </div>
            </div>
        </header>
    )
}

export default Header
