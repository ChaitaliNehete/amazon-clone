import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import { GoSearch } from 'react-icons/go'
import { FaShoppingCart } from 'react-icons/fa'
import { useGlobalContext } from '../context';
import { auth } from '../firebase'

const Header = () => {
    const { cart, user } = useGlobalContext()
    console.log(cart);
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <nav className='header'>

            {/* logo */}
            <Link to='/'>
                <img
                    className='header_logo'
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon-logo"
                />
            </Link>

            {/* searchg bar */}
            <div className='header_search'>
                <input
                    type="text"
                />
                <GoSearch className='header_searchIcon' />
            </div>

            {/* Links */}
            <div className='header_nav'>
                <Link to={!user && '/login'} className='header_link'>
                    <div
                        className='header_option'
                        onClick={handleAuthentication}
                    >
                        <span className='option_one'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='option_two'>
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='option_one'>Returns</span>
                        <span className='option_two'>& Orders</span>
                    </div>
                </Link>
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='option_one'>Your</span>
                        <span className='option_two'>Prime</span>
                    </div>
                </Link>
                <Link to='/checkout' className='header_link'>
                    <div className='header_cart'>
                        <FaShoppingCart />
                        <span className='option_two header_cartCount'>
                            {cart.length}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Header;