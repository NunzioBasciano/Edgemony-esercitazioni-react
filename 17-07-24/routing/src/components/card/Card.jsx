import styles from './card.module.css'

function Card(props) {
    return (
        <div className={styles.card} key={props.id}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Card