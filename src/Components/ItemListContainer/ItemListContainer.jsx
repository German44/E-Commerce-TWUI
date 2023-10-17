import { useEffect, useState } from "react"
import styles from "../ItemListContainer/Styles.module.css"
import ItemCard from "../ItemCard/ItemCard"

function ItemListContainer({ greetings }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8')
            .then(res => res.json())
            .then(data => {
                console.table(data)
                setProducts(data)
            })
    }, [])

    return (
        <div className={styles.itemListContainer}>
            <div  className="w-full h-auto flex justify-center items-center ">
                <h1 id="greetings" className="font-['Open_Sans'] text-[2rem] sm:text-[5rem] text-warning hover:text-danger hover:scale-100">{greetings}</h1>
            </div>
            <div className="w-3/4 gap-10 grid grid-cols-1 sm:grid-cols-4 p-10 ">
                {products.map((product) => (
                    <ItemCard key={product.id} producto={product} />
                ))
                }
            </div>
        </div>
    )
}
// {styles.titleContainer}
export default ItemListContainer;