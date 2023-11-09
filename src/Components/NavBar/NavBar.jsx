import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import CartWidget from '../CartWidget/CartWidget'
import Logo from "../Logo/Logo"
import { Link, NavLink } from 'react-router-dom'
import Styles from "../NavBar/style.module.css"



export default function Example() {
    return (
        <Disclosure as="nav" className="bg-black ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-shrink-0 items-center mr-[200px]">
                                    <Link to={`/inicio`}>
                                        <Logo color="#FFCC53" colorFondo="#000" />
                                    </Link>
                                </div>
                                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">

                                    <NavLink
                                        to={`/inicio`}
                                        className={'text-warning text-xl font-squealer hover:bg-purple-700 hover:text-warning px-3 py-2 rounded-md  font-medium'}>
                                        Inicio
                                    </NavLink>
                                    <NavLink
                                        to={`/`}
                                        className={'text-warning text-xl font-squealer hover:bg-purple-700 hover:text-warning px-3 py-2 rounded-md  font-medium '}>
                                        Productos
                                    </NavLink>
                                    <NavLink
                                        to={`/contacto`}
                                        className={'text-warning text-xl font-squealer hover:bg-purple-700 hover:text-warning px-3 py-2 rounded-md  font-medium'} >
                                        Contacto
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    { /* Componente CARRITO */}
                                    <CartWidget />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 w-full h-auto flex flex-col items-center">
                            <NavLink to={`/inicio`} className={'text-warning hover:bg-purple-700 hover:text-warning px-3 py-2 rounded-md text-sm font-medium'} activeClassName={Styles.active}>Inicio</NavLink>
                            <NavLink to={`/`} className={'text-warning hover:bg-purple-700 hover:text-warning px-3 py-2 rounded-md text-sm font-medium'} activeClassName={Styles.active}>Productos</NavLink>
                            <NavLink to={`/contacto`} className={'text-warning hover:bg-purple-700 hover:text-warning px-3 py-2 rounded-md text-sm font-medium'} activeClassName={Styles.active}>Contacto</NavLink>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
