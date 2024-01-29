import { ReactElement, useState } from 'react'
import styles from './botao.module.scss'
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'

interface BotaoPadraoProps {
    texto: string
    icone?: ReactElement
}

export const BotaoPadrao = ({ texto }: BotaoPadraoProps) => {
    return (
        <button className={`${styles.botaoPadrao} ${styles.animacaoHover}`}>
            {texto}
        </button>
    )
}

export const BotaoPretoAnimado = ({ texto }: BotaoPadraoProps) => {
    return (
        <button className={`${styles.botaoPreto} ${styles.animacaoHoverInversa}`}>
            {texto}
        </button>
    )
}

export const BotaoPretoSemAnimacao = ({ texto, icone }: BotaoPadraoProps) => {
    return (
        <button className={styles.botaoPreto}>
            {icone && <i>{icone}</i>}
            {texto}
        </button>
    )
}

interface BotaoQuantidadeProps{
    texto: number
}

export const BotaoQuantidade = ({ texto }: BotaoQuantidadeProps) => {

    const [quantidade, setQuantidade ]= useState<number>(texto)

    function adicionarQuantidade(){
        setQuantidade(quantidade+1)
    }

    function diminuirQuantidade(){
        if(quantidade > 1){
            setQuantidade(quantidade-1)
        }
    }

    return (
        <button className={styles.botaoGhost}>
            <CgMathPlus onClick={() => adicionarQuantidade()} />
            {quantidade}
            <CgMathMinus onClick={() => diminuirQuantidade()} />
        </button>
    )
}

export const BotaoGhost = ({ texto, icone }: BotaoPadraoProps) => {
    return (
        <button className={styles.botaoGhost}>
            {icone && <i>{icone}</i>}
            {texto}
        </button>
    )
}