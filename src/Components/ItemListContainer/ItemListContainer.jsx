import { useEffect, useState } from "react"
import DropDown from "../Dropdown/Dropdown"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { db } from '../../firebase/client'
import { collection, doc, getDoc, getDocs } from "firebase/firestore"

function ItemListContainer({ greetings }) {

    const [products, setProducts] = useState([])
    const { id } = useParams()


    useEffect(() => {
        if(id)
        {
            const productRef = doc(db, "products", `${id}`)
            getDoc(productRef)
            .then((snapshot) => {
                if(snapshot.exists()){
                    const productsData = { id: snapshot.id, ...snapshot.data()}
                    console.log(productsData)
                    setProducts(productsData)
                }
            })
        }
        const productsRef = collection(db, "products")
        getDocs(productsRef)
            .then(snapshot => {
            const productsData =    snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(productsData)
                setProducts(productsData)
            })
            .catch(e => console.error(e))
    }, [id])

    // const url = id ? `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products`
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.table(data)
    //             setProducts(data)
    //         })
    //         .catch(err => { console.error(err) });

    // }, [id])
    return (
        <div className="w-full h-auto flex flex-col items-center ">
            <div className="w-full h-auto flex justify-center gap-20 items-center ">
                <h1 id="greetings" className="font-squealer text-[2rem] sm:text-[5rem] text-warning hover:text-danger hover:scale-100 ">{greetings}</h1>
                <DropDown />
            </div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;