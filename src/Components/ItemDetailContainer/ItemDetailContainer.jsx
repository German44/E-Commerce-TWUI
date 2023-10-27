

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


export default function ItemDetailsContainer() {
    const [products, setProducts,] = useState()

    const { id } = useParams()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                console.log(json);
            })
            .catch(err => console.error(err))
    }, [id])


    return (
        <ItemDetail products={products} />
    )
}
