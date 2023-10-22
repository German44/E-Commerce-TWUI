
import { QuestionMarkCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Counter from '../Counter/Counter'


export default function ItemDetailsContainer() {
    const [products, setProducts,] = useState([])

    const { id } = useParams()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                console.log(json);
            })
            .catch(err => console.error(err))
    }, [id])


    return (
        <div className="bg-black">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                {/* Product details */}
                <div className="lg:max-w-lg lg:self-end">

                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-warning sm:text-4xl">{products?.title}</h1>
                    </div>

                    <section aria-labelledby="information-heading" className="mt-4">
                        <h2 id="information-heading" className="sr-only">
                            Product information
                        </h2>

                        <div className="flex items-center">
                            <p className="text-lg text-purple-500 sm:text-3xl">{products?.price}</p>
                        </div>

                        <div className="mt-4 space-y-6">
                            <p className="text-base font-bold text-gray-500">{products?.description}</p>
                        </div>
                    </section>
                </div>

                {/* Product image */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                        <img src={products?.image} alt={products?.image} className="h-full w-full object-cover object-center" />
                    </div>
                </div>

                {/* Product form */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                            Product options
                        </h2>

                        <form>
                            <div className="sm:flex sm:justify-between">
                                <Counter />
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
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-700 py-3 px-8 text-base font-medium text-white hover:bg-warning focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    Agregar al Carrito
                                </button>
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
