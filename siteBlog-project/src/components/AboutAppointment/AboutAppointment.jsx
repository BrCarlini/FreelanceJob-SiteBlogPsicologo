import { IoWifiOutline, IoLocationOutline } from "react-icons/io5";
import styles from './aboutAppointment.module.scss';
import { GoogleMap } from "@react-google-maps/api";
import GoogleMaps from "../GoogleMaps/GoogleMaps";

export default function AboutAppointment() {
    return (
        <>
            <section className={styles.container__sectionAppointment}>

                <div className={styles.container__contentAppointment}>
                    <div className={styles.container__aboutQuery}>
                        <h1>Sobre as Consultas</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Vel ducimus sunt harum beatae totam dolor facilis facere, nesciunt blanditiis
                            atque voluptatem pariatur accusamus cumque id earum consequatur dignissimos voluptatum placeat!
                        </p>
                    </div>

                    <div className={styles.container__aboutTreatment}>

                        <div>
                            <h3>Como funciona o tratamento psicológico ?</h3>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Tempora nihil deserunt beatae accusamus officia nesciunt molestias corrupti accusantium magnam excepturi.
                                Ratione nulla amet nostrum assumenda expedita ab veritatis blanditiis illo!
                                <br />
                                <br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Quae earum, fugit hic dicta aut asperiores atque sint possimus dolor consequatur placeat facilis adipisci reprehenderit ex nam totam vitae architecto at!
                            </p>
                        </div>

                        <div className={styles.container__topicsAppointment}>

                            <div className={styles.container__topicsItem}>
                                <div>
                                    <IoWifiOutline size={70} />
                                </div>

                                <div className={styles.container__topicsDescription}>
                                    <p className={styles.titleItem}>1) Online</p>
                                    <p>
                                        Nessa modalidade, a terapia é realizada por chamada de vídeo, em um ambiente 100% seguro,
                                        exclusivo para o seu atendimento, uma boa solução para aqueles que não conseguem se locomover até a clínica.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.container__topicsItem}>
                                <div>
                                    <IoLocationOutline size={70} />
                                </div>

                                <div className={styles.container__topicsDescription}>
                                    <p className={styles.titleItem}>2) Presencial</p>
                                    <p>
                                        Nessa modalidade, a terapia é realizada presencialmente, na clínica localizada no bairro do Ipiranga, em São Paulo.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div>
                        <GoogleMaps/>
                    </div>
                </div>

            </section>
        </>
    )
}