import { QuestionMarkCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import ItemCount from './ItemCount'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react';


function ItemDetail({ products }) {

    const { setCartList, cartList, addToCart, } = useContext(CartContext);
    // const handleAddToCart = () => {
    //     const cart = [{
    //         id: products?.id,
    //         title: products?.title,
    //         price: products?.price,
    //         image: products.image
    //     }]
    //     console.log(cart);
    //     setCartList(...cartList, cart);
    // };


    return (

        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                    <h4 className="text-white/90 font-medium text-xl">{products?.title}</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    className="z-0 w-full h-full object-cover"
                    src={products?.image}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                        <div className="flex flex-col">
                            <p className="text-xl text-red/60">${products?.price}</p>
                            <p className="text-sm text-white/60">{products?.description}</p>
                        </div>
                    </div>
                    <Button radius="full" color='warning' size="sm">Agregar al carrito</Button>
                </CardFooter>
            </Card>
        </div>


        // <div className="container">
        //     <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        //         <div className="lg:max-w-lg lg:self-end">

        //             <div className="mt-4">
        //                 <h1 className="text-3xl font-bold tracking-tight text-warning sm:text-4xl">{products?.title}</h1>
        //             </div>

        //             <section aria-labelledby="information-heading" className="mt-4">
        //                 <h2 id="information-heading" className="sr-only">
        //                     Product information
        //                 </h2>

        //                 <div className="flex items-center">
        //                     <p className="text-lg text-purple-500 sm:text-3xl">{products?.price}</p>
        //                 </div>

        //                 <div className="mt-4 space-y-6">
        //                     <p className="text-base font-bold text-gray-500">{products?.description}</p>
        //                 </div>
        //             </section>
        //         </div>

        //         <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        //             <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
        //                 <img src={products?.image} alt={products?.image} className="h-full w-full object-cover object-center" />
        //             </div>
        //         </div>

        //         <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        //             <section aria-labelledby="options-heading">
        //                 <h2 id="options-heading" className="sr-only">
        //                     Product options
        //                 </h2>

        //                 <form>
        //                     <div className="sm:flex sm:justify-between">
        //                         <ItemCount />
        //                     </div>
        //                     <div className="mt-4">
        //                         <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
        //                             <span>What size should I buy?</span>
        //                             <QuestionMarkCircleIcon
        //                                 className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        //                                 aria-hidden="true"
        //                             />
        //                         </a>
        //                     </div>
        //                     <div className="mt-10 flex justify-center">
        //                         <Button
        //                             color="warning"
        //                             onClick={handleAddToCart}>
        //                             Agregar al Carrito
        //                         </Button>
        //                     </div>
        //                     <div className="mt-6 text-center">
        //                         <a href="#" className="group inline-flex text-base font-medium">
        //                             <ShieldCheckIcon
        //                                 className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        //                                 aria-hidden="true"
        //                             />
        //                             <span className="text-gray-500 hover:text-gray-700">Lifetime Guarantee</span>
        //                         </a>
        //                     </div>
        //                 </form>
        //             </section>
        //         </div>
        //     </div>
        // </div>

    )
}

export default ItemDetail