import React, { useEffect, useState } from 'react'
import './Product.css'
import mobiles from '../page/mobiles'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import img1 from '../page/images/1.png'
import img2 from '../page/images/2.png'
import img3 from '../page/images/3.png'
import img4 from '../page/images/4.png'
import img5 from '../page/images/5.png'
import img6 from '../page/images/6.png'
import img7 from '../page/images/7.jpg'
import img8 from '../page/images/8.jpg'
import axios from 'axios'


const Product = () => {

    const navigate = useNavigate()

    const [product, setProduct] = useState({
        brand: "",
        name: "",
        price: 0,
        stock: 0,
        description: "",
        index: 0
    })

    const [qty, setQty] = useState(1)

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const changeHandler = async () => {

        if(localStorage.getItem('userId')==null){
            toast.error('Login requires')
            return
        }

        const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + '/api/users' + '/getUser', { id: localStorage.getItem('userId') }, config)

        console.log(data.data);

        if (qty > product.stock) {
            toast.error("Quantity cannot exceed " + product.stock)
        } else if (data.success && (data.data.address.length === 0 || data.data.state.length === 0 || data.data.country.length === 0 || data.data.phone.length === 0 || data.data.name.length === 0)) {
            toast.error("Update your profile before purchasing")
        } else {
            toast.success(product.name + " buy order placed")
            navigate('/shop')
        }
    }

    const { id } = useParams()

    useEffect(() => {
        const pro = mobiles.filter((mobile, _) => mobile.id === id)
        setProduct(pro[0])
    }, [])


    return (
        <div className='overall1'>
            <div className='image1'>
                {product.index === 1 && <img src={img1} alt="" />}
                {product.index === 2 && <img src={img2} alt="" />}
                {product.index === 3 && <img src={img3} alt="" />}
                {product.index === 4 && <img src={img4} alt="" />}
                {product.index === 5 && <img src={img5} alt="" />}
                {product.index === 6 && <img src={img6} alt="" />}
                {product.index === 7 && <img src={img7} alt="" />}
                {product.index === 8 && <img src={img8} alt="" />}
            </div>
            <div className='text1'>
                <p className="brand1">
                    {product.brand}
                </p>
                <p className="name1">
                    {product.name}
                </p>
                <p className="desc1">
                    {product.description}
                </p>
                <p className="price1">
                    Rs. {product.price}
                </p>
                <p className='quantity1'>
                    Quantity
                    <span>
                        <input type="number" value={qty} onChange={(ev) => setQty(ev.target.value<=0?1:ev.target.value)} />
                    </span>
                </p>
                <p className='buy1'>
                    <button className='--btn --btn-primary' onClick={changeHandler}>Buy</button>
                </p>
            </div>
        </div>
    )
}

export default Product
