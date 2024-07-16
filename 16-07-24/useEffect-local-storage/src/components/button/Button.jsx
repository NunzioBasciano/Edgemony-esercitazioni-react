import styles from './button.module.css'

function Button(props) {
    return (
        <button className={styles.button} disabled={props.disabled} onClick={props.onClick} id={props.id}>{props.value}</button>
    )
}

export { Button }