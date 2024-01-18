import { ReactNode } from "react";
import { Header } from "../header"
import { Sidebar } from "../sidebar"
import styles from './paginaBase.module.scss'

interface PaginaBaseProps {
    children: ReactNode;
}


export const PaginaBase = ({children}: PaginaBaseProps) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.content}>
                <Sidebar />
                {children}
            </main>
        </div>
    )
}