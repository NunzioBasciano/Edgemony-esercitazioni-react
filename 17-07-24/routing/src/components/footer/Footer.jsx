import styles from './footer.module.css'
import IconLogo from '../icons/IconLogo';

function Footer() {

    const menuSocial = [
        { alt: 'instagram icon', href: '#', src: 'https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg' },
        { alt: 'facebook icon', href: '#', src: 'https://thumbs.dreamstime.com/b/facebook-icona-sociale-popolare-del-di-media-su-fondo-bianco-isolato-trasparente-154683317.jpg' },
        { alt: 'twitter icon', href: '#', src: 'https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png' },
        { alt: 'linkedin icon', href: '#', src: 'https://as2.ftcdn.net/v2/jpg/03/96/56/19/1000_F_396561934_t1OwjMZHrVY211bHA5uUEAix0F1SyLci.jpg' }
    ]

    return (
        <footer className={styles.footer}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <IconLogo className={styles.footer_logo} />

            <ul className={styles.footer_list}>
                {menuSocial.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <a href={item.href}>
                            <img className={styles.footer_image} src={item.src} alt={item.alt} />
                        </a>
                    </li>
                ))}

            </ul>
        </footer>
    )
}



export default Footer; 