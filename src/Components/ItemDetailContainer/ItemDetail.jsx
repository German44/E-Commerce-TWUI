import { QuestionMarkCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Button } from '@nextui-org/react';



function ItemDetail({ products }) {

    //* Funcion traida del context agrega al carrito el objeto creado
    const { addToCart, } = useContext(CartContext);
    const handleAddToCart = () => {
        const cart =
        {
            id: products?.id,
            title: products?.title,
            price: products?.price,
            image: products?.image,
            quantity: data
        }
        console.log(cart);
        addToCart(cart);
    };
    //* Funcion para elevar el dato del contador al padre
    const [data, setData] = useState(1);
    const dataCount = (nro) => {
        setData(nro);
    }

    return (
        <div className="container">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:max-w-lg lg:self-end">

                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-warning sm:text-4xl">{products?.title}</h1>
                    </div>

                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">
                            Product information
                        </h2>

                        <div className="flex items-center">
                            <p className="text-lg text-purple-500 sm:text-3xl">${products?.price}</p>
                        </div>

                        <div className="mt-4 space-y-6">
                            <p className="text-base font-bold text-gray-500">{products?.description}</p>
                        </div>
                    </section>
                </div>

                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                        <img src={products?.image} alt={products?.image} className="h-full w-full object-cover object-center" />
                    </div>
                </div>

                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                            Product options
                        </h2>

                        <form>
                            <div className="sm:flex sm:justify-between">
                                {/* Contador con la funcion por props */}
                                <ItemCount sendData={dataCount} />
                            </div>
                            <div className="mt-4">
                                <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                                    <span>What size should I buy?</span>
                                    <QuestionMarkCircleIcon
                                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                            <div className="mt-10 flex justify-center">
                                <Button
                                    color="warning"
                                    onClick={handleAddToCart}>
                                    Agregar al Carrito
                                </Button>
                            </div>
                            <div className="mt-6 text-center">
                                <a href="#" className="group inline-flex text-base font-medium">
                                    <ShieldCheckIcon
                                        className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span className="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
                                </a>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail