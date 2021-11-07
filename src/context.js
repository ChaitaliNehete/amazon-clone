import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { auth } from './firebase'

const AppContext = React.createContext()

const initialState = {
    cart: [],
    user: null,
    total: 0,
    amount: 0,
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, title, price, rating, image) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, title, price, rating, image } })
    }
    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', id: id })
    }
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log('The user is---', authUser);

            if (authUser) {
                dispatch({ type: 'SET_USER', user: authUser })
            } else {
                dispatch({ type: 'SET_USER', user: null })
            }
        })
    }, [])
    return (
        <AppContext.Provider value={{
            ...state,
            addToCart,
            removeFromCart
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };