import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

export default function CartView() {
    const { cartList, deleteCart, checkoutData } = useContext(CartContext);

    const subTotal = () => {
        let total = 0;
        for (let i = 0; i < cartList.length; i++) {
            total += cartList[i].price * cartList[i].quantity;
        }
        return total;
    };

    const total = (a, b) => a * b;
    

    const handleWipe = () => {
        deleteCart();
    };

    const handleCheckout = () => {
        const cartData = cartList.map((product) => ({
            id: product.id,
            title: product.title,
            price: total(product.quantity, product.price),
            quantity: product.quantity,
        }));

        checkoutData(cartData);
    };

    return (

        <div className="bg-black">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
                <h1 className="text-center text-3xl font-bold tracking-tight text-warning sm:text-4xl">Carrito de compras</h1>

                <div className="mt-12">
                    <section aria-labelledby="cart-heading">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        {/* Mapeado con el componente CartItem */}
                        {cartList.map((product) => (
                            <CartItem key={product.id} product={product} total={total(product.quantity, product.price)} />
                            ))}
                    </section>
                    {/* Order summary */}
                    <section aria-labelledby="summary-heading" className="mt-10">
                        <div>
                            <dl className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-base font-medium text-gray-200">Subtotal</dt>
                                    <dd className="ml-4 text-base font-medium text-gray-400">${subTotal()}</dd>
                                </div>
                            </dl>
                            <p className="mt-1 text-sm text-red-500">Shipping and taxes will be calculated at checkout.</p>
                        </div>
                        <div className="mt-10">
                            <Link to={`/checkout`}>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full rounded-md border border-transparent bg-warning-600 py-3 px-4 text-base font-medium text-purple shadow-sm hover:bg-warning-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    Checkout
                                </button>
                            </Link>
                            <button
                                onClick={handleWipe}
                                className="w-full rounded-md border border-transparent bg-warning-600 py-3 px-4 mt-4 text-base font-medium text-purple shadow-sm hover:bg-warning-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Limpiar Carrito
                            </button>
                        </div>
                        <div className="mt-6 text-center text-sm">
                            <p>
                                or
                                <Link to={"/"} className="font-bold text-lg text-purple-600 hover:text-purple-400">
                                    Continua Comprando
                                    <span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
















        // <div className="bg-black">
        //     <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        //         <h1 className="text-center text-3xl font-bold tracking-tight text-warning sm:text-4xl">Carrito de compras</h1>

        //         <div className="mt-12">
        //             <section aria-labelledby="cart-heading">
        //                 <h2 id="cart-heading" className="sr-only">
        //                     Items in your shopping cart
        //                 </h2>

        //                 <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
        //                     {cartList.map((product) => (
        //                         <li key={product.id} className="flex py-6">
        //                             <div className="flex-shrink-0">
        //                                 <img
        //                                     src={product.image}
        //                                     className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
        //                                 />
        //                             </div>

        //                             <div className="ml-4 flex flex-1 justify-between flex-col sm:ml-6">
        //                                 <div>
        //                                     <div className="flex justify-between">
        //                                         <h4 className="font-bold text-xl text-secondary hover:text-secondary-200">
        //                                             {product.title}
        //                                         </h4>

        //                                         <p className="ml-4 text-xl font-medium text-purple-800">${product.price}</p>
        //                                     </div>
        //                                 </div>
        //                                 <div className="bg-white/10 rounded-xl h-auto flex  items-end justify-between">
        //                                     <p className="ml-4 text-xl font-medium text-indigo-800">Cantidad: {product.quantity}</p>
        //                                     <p className="ml-4 text-xl font-medium text-indigo-800">Total $ {total(product.quantity, product.price)}</p>
        //                                     <div className="ml-4">
        //                                         <button
        //                                             type="button"
        //                                             onClick={() => handleRemoveFromCart(product.id)}
        //                                             className="text-sm font-medium text-red-800 hover:text-red-500">
        //                                             <span>Eliminar</span>
        //                                         </button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </section>

        //             {/* Order summary */}
        //             <section aria-labelledby="summary-heading" className="mt-10">
        //                 <div>
        //                     <dl className="space-y-4">
        //                         <div className="flex items-center justify-between">
        //                             <dt className="text-base font-medium text-gray-200">Subtotal</dt>
        //                             <dd className="ml-4 text-base font-medium text-gray-400">${subTotal()}</dd>
        //                         </div>
        //                     </dl>
        //                     <p className="mt-1 text-sm text-red-500">Shipping and taxes will be calculated at checkout.</p>
        //                 </div>

        //                 <div className="mt-10">
        //                     <Link to={`/checkout`}>
        //                         <button
        //                             onClick={handleCheckout}
        //                             className="w-full rounded-md border border-transparent bg-warning-600 py-3 px-4 text-base font-medium text-purple shadow-sm hover:bg-warning-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        //                         >
        //                             Checkout
        //                         </button>
        //                     </Link>
        //                     <button
        //                         onClick={handleWipe}
        //                         className="w-full rounded-md border border-transparent bg-warning-600 py-3 px-4 mt-4 text-base font-medium text-purple shadow-sm hover:bg-warning-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        //                     >
        //                         Limpiar Carrito
        //                     </button>
        //                 </div>

        //                 <div className="mt-6 text-center text-sm">
        //                     <p>
        //                         or
        //                         <Link to={"/"} className="font-bold text-lg text-purple-600 hover:text-purple-400">
        //                             Continua Comprando
        //                             <span aria-hidden="true"> &rarr;</span>
        //                         </Link>
        //                     </p>
        //                 </div>
        //             </section>
        //         </div>
        //     </div>
        // </div>
    )
}
