import { ReactNode } from "react";
import { Header } from "../header"
import { Sidebar } from "../sidebar"
import styles from './paginaBase.module.scss'
import { useLocation } from "react-router-dom";

interface PaginaBaseProps {
    children: ReactNode;
}


export const PaginaBase = ({children}: PaginaBaseProps) => {
    const location = useLocation();
    const sidebarVisivel = location.pathname.startsWith("/produto")
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                {!sidebarVisivel && <Sidebar />}
                {children}
            </div>
        </div>
    )
}