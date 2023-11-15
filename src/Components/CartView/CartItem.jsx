import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const CartItem = ({ product, total}) => {

    const { removeToCart } = useContext(CartContext);

    const handleRemoveFromCart = (productIdToRemove) => {
        removeToCart(productIdToRemove);
    };

    return (
        <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
            <li className="flex py-6">
                <div className="flex-shrink-0">
                    <img
                        src={product.image}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                </div>
                <div className="ml-4 flex flex-1 justify-between flex-col sm:ml-6">
                    <div>
                        <div className="flex justify-between">
                            <h4 className="font-bold text-xl text-secondary hover:text-secondary-200">
                                {product.title}
                            </h4>

                            <p className="ml-4 text-xl font-medium text-purple-800">${product.price}</p>
                        </div>
                    </div>
                    <div className="bg-white/10 rounded-xl h-auto flex  items-end justify-between">
                        <p className="ml-4 text-xl font-medium text-indigo-800">Cantidad: {product.quantity}</p>
                        <p className="ml-4 text-xl font-medium text-indigo-800">Total $ {total}</p>
                        <div className="ml-4">
                            <button
                                type="button"
                                onClick={() => handleRemoveFromCart(product.id)}
                                className="text-sm font-medium text-red-800 hover:text-red-500">
                                <span>Eliminar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}
export default CartItem