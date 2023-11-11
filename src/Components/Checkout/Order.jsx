import { useState } from 'react';

import 'firebase/firestore';
import { Button, Input } from "@nextui-org/react";
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Order = ({ checkData, deleteCart }) => {
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
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

    // const [orderId, setOrderId] = useState(null);
    // console.log(orderId);

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
    const handleConfirmCompra = () => {

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({ id }) => console.log(id));
        deleteCart();
    };

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
                    className="max-w-xs text-warning-500 mb-[150px]"
                />
                <Button
                    onClick={handleConfirmCompra}
                    color="warning">
                    Confirmar compra
                </Button>
            </div>
        </div>
    );
};

export default Order;
