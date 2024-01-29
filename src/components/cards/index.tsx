import { ReactElement } from 'react'
import { BotaoPadrao, BotaoPretoAnimado } from '../botao'
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
                    <h1>{textoDestaque.toUpperCase()}</h1>
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

interface CardComTextoProps {
    texto: ReactElement
}

export const CardComTexto = ({ texto }: CardComTextoProps) => {
    return (
        <div className={styles.cardSoTexto}>
            {texto}
        </div>
    )
}

interface CardComTextoImgMenorProps {
    textoDestaque: string
    textoBotao: string
    urlImg: string
    corDoObjeto: string
}



export const CardComTextoImgMenor = ({ textoDestaque, textoBotao, urlImg, corDoObjeto }: CardComTextoImgMenorProps) => {

    function hexToRgb() {
        corDoObjeto = corDoObjeto.replace(/^#/, '');
        let bigint = parseInt(corDoObjeto, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return { r, g, b }
    }

    const { r, g, b } = hexToRgb()
    const style = {
        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`
    }

    return (
        <div style={style} className={styles.cardTextoImgMenor}>
            <div className={styles['cardTextoImgMenor-texto']}>
                <h1>{textoDestaque}</h1>
                <BotaoPretoAnimado texto={textoBotao} />
            </div>
            <div className={styles['cardTextoImgMenor-img']}>
                <img src={urlImg} alt='Foto Produto' />
            </div>
        </div>
    )
}

interface  CardFundoColoridoProdutoProps {
    texto?: string
    imagem: string
    corDoObjeto: string
}

export const CardFundoColoridoProduto = ({ texto, imagem, corDoObjeto }:  CardFundoColoridoProdutoProps) => {

    function hexToRgb() {
        corDoObjeto = corDoObjeto.replace(/^#/, '');
        let bigint = parseInt(corDoObjeto, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return { r, g, b }
    }

    const { r, g, b } = hexToRgb()
    const style = {
        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.15)`
    }

    return (
        <div style={style} className={styles.cardFundoColoridoProduto}>
            <img src={imagem} alt={`imagem: ${texto}`} /> 
            <p>{texto}</p>
        </div>
    )
}