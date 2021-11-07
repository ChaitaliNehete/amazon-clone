import React from 'react';
import { useGlobalContext } from '../context';
import './CheckProduct.css'

const CheckProduct = ({ id, image, title, price, rating }) => {
    const { removeFromCart } = useGlobalContext()
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt="" />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={() => removeFromCart(id)}>Remove From Cart</button>
            </div>
        </div>
    );
};

export default CheckProduct;