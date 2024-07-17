import styles from './card.module.css'
import Button from '../button/Button';

function truncateText(text, limit = 200) {

    if (text.length > limit) {
        return text.slice(0, limit) + '...';
    }
    return text;
}

const getProduct = async (id) => {
    try {
        const res = await fetch(
            `https://api.escuelajs.co/api/v1/products/${id}`
        );
        const data = await res.json();
        /*    console.log(data)
           setProducts(data); */
    } catch (error) {
        console.log(error);
    }
}

function Card(props) {
    const formattedDescription = truncateText(props.description);
    const formattedPrice = props.price.toFixed(2);

    const handleClick = (e) => {
        console.log(e)
        localStorage.setItem('product', JSON.stringify())
    }
    return (
        <div className={styles.card} key={props.id}>
            <h3 className={styles.card_title}>{props.title}</h3>
            <img className={styles.card_image} src={props.image} alt="" />
            <p>{formattedDescription}</p>
            <p className={styles.card_price}>€ {formattedPrice}</p>
            <Button key={props.id} onClick={handleClick} />

        </div>
    )
}

export default Card