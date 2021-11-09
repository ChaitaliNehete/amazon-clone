import React from 'react';
import CheckProduct from '../components/CheckProduct'
import SubTotal from '../components/SubTotal';
import { useGlobalContext } from '../context';
import './Checkout.css'

const Checkout = () => {
    const { cart,user } = useGlobalContext()
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img
                    className='checkout_ad'
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {cart.length === 0 ? (
                    <div>
                        <h2>Your Shopping Cart is Empty. Please go back to home and add items in cart.</h2>
                    </div>
                ) : (
                    <div>
                        <h3>Hello {!user ? 'Guest' : user.email}</h3>
                        <h2 className='checkout_title'>Your Shopping Product.</h2>
                        {cart.map((item) => (
                            <CheckProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {cart.length > 0 && (
                <div className='checkout_right'>
                    <SubTotal />
                </div>
            )}
        </div>
    );
};

export default Checkout;