import React, { useEffect, useState } from 'react'
import './Page.css'
import mob from './mobiles'
import img1 from '../page/images/1.png'
import img2 from '../page/images/2.png'
import img3 from '../page/images/3.png'
import img4 from '../page/images/4.png'
import img5 from '../page/images/5.png'
import img6 from '../page/images/6.png'
import img7 from '../page/images/7.jpg'
import img8 from '../page/images/8.jpg'
import { useNavigate } from 'react-router-dom'

const Page = () => {

    const [mobiles, setMobiles] = useState([])

    

    const navigate = useNavigate()

    const filterHandler = (ev)=>{
        var mobile = mobiles
        mobile = mobiles.filter((mobile,_)=> (mobile.name.match(ev.target.value) || mobile.brand.match(ev.target.value)))
        setMobiles(mobile)
        if(ev.target.value.length === 0){
            setMobiles(mob)
        }
    }

    
    useEffect(() => {
        setMobiles(mob)
      }, [])

    return (
        <div className='parent'>
            <div className="filter">

                <h4>Filter</h4>

                <input type="text" placeholder='Search by Name or Brand' onChange={filterHandler}/>

            </div>
            <div className="list">

                {mobiles.map((mobile, index) => (
                    <div className="card" onClick={() => navigate('/product/' + mobile.id)}>
                        <div className="image">
                            {mobile.index === 1 && <img src={img1} alt="" />}
                            {mobile.index === 2 && <img src={img2} alt="" />}
                            {mobile.index === 3 && <img src={img3} alt="" />}
                            {mobile.index === 4 && <img src={img4} alt="" />}
                            {mobile.index === 5 && <img src={img5} alt="" />}
                            {mobile.index === 6 && <img src={img6} alt="" />}
                            {mobile.index === 7 && <img src={img7} alt="" />}
                            {mobile.index === 8 && <img src={img8} alt="" />}
                        </div>
                        <div className="text">
                            <p className="price">
                                Rs. {mobile.price}
                            </p>
                            <p className="title">
                                {mobile.name}
                            </p>
                            <p style={{ color: mobile.stock === 0 ? "red" : "green", fontWeight: "500" }}>{mobile.stock === 0 ? "Out Of Stock" : "In Stock"}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Page
