import { Badge, } from "@nextui-org/react"
import { CartIcon } from "./CartIcon"
import { Link } from "react-router-dom"


const CartWidget = () => {
    return (
        <Link to={"/cart"} >
            <Badge color="danger" content={9} shape="circle">
                <CartIcon color="#FFCC53" size={35} />
            </Badge>
        </Link>

    )
}

export default CartWidget