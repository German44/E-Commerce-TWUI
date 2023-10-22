import { Card, CardFooter, CardHeader, Image, Button } from "@nextui-org/react"
import { Link } from "react-router-dom"

const ItemCard = ({ producto }) => {
    return (
        <Card isFooterBlurred className="w-full h-[320px] hover:scale-105 ">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-sm text-purple-600 uppercase font-bold">New</p>
                <h4 className="text-danger font-medium text-2xl">{producto.title}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-100 -translate-y-6 object-cover"
                src={producto.image}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <p className="text-black text-lg">{producto.price}</p>
                    <p className="text-black text-tiny">{producto.category}</p>
                </div>
                <Link to={`/products/${producto.id}`}>
                    <Button className="text-sm" color="secondary" radius="full" size="sm">
                        Ver mas..
                    </Button>
                </Link>

            </CardFooter>
        </Card>
    )
}

export default ItemCard