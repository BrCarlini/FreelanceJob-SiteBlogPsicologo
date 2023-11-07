import { CiMenuBurger } from 'react-icons/ci'
import styles from './header.module.scss'

export default function Header() {
    return (
        <>
            <header className={styles.header}>

                <div className={styles.container__header}>
                    <div>
                        <CiMenuBurger size={45} />
                    </div>

                    <div>
                        LOGO
                    </div>
                </div>

            </header>
        </>
    )
}