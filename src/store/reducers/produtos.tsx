import { createSlice } from "@reduxjs/toolkit"
import poltronaTipo1Bege from '@/assets/poltronas/tipo1/poltrona-_E0D3C5.png'
import poltronaTipo1Bege2 from '@/assets/poltronas/tipo1/poltrona-_E0D3C5-_1_.png'
import poltronaTipo1Cinza from '@/assets/poltronas/tipo1/poltrona-_595959.png'
import poltronaTipo1Cinza2 from '@/assets/poltronas/tipo1/poltrona-_595959_1_.png'

interface Produto {
    nome: string,
    corPrincipal: string
    cores: string[],
    img: string[]
    tipo: number
    id: number,
    secao: string
    categoria: string
    largura: number
    altura: number
    vendedor: string
    profundidade: number
    preco: number
}

const estadoInicial: Produto[] = [
    {
        nome: 'Poltrona Bege',
        corPrincipal: '#E0D3C5',
        cores: ['#E0D3C5', '#595959'],
        img: [poltronaTipo1Bege, poltronaTipo1Bege2,],
        tipo: 1,
        secao: 'mobilias',
        categoria: 'poltronas',
        id: 1,
        altura: 28.3,
        vendedor: 'ALLModern',
        largura: 31,
        profundidade: 31,
        preco: 650.00,
    },
    {
        nome: 'Poltrona Cinza',
        corPrincipal: '#595959',
        cores: ['#E0D3C5', '#595959'],
        img: [poltronaTipo1Cinza, poltronaTipo1Cinza2],
        tipo: 1,
        secao: 'mobilias',
        categoria: 'poltronas',
        id: 2,
        altura: 28.3,
        vendedor: 'ALLModern',
        largura: 31,
        profundidade: 31,
        preco: 650.00,
    }
]

const produtosSlice = createSlice({
    name: 'produtosReducer',
    initialState: estadoInicial,
    reducers: {
        getProdutoPorId: (state, action) => {
            const produto = state.find(item => item.id.toString() === action.payload);
            if (produto) {
                return [produto];
            } else {
                return state;
            }
        },
        trocarCor: (state, action) => {
            const { cor, tipo } = action.payload
            const produto = estadoInicial.find(item => item.corPrincipal === cor && item.tipo.toString() === tipo);
            if (produto) {
                return [produto];
            }
            else {
                return state;
            }
        },
        getProdutosRelacionados: (state, action) => {
            const categoria = action.payload;
            const produtosRelacionados = estadoInicial.filter(item => item.categoria === categoria);
            console.log(produtosRelacionados)
            if (produtosRelacionados.length > 0) {
                return produtosRelacionados;
            } else {
                return state;
            }
        }
    },
});


export const { getProdutoPorId, trocarCor, getProdutosRelacionados } = produtosSlice.actions
export default produtosSlice.reducer;