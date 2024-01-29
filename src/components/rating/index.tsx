import { ReactElement, useState } from "react"
import { IoIosStar, IoIosStarOutline } from "react-icons/io"
import styles from './rating.module.scss'

export const Rating = () => {
    const [voto, setVoto] = useState<number>(0)

    const aoClicar = (numeroEstrela: number) => {
        setVoto(numeroEstrela)
    }

    const criarEstrelas = () => {
        const estrelas: ReactElement[] = []

        for (let i = 0; i < 5; i++) {
            estrelas.push(
                <span key={i} onClick={() => aoClicar(i + 1)}>
                    {i < voto
                        ? <IoIosStar className={styles.estrelaSelecionada} color="#facb2e" />
                        : <IoIosStarOutline className={styles.estrelaVazia} color="#ccc" />}
                </span>
            )
        }
        return estrelas
    }

    const votoFixado = voto.toFixed(1)

    return (
        <div className={styles.ratingContainer}>
            {criarEstrelas()}
            <p>
                {votoFixado}
            </p>
            <p>X reviews</p>
        </div>
    )
}