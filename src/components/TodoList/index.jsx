import React, {useState, useEffect} from "react";
import './TodoList.css';
import Icone from '../../assets/icon.webp';

function TodoList() {

    //LOCAL STORAGE
    const listaStorage = localStorage.getItem('Lista');

    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);
    const [novoItem, setNovoItem] = useState([]);

    useEffect(() => {
        localStorage.setItem('Lista', JSON.stringify(lista))
    },[lista])

    //FUNCTIONS
    function adicionaItem(form) {
        form.preventDefault();
        if(!novoItem) {
            return;
        }

        setLista([...lista, {text: novoItem, isCompleted: false }])
        setNovoItem("");
        document.getElementById('input-entrada').focus();
    }

    function clicou(index) {
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    }

    function deleta(index) {
        const listaAux = [...lista];
        listaAux.splice(index,1);
        setLista(listaAux);
    }

    function deletaTudo() {
        setLista([]);
    }

    //HTML
    return (
        <div className="listaTarefas">
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>               
                <input
                id="input-entrada"
                type="text"
                required
                value={novoItem}
                onChange={(e)=>{setNovoItem(e.target.value)}}
                placeholder="Adicione uma tarefa"
                />
                <button className="add" type="submit">Adicionar</button>
            </form>
            <div style={{textAlign:'center'}} >
                {
                    lista.length < 1
                    ?
                    <img className="icone-central" src={Icone} />
                    :
                    lista.map((item, index)=>(
                        <div key={index} className={item.isCompleted ? "item completo" : "item"}>
                            <span onDoubleClick={() => { clicou(index)} }>{ item.text }</span>
                            <button onClick={ () => { deleta(index) }} className="del">Deletar</button>
                        </div>
                    ))
                }
                {
                    lista.length > 0 &&
                    <button onClick={ () => { deletaTudo() }} className="deleteAll">DELETAR TODAS AS TAREFAS</button>
                }
            </div>
        </div>
    )
}

export default TodoList