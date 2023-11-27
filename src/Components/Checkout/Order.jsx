import { useState } from 'react';
import {Button } from "@nextui-org/react";
import 'firebase/firestore';
import { Input } from "@nextui-org/react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Order = ({ checkData, deleteCart }) => {
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        email1: '',
    });

    const subtotal = checkData.reduce((total, product) => {
        return total + product.price;
    }, 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [orderId, setOrderId] = useState(null);

    const order = {
        buyer: {
            nombre: userData.nombre,
            apellido: userData.apellido,
            telefono: userData.telefono,
            email: userData.email,
        },
        items: checkData,
        total: subtotal,
    }
    //* Funcion para confirmar la compra , limpia el carrito y genera una orden en la base de datos de Firebird
    const handleConfirmCompra = () => {
        if (validation()) {
            const db = getFirestore();
            const ordersCollection = collection(db, 'orders');
            addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
            deleteCart();
            setUserData({
                nombre: '',
                apellido: '',
                telefono: '',
                email: '',
                email1: '',
            });
        }
    };

    //* Funcion validacion checkout, form vacios y email iguales
    const validation = () => {
        if (checkData.length === 0 || userData.nombre === '' || userData.apellido === '' || userData.telefono === '' || userData.email === '' || userData.email1 === '' || (userData.email1 !== userData.email)) {
            return false;
        }
        return true;
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-warning-500 text-justify text-3xl">Tus Datos</h3>
                <Input
                    color="warning"
                    type="string"
                    label="Nombre"
                    variant="underlined"
                    name="nombre"
                    value={userData.nombre}
                    onChange={handleInputChange}
                    className="max-w-xs text-warning-500 mb-4"
                />
                <Input
                    color="warning"
                    type="string"
                    label="Apellido"
                    variant="underlined"
                    name="apellido"
                    value={userData.apellido}
                    onChange={handleInputChange}
                    className="max-w-xs text-warning-500 mb-4"
                />
                <Input
                    color="warning"
                    type="number"
                    label="Telefono"
                    variant="underlined"
                    name="telefono"
                    value={userData.telefono}
                    onChange={handleInputChange}
                    className="max-w-xs text-warning-500 mb-4"
                />
                <Input
                    color="warning"
                    type="email"
                    label="Email"
                    variant="underlined"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="max-w-xs text-warning-500 mb-4"
                />
                <Input
                    color="warning"
                    type="email"
                    label="Email"
                    variant="underlined"
                    name="email1"
                    errorMessage="Ambos email deben coincidir"
                    value={userData.email1}
                    onChange={handleInputChange}
                    className="max-w-xs text-warning-500 mb-[30px]"
                />

                <Button
                    onClick={handleConfirmCompra}
                    color="warning">
                    Confirmar compra
                </Button>
                <h3 className='py-4 font-bold text-red-500'>Su Id de compra es: {orderId}</h3>
            </div>
        </div>
    );
};

export default Order;
