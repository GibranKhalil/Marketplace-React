import { ReactElement } from "react"
import styles from './icone.module.scss'

interface IconeArredondadoProps{
    children: ReactElement
}


export const IconeArredondado =({children}: IconeArredondadoProps) =>{
    return(
        <div className={styles.icone}>
            <i>{children}</i>
        </div>
    )
}

interface FotoArredondadaProps{
    urlFoto: string
}

export const FotoArredondada = ({urlFoto}: FotoArredondadaProps ) =>{
    return(
        <div className={styles.icone}>
            <img src={urlFoto} alt="Foto perfil arredondada" />
        </div>
    )
}