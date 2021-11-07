const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex((cartItem) =>
                cartItem.id === action.id
            );
            let newcart = [...state.cart]
            if (index >= 0) {
                newcart.splice(index, 1)
            } else {
                console.warn(`Can't removce product (id:${action.id}) as it's not in cart`);
            }
            return {
                ...state,
                cart: newcart
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}
export default reducer;