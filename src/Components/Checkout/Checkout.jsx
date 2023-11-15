import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Order from "./Order";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

const Checkout = () => {
    const { checkData, deleteCart } = useContext(CartContext);


    const subtotal = checkData.reduce((total, product) => {
        return total + product.price;
    }, 0);

    return (
        <div>
            <div className="bg-site w-full lg:h-[80vh] h-auto flex items-center justify-center">
                <div className="bg-black/60 backdrop:blur-xl lg:w-1/2 w-full lg:h-3/4 h-auto rounded-lg flex lg:flex-row flex-col">
                    <div className=" lg:w-1/2 w-full h-[45vh] flex flex-col justify-between p-8   items-center">
                        <div>
                            <h3 className="text-warning-500 text-justify text-xl  lg:text-3xl mb-4">Detalles de tu compra</h3>
                            <Table
                                className="text-warning-500 dark"
                                color="warning"
                            >
                                <TableHeader>
                                    <TableColumn>CANT.</TableColumn>
                                    <TableColumn>PRODUCTO</TableColumn>
                                    <TableColumn>PRECIO</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    {
                                        checkData.map((product) => (
                                            <TableRow key={product.id}>
                                                <TableCell>{product.quantity}</TableCell>
                                                <TableCell>{product.title}</TableCell>
                                                <TableCell>$ {product.price}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <h4 className="text-purple-500 text-justify text-xl  lg:text-2xl">Total general de la compra: $ {subtotal}</h4>
                        </div>
                    </div>
                    <div className=" bg-gray/60 lg:w-1/2 w-full  lg:h-full flex justify-between flex-col p-8">
                        <Order checkData={checkData} deleteCart={deleteCart} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
