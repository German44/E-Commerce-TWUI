import { useEffect, useState } from "react"
import styles from "../ItemListContainer/Styles.module.css"
import DropDown from "../Dropdown/Dropdown"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

function ItemListContainer({ greetings }) {

    const [products, setProducts] = useState([])
    const { id } = useParams()
    const url = id ? `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.table(data)
                setProducts(data)
            })
            .catch(err => { console.error(err) });

    }, [id])

    return (
        <div className={styles.itemListContainer}>
            <div className="w-full h-auto flex justify-center gap-20 items-center ">
                <h1 id="greetings" className="font-squealer text-[2rem] sm:text-[5rem] text-warning hover:text-danger hover:scale-100 ">{greetings}</h1>
                <DropDown />
            </div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;