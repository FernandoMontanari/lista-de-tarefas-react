import './BarraNavegacao.css'
import Home from '../../pages/home'
import ListaCompras from "../../pages/lista-compras"
import ListaTarefas from "../../pages/lista-tarefas"

function BarraNavegacao() {
    return (
        <nav>
            <div className="container">
                <a href="/" className="btn-menu">Lista de Compras</a>
                <a href="/lista-tarefas" className="btn-menu">Lista de Tarefas</a>
            </div>
        </nav>
    )
}

export default BarraNavegacao