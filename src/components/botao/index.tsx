import styles from './botao.module.scss'

interface BotaoPadraoProps{
    texto: string
}

export const BotaoPadrao = ({texto}: BotaoPadraoProps) =>{
    return(
        <button className={styles.botaoPadrao}>
            {texto}
        </button>
    )
}

export const BotaoPreto = ({texto}: BotaoPadraoProps) =>{
    return(
        <button className={styles.botaoPreto}>
            {texto}
        </button>
    )
}