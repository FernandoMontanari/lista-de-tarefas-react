import { useEffect, useState } from 'react'
import './ListaCompras.css'
import Icone from '../../assets/icon2.png';

function ListaCompras() {

    const listaStorage = localStorage.getItem('ListaProdutos')

    const [listaProdutos, setListaProdutos] = useState(listaStorage ? JSON.parse(listaStorage) : [])

    useEffect( () => {
        localStorage.setItem('ListaProdutos', JSON.stringify(listaProdutos))
        , [listaProdutos]})

    const [produtoNome, setProdutoNome] = useState([])
    const [produtoQuantidade, setProdutoQuantidade] = useState([])
    const [produtoValor, setProdutoValor] = useState([])

    function adicionarProduto(form) {
        form.preventDefault()

        setListaProdutos([...listaProdutos,
            {produto: produtoNome,
            quantidade: produtoQuantidade,
            valor: produtoValor,
            isCompleted: false
        }])

        setProdutoNome("")
        setProdutoQuantidade("")
        setProdutoValor("")

        document.getElementById('input-nome-produto').focus();
    }

    function clicou(index) {
        const listaAux = [...listaProdutos]
        listaAux[index].isCompleted = !listaAux[index].isCompleted
        setListaProdutos(listaAux)
    }

    function deleta(index) {
        if(confirm("Você tem certeza?")){
            alert("Produto apagado!")
            const listaAux = [...listaProdutos]
            listaAux.splice(index, 1)
            setListaProdutos(listaAux)
        }
    }

    function deletaTudo() {
        if(confirm("Você tem certeza?")){
            alert("Lista apagada!")
            setListaProdutos([])
        }
    }

    return (
        <div className="listaCompras">
            <h1>Lista de Compras</h1>
                <form onSubmit={adicionarProduto}>
                    <input
                        type="text"
                        placeholder="Produto"
                        id="input-nome-produto"
                        required
                        value={produtoNome}
                        onChange={(e) => { setProdutoNome(e.target.value) }}
                    />
                    <input
                        type="number"
                        placeholder="Quantidade"
                        id="input-quantidade-produto"
                        value={produtoQuantidade}
                        onChange={(e) => { setProdutoQuantidade(e.target.value) }}
                    />
                    {/* <input 
                        type="text"
                        placeholder="Valor"
                        id="input-valor-produto"
                        required
                        value={produtoValor}
                        onChange={(e) => { setProdutoValor(e.target.value) }}
                    /> */}
                    <button className="add" type="submit">Adicionar</button>
                </form>

                
                {
                    listaProdutos.length > 0 &&
                    <div className="titulo">
                        <div className="nomeItem">Produto</div>
                        <div className="quantidadeItem">Quantidade</div>
                    </div>
                }

                <div>
                {

                    listaProdutos.length < 1
                    ?

                    <div>
                        <img className="icone-central" src={Icone} />
                        <p className="txt-central"><br></br>Os itens adicionados são armazenados no Local Storage do dispositivo.<br></br>Ferramenta montada como objetivo de estudo utilizando React + Vite!</p>
                    </div>

                    :

                    listaProdutos.map( (produto, index) => (
                        <div key={index} className={produto.isCompleted ? "item completo" : "item"} onDoubleClick={ () => { clicou(index) }}>
                            <div className="nomeItem"><span>{ produto.produto }</span></div>
                            <div className="quantidadeItem"><span>{ produto.quantidade }</span></div>
                            {/* <div className="valorItem"><span>R$ { produto.valor }</span></div> */}
                            <button className='del' onClick={ () => { deleta(index) }}>Deletar</button>
                        </div>
                    ))
                }

                </div>
                {
                    listaProdutos.length > 0 &&
                    <button className="deleteAll" onClick={ () => { deletaTudo() }}>DELETAR TODOS OS ITENS</button>
                }
        </div>
    )
}

export default ListaCompras