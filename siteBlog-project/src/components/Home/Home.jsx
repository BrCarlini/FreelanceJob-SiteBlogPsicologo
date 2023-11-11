import styles from './home.module.scss'

export default function Home() {
    return (
        <>
            <section className={styles.container__sectionHome}>

                <div className={styles.container__textHome}>
                    <h1>Saúde Emocional</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam vero doloremque perspiciatis quis hic modi repudiandae
                        reiciendis est consectetur distinctio magnam eveniet omnis,
                        quod doloribus beatae iste aliquid id exercitationem?
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam vero doloremque perspiciatis quis hic modi repudiandae
                        reiciendis est consectetur distinctio magnam eveniet omnis,
                        quod doloribus beatae iste aliquid id exercitationem?
                    </p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam vero doloremque perspiciatis quis hic modi repudiandae
                        reiciendis est consectetur distinctio magnam eveniet omnis,
                        quod doloribus beatae iste aliquid id exercitationem?
                    </p>
                </div>

                <div className={styles.container__imageHome}>
                    <img src="https://images.pexels.com/photos/4098374/pexels-photo-4098374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>


            </section>
        </>
    )
}