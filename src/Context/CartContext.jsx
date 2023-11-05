import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextComponent = ({ children }) => {

    const [cartList, setCartList] = useState([])

const addToCart = (cart ) => {
        setCartList([...cartList, cart]);
        console.log(cartList);
    }

    const removeToCart = (productToRemove) => {
        const updatedCart = cartList.filter((product) => product !== productToRemove);
        setCartList(updatedCart);
    }

    const deleteCart = () => {
        setCartList([]);
    }

    return (
        < CartContext.Provider value={{ setCartList, cartList, addToCart, removeToCart, deleteCart}} >
            {children}
        </ CartContext.Provider>
    )
}

export default CartContextComponent