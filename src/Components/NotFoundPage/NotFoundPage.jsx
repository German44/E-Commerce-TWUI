import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <>
            <div className="min-h-[70vh] bg-black py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="mx-auto max-w-max">
                    <main className="sm:flex">
                        <p className="text-4xl font-bold tracking-tight text-warning-600 sm:text-5xl">404</p>
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-bold tracking-tight text-purple-900 sm:text-5xl">Pagina no encontrada</h1>
                                <p className="mt-1 text-base text-gray-500">Porfavor chequea la URL e intenta nuevamente.</p>
                            </div>
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <Link
                                    to="/"
                                    className="inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-warning-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Volver a Inicio
                                </Link>
                                <Link
                                    to="/contacto"
                                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Contacto
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
