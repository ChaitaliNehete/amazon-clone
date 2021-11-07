import React from 'react';
import { useGlobalContext } from '../context';
import './Product.css'

const Product = ({ id, title, price, rating, image }) => {
    const { addToCart } = useGlobalContext()
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={() => addToCart(id, title, price, rating, image)}>Add to Cart</button>
        </div>
    );
};

export default Product;