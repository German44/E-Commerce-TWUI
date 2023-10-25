import Item from "./Item"
import { Spinner } from "@nextui-org/react"

const ItemList = ({ products }) => {
    return (
        <div className="w-3/4 gap-10 grid grid-cols-1 sm:grid-cols-4 p-10 ">
            {products.length ?
                (
                    products.map((product) => (
                        <Item key={product.id} producto={product} />))
                )
                :
                (
                    <div className="w-full h-[100vh] ">
                        <Spinner label="CARGANDO" color="warning" labelColor="warning" />
                    </div>
                )
            }
        </div>

    )
}

export default ItemList