import styles from './cardSpecialties.module.scss'

export default function CardSpecialties({title, description, backgroundColor}){

    const backgroundCard ={
        backgroundColor: backgroundColor
    }



    return(
        <>
        <div className={styles.container__cardSpecialties} style={backgroundCard}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        </>
    )
}