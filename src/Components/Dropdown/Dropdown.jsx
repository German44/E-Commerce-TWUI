
import { Link } from "react-router-dom";


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropDown() {

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-warning-300 bg-black px-4 py-2 text-sm font-medium text-warning-500 shadow-sm hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                    Categorias
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to={`/category/remeras`}
                                    className={classNames(
                                        active ? 'bg-purple-900 text-warning-500' : 'text-warning-500',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Remeras
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to={`/category/buzos`}
                                    className={classNames(
                                        active ? 'bg-purple-900 text-warning-500': 'text-warning-500',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Buzos
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to={`/category/gorras`}
                                    className={classNames(
                                        active ? 'bg-purple-900 text-warning-500' : 'text-warning-500',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Gorras
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>

    );
}
