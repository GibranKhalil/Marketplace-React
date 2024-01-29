import { IoSearch } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import styles from './header.module.scss'
import { FotoArredondada, IconeArredondado } from "../iconeArredondado";
import logo from '@/assets/logo.png'
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const redirecionar = useNavigate()
    return (
        <header className={styles.header}>
            <nav>
                <div className={styles['header-logo']}><img onClick={() => redirecionar('/')} src={logo} alt="logo site" /></div>
                <div className={styles.barraPesquisa}>
                    <IoSearch />
                    <input placeholder="Procure" />
                </div>
                <ul className={styles.listaHeader}>
                    <li>
                        <IconeArredondado children={<FiShoppingBag />} />
                    </li>
                    <li>
                        <IconeArredondado children={<MdOutlineFavoriteBorder />} />
                    </li>
                    <li>
                        <FotoArredondada urlFoto="https://github.com/gibrankhalil.png" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}