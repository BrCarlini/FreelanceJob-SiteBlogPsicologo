import { IoMenuOutline } from 'react-icons/io5'
import styles from './header.module.scss'
import './header.module.scss'
import { useState } from 'react'

export default function Header() {

    const [activeMenu, setMenu] = useState(false)

    let toggleMenu = () => {
        setMenu(!activeMenu)
    }



    return (
        <>
            <header className={styles.header}>

                <div className={styles.container__header}>
                    <div>
                        LOGO
                    </div>

                    <nav className={styles.container__menuDesktop}>
                        <ul>
                            <li>Início</li>
                            <li>Sobre mim</li>
                            <li>Contatos</li>
                            <li>Psicoterapia</li>
                            <li>Depoimentos</li>
                            <li>Blog</li>
                            <li>Serviços</li>
                        </ul>
                    </nav>

                    <div className={styles.container__menuBurger} onClick={() => toggleMenu()}>
                        <IoMenuOutline size={45} />
                    </div>

                </div>

            </header>

            <nav className={activeMenu ? `${styles.menu} ${styles.menu__active}` : `${styles.menu} ${styles.menu__disabled}`}>
                <ul >
                    <li>Início</li>
                    <li>Sobre mim</li>
                    <li>Contatos</li>
                    <li>Psicoterapia</li>
                    <li>Depoimentos</li>
                    <li>Blog</li>
                    <li>Serviços</li>
                </ul>
            </nav>

            <h1>Teste</h1>
        </>
    )
}