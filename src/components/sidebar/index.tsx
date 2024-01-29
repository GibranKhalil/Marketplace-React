import styles from './sidebar.module.scss'

export const Sidebar = () => {

    const categorias = ['Eletrônicos', 'Roupas', 'Artesanato', 'Jogos e Brinquedos', 'Jóias', 'Beleza', 'Para casa', 'Sports', 'Espaço pet']

    return (
        <aside className={styles.sidebar}>
            <h1>Categorias</h1>
            <ul>
                {categorias.map((categoria, index) => (
                    <li key={index}>{categoria}</li>
                ))}
            </ul>
        </aside>
    )
}