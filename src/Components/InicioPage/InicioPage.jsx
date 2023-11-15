
import { collection, getDocs, query, where } from "firebase/firestore"
import { Link } from "react-router-dom"
import { db } from "../../firebase/client"
import { useEffect, useState } from "react"

export default function InicioPage() {
    return (
        <div className="relative bg-oro bg-no-repeat bg-cover overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font text-4xl font-bold tracking-tight text-warning-400 sm:text-6xl">
                            ¡Bienvenido somos tu Destino para el Estilo Rockero!
                        </h1>
                        <p className="mt-4 text-xl font-bold text-gray-300">
                            En nuestra tienda, nos apasiona el rock en todas sus formas, y hemos creado el lugar perfecto para que los amantes del rock expresen su estilo único. Somos más que una tienda en línea; somos una comunidad de aficionados al rock que se unen para celebrar la rebeldía, la música y la moda que definen el espíritu del rock 'n' roll.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src="https://www.nme.com/wp-content/uploads/2016/09/0893_140609_vanhalen.jpg"
                                                    alt="Van Halen"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://www.nme.com/wp-content/uploads/2016/09/2012RollingStonesLogo50thAnniversary600PR030612.jpg"
                                                    alt="Rollings Stones"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://www.nme.com/wp-content/uploads/2016/09/0893_133804_Aerosmith1.jpg"
                                                    alt="Aerosmith"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://www.nme.com/wp-content/uploads/2016/10/0893_133738_ACDC.jpg"
                                                    alt="AC DC"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://bandlogos.files.wordpress.com/2011/09/dio_band_wallpaper.jpg"
                                                    alt="Dio"
                                                    className="h-full w-full object-cover   object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://bandlogos.files.wordpress.com/2011/08/motorhead_wallpaper.jpg"
                                                    alt="MotorHead"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <img
                                                    src="https://i.pinimg.com/564x/38/9a/6f/389a6f101989b13e56f0116eeae92634.jpg"
                                                    alt="Scorpions"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* LINKEADO A PRODUCTOS */}
                            <Link
                                to={`/`}
                                className="inline-block rounded-md border border-transparent bg-warning-600 py-3 px-8 text-center font-medium text-black hover:bg-purple-700"
                            >
                                Productos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
