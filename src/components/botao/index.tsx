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