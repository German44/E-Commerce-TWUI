import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const CartContextComponent = ({ children }) => {

    const [cartList, setCartList] = useState(() => {
        const localCart = JSON.parse(localStorage.getItem("localCartList"))
        return localCart || []
    })

    const addToCart = (cart) => {

        const index = cartList.findIndex(item => item.id === cart.id);

        if (index !== -1) {
            cartList[index].quantity += cart.quantity;
            setCartList([...cartList]);

        } else {
            setCartList([...cartList, cart]);
        }
    };

    useEffect(() => {
        localStorage.setItem("localCartList", JSON.stringify(cartList))
    }, [cartList])

    console.log(cartList);

    const removeToCart = (productIdToRemove) => {
        const updatedCart = cartList.filter(product => product.id !== productIdToRemove);
        setCartList(updatedCart);
    };

    const deleteCart = () => {
        setCartList([]);
    }
    //* Metodo que suma las cantidades totales del carrito
    const quantityTotal = cartList.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);


    return (
        < CartContext.Provider value={{ quantityTotal, setCartList, cartList, addToCart, removeToCart, deleteCart }} >
            {children}
        </ CartContext.Provider>
    )
}

export default CartContextComponent