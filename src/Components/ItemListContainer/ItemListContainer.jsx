import styles from "../ItemListContainer/Styles.module.css"

function ItemListContainer({greetings}) {
    return (
        <div className={styles.itemListContainer}>
            <h1 className={styles.greetings}>{greetings}</h1>
        </div>
    )
}

export default ItemListContainer