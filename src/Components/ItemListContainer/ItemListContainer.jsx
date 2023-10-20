import { useEffect, useState } from "react"
import styles from "../ItemListContainer/Styles.module.css"
import Item from "../Item/Item"
import { Spinner } from "@nextui-org/react"
import DropDown from "../Dropdown/Dropdown"
import { useParams } from "react-router-dom"

function ItemListContainer({ greetings }) {

    const [products, setProducts] = useState([])
    const {id} = useParams()
    const url = id ? `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.table(data)
                setProducts(data)
            })
            .catch(err => {console.error(err)});
            
    }, [id])

    return (
        <div className={styles.itemListContainer}>
            <div className="w-full h-auto flex justify-center gap-20 items-center ">
                <h1 id="greetings" className="font-squealer text-[2rem] sm:text-[5rem] text-warning hover:text-danger hover:scale-100 ">{greetings}</h1>
                <DropDown/>
            </div>
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
        </div>
    )
}

export default ItemListContainer;