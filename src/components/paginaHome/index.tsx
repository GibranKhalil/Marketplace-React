import {  CardFundoColoridoProduto, CardComTexto, CardComTextoEImagemPrincipal, CardComTextoImgMenor } from "../cards"
import HeadPhone from '@/assets/headPhoneBege.png'
import Camera from '@/assets/Camera Azul.png'
import controle from '@/assets/controleBege.png'
import cadeira from '@/assets/cadeiraLaranja.png'
import bolsa from '@/assets/bolsaVerde.png'
import chaleira from '@/assets/chaleira azul.png'
import styles from './home.module.scss'



export const Home = () => {
    return (
        <main className={styles.container}>
            <div className={styles.homeBanner}>
                <CardComTextoEImagemPrincipal subTexto="Fone de ouvido wireless com cancelamento de ruído" textoBotao="HeadPhones" textoDestaque="Super Oferta" urlImg={HeadPhone} />
                <div className={styles['homeBanner-cardsMenores']}>
                    <CardComTexto texto={<p>Ganhe <span style={{ color: '#f76821' }}>20%</span> de desconto em HeadPhones</p>} />
                    <CardComTextoImgMenor corDoObjeto="#dbeaf9" urlImg={Camera} textoBotao="Comprar" textoDestaque="Fujifilm Instax 11" />
                </div>
            </div>
            <div className={styles.categoriasContainer}>
                <h1>Explore as categorias populares</h1>
                <div className={styles.categorias}>
                    < CardFundoColoridoProduto texto="Casa" corDoObjeto="#B1BFDA" imagem={chaleira} />
                    < CardFundoColoridoProduto texto="Eletrônicos" corDoObjeto="#D9C0BA" imagem={controle} />
                    < CardFundoColoridoProduto texto="Moda" corDoObjeto="#7B8BA2" imagem={bolsa} />
                    < CardFundoColoridoProduto texto="Mobílias" corDoObjeto="#ED7509" imagem={cadeira} />
                </div>
            </div>
        </main>
    )
}