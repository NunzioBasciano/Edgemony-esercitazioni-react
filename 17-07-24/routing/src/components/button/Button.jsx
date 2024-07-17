import styles from './button.module.css';



function Button({ children, text = 'Add to cart', onClick }) {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
            {text}
        </button>
    )
}

export default Button;