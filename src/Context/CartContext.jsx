import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const CartContextComponent = ({ children }) => {

    const [cartList, setCartList] = useState(() => {
        const localCart = JSON.parse(localStorage.getItem("localCartList"))
        return localCart || []
    })
    //* Funcion agrega al carrito
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
    //* Funcion elimina un item del carrito
    const removeToCart = (productIdToRemove) => {
        const updatedCart = cartList.filter(product => product.id !== productIdToRemove);
        setCartList(updatedCart);
    };
    //* Funcion para vaciar el carrito
    const deleteCart = () => {
        setCartList([]);
        setCheckData( [])
    }
    //* Metodo que suma las cantidades totales del carrito
    const quantityTotal = cartList.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

    //* Funcion recopila data del carrito para usarlo en el Checkout
    const [checkData, setCheckData] = useState([])
    const checkoutData = (cartData) => {
        setCheckData( cartData )
    }
    console.log(checkData)

    return (
        < CartContext.Provider value={{ quantityTotal, setCartList, cartList, addToCart, removeToCart, deleteCart, checkoutData, checkData }} >
            {children}
        </ CartContext.Provider>
    )
}

export default CartContextComponent