import React from 'react';
import { useGlobalContext } from '../context';
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format';

const SubTotal = () => {
    const { cart } = useGlobalContext()
    const getTotal = (cart) =>
        cart.reduce((amount, item) => item.price + amount, 0);
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            subtotal ({cart.length} items):<strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" />
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotal(cart)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default SubTotal;