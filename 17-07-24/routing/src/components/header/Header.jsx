import styles from './header.module.css';
import IconLogo from '../icons/IconLogo';
import IconCart from '../icons/IconCart';
import UserIcon from '../icons/UserIcon';
import avatarImage from '../../assets/images/image-avatar.png';

// Definizione di un array di oggetti che rappresentano i link del menu di navigazione.
const menuLink = [
    { name: 'Home', path: '/' },
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'About', path: '/about' }
]




function Header() {

    return (
        <header className={styles.header}>
            <IconLogo />
            <ul className={styles.header_links}>
                {menuLink.map((item, index) => (
                    <li key={index}>
                        <a className={styles.link} href={item.path}>{item.name}</a>
                    </li>
                ))}
            </ul >
            <span className={styles.container_user}>
                <a href={'/cart'}><IconCart fill={'black'} /></a>
                <UserIcon
                    image={avatarImage}
                    className={styles.user_icon}
                />
            </span>

        </header>
    );
}


export default Header; 