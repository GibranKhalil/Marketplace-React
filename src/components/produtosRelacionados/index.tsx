import { useAppDispatch, useAppSelector } from "@/store/hooks/appHooks"
import { getProdutosRelacionados } from "@/store/reducers/produtos"

interface ProdutosRelacionados{
    categoriaProduto: string
}

export const ProdutosRelacionados = ({categoriaProduto}: ProdutosRelacionados) =>{
    
    const dispatch = useAppDispatch()
    const produtos = useAppSelector(state => state.produtos)
    

    return(
        <div onClick={() => dispatch(getProdutosRelacionados(categoriaProduto))}>
            <h1>Ola</h1>
        </div>
    )
}