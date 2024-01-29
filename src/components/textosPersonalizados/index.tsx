import { ReactElement } from "react"
import styles from './textosPersonalizados.module.scss'

interface IconeTextoProps{
    tagTexto: ReactElement
    icone: ReactElement
}

export const IconeTexto = ({tagTexto, icone}: IconeTextoProps) =>{
    return(
        <div className={styles.iconeTexto}>
            {icone}
            {tagTexto}
        </div>
    )
}