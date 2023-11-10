import { Button, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";




const Checkout = () => {

    const { checkData, deleteCart } = useContext(CartContext);

    const subtotal = checkData.reduce((total, product) => {
        return total + product.price;
    }, 0);


    console.log(checkData);
    return (
        <div className="bg-site w-full h-[80vh] flex items-center justify-center">
            <div className="bg-black/60 backdrop:blur-xl w-1/2 h-3/4 rounded-lg flex">
                <div className=" w-1/2 h-full flex justify-between flex-col p-8">
                    <h3 className="text-warning-500 text-justify text-3xl">Tus Datos</h3>
                    <Input
                        color="warning"
                        type="string"
                        label="Nombre"
                        variant="underlined"
                        className="max-w-xs  text-warning-500 "
                    />
                    <Input
                        color="warning"
                        type="string"
                        label="Apellido"
                        variant="underlined"
                        className="max-w-xs text-warning-500"
                    />
                    <Input
                        color="warning"
                        type="number"
                        label="Telefono"
                        variant="underlined"
                        className="max-w-xs  text-warning-500"
                    />
                    <Input
                        color="warning"
                        type="email"
                        label="Email"
                        variant="underlined"
                        isInvalid={true}
                        className="max-w-xs text-warning-500"
                    />
                    <Input
                        color="warning"
                        type="email"
                        label="Email"
                        variant="underlined"
                        isInvalid={true}
                        errorMessage="Los Emails deben coincidir"
                        className="max-w-xs  text-warning-500"
                    />
                </div>
                <div className="bg-black/60 w-1/2 h-full flex justify-between flex-col p-8">
                    <div className="flex justify-center items-center">
                        <h3 className="text-warning-500 text-justify text-3xl">Detalles de tu compra</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <Table
                            className="text-warning-500 dark"
                            color="warning"
                        >
                            <TableHeader>
                                <TableColumn>PRODUCTO</TableColumn>
                                <TableColumn>CANT.</TableColumn>
                                <TableColumn>PRECIO</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {
                                    checkData.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>{product.title}</TableCell>
                                            <TableCell>{product.quantity}</TableCell>
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
                    <div className="flex justify-center items-center">
                        <Link to="/modal">
                        <Button
                            onClick={() => deleteCart()}
                            color="warning">
                            Confirmar compra
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout