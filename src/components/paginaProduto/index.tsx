import { useAppDispatch, useAppSelector } from '@/store/hooks/appHooks'
import styles from './paginaProduto.module.scss'
import { getProdutoPorId, trocarCor } from '@/store/reducers/produtos'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BotaoGhost, BotaoPretoSemAnimacao, BotaoQuantidade } from '../botao'
import { FiShoppingBag } from 'react-icons/fi'
import { MdFavoriteBorder } from 'react-icons/md'
import { Rating } from '../rating'
import { IconeTexto } from '../textosPersonalizados'
import { PiArrowsHorizontal, PiArrowsOutSimple, PiArrowsVertical } from "react-icons/pi";
import { } from "react-icons/pi";
import classNames from 'classnames'

export const PaginaProduto = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const produto = useAppSelector(state => state.produtos)
    const [imagemIndex, setImagemIndex] = useState<number>(0)
    const produtoMap = produto.flatMap(item => item.corPrincipal)
    const [corSelecionada, setCorSelecionada] = useState<string>(produtoMap[0])

    useEffect(() => {
        dispatch(getProdutoPorId(id))
    }, [id])

    return (
        <>
            {produto.map((item, index) => (
                <main key={index} className={styles.produtoView}>
                    <div className={styles['produtoView-desc']}>
                        <h1>{item.nome}</h1>
                        <h2>Vendedor: {item.vendedor}</h2>
                        <p>our most popular collection! Chelsea is a sofa for lover os simple shapes. this sofa is sutable for both the office and home, sofa bing style, and loungin comfort to any room in the home</p>
                        <ul>
                            {item.img.map((imagem, index) => (
                                <li onClick={() => setImagemIndex(index)} key={index}><img src={imagem} /></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles['produtoView-img']}>
                        <img src={item.img[imagemIndex]} alt='12' />
                    </div>
                    <div className={styles['produtoView-detalhesCompra']}>
                        <div className={styles['produtoView-preco']}>
                            <h1>R$ {item.preco.toFixed(2)}</h1>
                            <Rating />
                        </div>
                        <div className={styles['produtoView-cores']}>
                            <h2>Cores</h2>
                            <ul className={styles['produtoView-coresLista']}>
                                {item.cores.map((cor, index) => (
                                    <li className={classNames(styles.base, {[styles.corSelecionada]: corSelecionada === cor})} key={index} >
                                        <div onClick={() => {dispatch(trocarCor({ cor: cor, tipo: item.tipo.toString() })), setCorSelecionada(cor)}} key={index} style={{ backgroundColor: cor }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles['produtoView-cores']}>
                            <h2>Medidas</h2>
                            <ul className={styles['produtoView-medidas']}>
                                <IconeTexto icone={<PiArrowsHorizontal />} tagTexto={<p>{item.largura} cm</p>} />
                                <IconeTexto icone={<PiArrowsVertical />} tagTexto={<p>{item.altura} cm</p>} />
                                <IconeTexto icone={<PiArrowsOutSimple />} tagTexto={<p>{item.profundidade} cm</p>} />
                            </ul>
                        </div>
                        <div className={styles['produtoView-botoes']}>
                            <BotaoQuantidade texto={1} />
                            <BotaoGhost texto='Favoritar' icone={<MdFavoriteBorder />} />
                            <BotaoPretoSemAnimacao texto='Adicionar ao carrinho' icone={<FiShoppingBag />} />
                        </div>
                    </div>
                </main>
            ))}
        </>
    )
}