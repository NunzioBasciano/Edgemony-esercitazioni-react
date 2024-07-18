import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import Button from '../button/Button';

function Modal({ children, isOpen, onClose }) {
    return (
        createPortal(
            <>
                {isOpen && (
                    <div className={styles.overlay}>
                        <div className={styles.content}>
                            <Button
                                text="Close"
                                onClick={onClose}
                            />
                            {children}
                        </div>
                    </div>
                )}
            </>,
            document.body
        )
    )
}

export default Modal