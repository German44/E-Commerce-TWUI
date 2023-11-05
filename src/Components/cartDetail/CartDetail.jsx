
import { useContext } from 'react';
import ItemCount from '../ItemDetailContainer/ItemCount'
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDetail() {

    const { cartList } = useContext(CartContext);
    console.log(cartList);


    return (
        <div className="bg-black">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
                <h1 className="text-center text-3xl font-bold tracking-tight text-warning sm:text-4xl">Carrito de compras</h1>

                <div className="mt-12">
                    <section aria-labelledby="cart-heading">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
                            {cartList.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={product.image}
                                            className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                                        <div>
                                            <div className="flex justify-between">
                                                <h4 className="font-bold text-xl text-secondary hover:text-secondary-200">
                                                    {/* <a href={product.href} className="font-bold text-xl text-secondary hover:text-secondary-200">
                                                        {product.name}
                                                    </a> */}
                                                    {product.title}
                                                </h4>
                                                <p className="ml-4 text-xl font-medium text-red-800">{product.price}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex flex-1 items-end justify-between">
                                            <ItemCount />
                                            <div className="ml-4">
                                                <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                    <span>Eliminar</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section aria-labelledby="summary-heading" className="mt-10">
                        <div>
                            <dl className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-base font-medium text-gray-200">Subtotal</dt>
                                    <dd className="ml-4 text-base font-medium text-gray-400">$96.00</dd>
                                </div>
                            </dl>
                            <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
                        </div>

                        <div className="mt-10">
                            <button
                                type="submit"
                                className="w-full rounded-md border border-transparent bg-warning-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-warning-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Checkout
                            </button>
                        </div>

                        <div className="mt-6 text-center text-sm">
                            <p>
                                or
                                <Link to={"/"} className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
