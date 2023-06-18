import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import ListaTarefas from './pages/lista-tarefas'
import ListaComprasPage from './pages/lista-compras'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <Routes>
          <Route path='/lista-tarefas' element={<ListaTarefas />} />
          <Route path='/' element={<ListaComprasPage />} />
      </Routes>
    </BrowserRouter>
  </div>
)
