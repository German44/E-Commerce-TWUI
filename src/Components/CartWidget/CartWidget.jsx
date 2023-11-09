import { Badge, } from "@nextui-org/react"
import { CartIcon } from "./CartIcon"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const CartWidget = () => {

    const { quantityTotal } = useContext(CartContext);

    return (
        <Link to={"/cart"} >
            <Badge color="danger" content={quantityTotal} shape="circle">
                <CartIcon color="#FFCC53" size={35} />
            </Badge>
        </Link>

    )
}

export default CartWidget