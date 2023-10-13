import { Badge } from "@nextui-org/react"
import { CartIcon } from "./CartIcon"


const CartWidget = () => {
    return (
        <Badge color="danger" content={9} shape="circle">
            <CartIcon color="#c1965d" size={35} />
        </Badge>
    )
}

export default CartWidget