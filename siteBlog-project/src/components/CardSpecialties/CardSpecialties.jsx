import styles from './cardSpecialties.module.scss'

export default function CardSpecialties({title, description, backgroundColor}){

    const backgroundCard ={
        backgroundColor: backgroundColor
    }



    return(
        <>
        <div className={styles.container__cardSpecialties} style={backgroundCard}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </>
    )
}