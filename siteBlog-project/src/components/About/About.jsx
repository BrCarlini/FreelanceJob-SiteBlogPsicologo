import CardSpecialties from '../CardSpecialties/CardSpecialties';
import styles from './about.module.scss';

export default function About() {

    const specialtiesCards = [
        {
            id: "1",
            title: "Transtorno de ansiedade",
            description: "Tratamentos para quadros de ansiendaade, fobias, TOC, síndrome do pânico, entre outros grupos de transtornos.",
            backgroundColor: "#C5E1A5"
        },
        {
            id: "2",
            title: "Saúde emocional",
            description: "Tratamento para trabalhar o reconhecimento, aceitação e ressignificação das emoções, visando pormover bem-estar entre você e sua história.",
            backgroundColor: "#FFAB91"
        },
        {
            id: "3",
            title: "Transtorno do humor",
            description: "Tratamentos para quadros de depressão, tristeza, humor negativo, transtorno bipolar e outros estados temperamentais.",
            backgroundColor: "#AED581" 
        },
        {
            id: "4",
            title: "Autoconhecimento e autoestima",
            description: "Tratamento para desenvolver o autoconhecimento, visando estabelecimento de uma relação mais saudável consigo mesmo.",
            backgroundColor: "#FF8A65"
        },
        {
            id: "5",
            title: "Treino de Habilidade",
            description: "Treino de habilidades pra aqueles que sofrem com desregulação emocional e sofrimento ou apresentam comportamento problema.",
            backgroundColor: "#9CCC65"
        },
        {
            id: "6",
            title: "Questões de relacionamentos",
            description: "Tratamento para desenvolver relações mais saudáveis com terceiros, aprimorando a comunicação, autoestima e etc.",
            backgroundColor: "#FF7043"
        }

    ]


    return (
        <>

            <section className={styles.container__sectionAbout}>

                <div className={styles.container__whoAm}>

                    <div className={styles.container__imageAbout}>

                    </div>


                    <div className={styles.container__description}>
                        <h1>Quem sou eu</h1>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste repellat,
                            nobis obcaecati exercitationem consequatur quae itaque sit expedita,
                            minus tempore quod saepe nisi, sint nam distinctio. Error, velit dignissimos!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste repellat,
                            nobis obcaecati exercitationem consequatur quae itaque sit expedita,
                            minus tempore quod saepe nisi, sint nam distinctio. Error, velit dignissimos!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste repellat,
                            nobis obcaecati exercitationem consequatur quae itaque sit expedita,
                            minus tempore quod saepe nisi, sint nam distinctio. Error, velit dignissimos!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iste repellat,
                            nobis obcaecati exercitationem consequatur quae itaque sit expedita,
                            minus tempore quod saepe nisi, sint nam distinctio. Error, velit dignissimos!
                        </p>

                    </div>

                </div>

                <div className={styles.container__specialties}>
                    <div className={styles.container__titleSpecialties}>
                        <h2>Áreas de Especialidade</h2>
                        <h3>Transtornos e tratamentos</h3>
                    </div>



                    <div className={styles.container__cardsSpecialties}>
                        {specialtiesCards.map(specialty => {
                            return <CardSpecialties key={specialty.id} title={specialty.title} description={specialty.description} backgroundColor={specialty.backgroundColor} />
                        })}
                    </div>

                </div>



            </section>

        </>
    )
}