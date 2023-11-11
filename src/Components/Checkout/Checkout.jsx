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
            <div className="bg-site w-full h-[80vh] flex items-center justify-center">
                <div className="bg-black/60 backdrop:blur-xl w-1/2 h-3/4 rounded-lg flex">
                    <div className="bg-black/60 w-1/2 h-full flex justify-between flex-col p-8">
                        <div className="flex flex-col  justify-center items-center">
                            <h3 className="text-warning-500 text-justify text-3xl mb-5">Detalles de tu compra</h3>
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
                            <h4 className="text-purple-500 text-justify text-2xl">Total general de la compra: $ {subtotal}</h4>
                        </div>

                    </div>
                    <div className="bg-black/60 w-1/2 h-full flex justify-between flex-col p-8">
                        <Order checkData={checkData} deleteCart={deleteCart} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
