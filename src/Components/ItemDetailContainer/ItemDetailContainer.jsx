

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/client'


function ItemDetailsContainer() {
    const [products, setProducts,] = useState()

    const { id } = useParams()

    useEffect(() => {

        const productRef = doc(db, "products", `${id}`)
        getDoc(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const productsData = { id: snapshot.id, ...snapshot.data() }
                    console.log(productsData)
                    setProducts(productsData)
                }
            })

            .catch(e => console.error(e))
    }, [id])


    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then(res => res.json())
    //         .then(json => {
    //             setProducts(json);
    //             console.log(json);
    //         })
    //         .catch(err => console.error(err))
    // }, [id])

    return (
        <div className='lg:flex lg:items-center lg:justify-center'>
            <ItemDetail products={products} />
        </div>
    )
}
export default ItemDetailsContainer
