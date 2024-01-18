import { BotaoPadrao } from '../botao'
import styles from './cards.module.scss'

interface CardComTextoEImagemProps {
    textoDestaque: string
    subTexto: string
    textoBotao: string
    urlImg: string
}

export const CardComTextoEImagemPrincipal = ({ urlImg, textoBotao, textoDestaque, subTexto }: CardComTextoEImagemProps) => {
    return (
        <div className={styles.cardComBotao}>
            <div className={styles['cardComBotao-texto']}>
                <div>
                    <h1>{textoDestaque}</h1>
                    <p>{subTexto}</p>
                </div>
                <div className={styles['cardComBotao-botao']}>
                    <BotaoPadrao texto={textoBotao} />
                </div>
            </div>
            <div className={styles['cardComBotao-imagem']}>
                <img src={urlImg} alt='Imagem card' />
            </div>
        </div>
    )
}

interface CardComTextoProps{
    texto: string
}

export const CardComTexto = ({texto}: CardComTextoProps) =>{
    return(
        <div></div>
    )
}