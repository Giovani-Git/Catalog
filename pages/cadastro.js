import { useState } from "react"
import Botao from "../src/components/Botao"
import Modal from "../src/components/Modal"

export default function Cadastro() {
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [descricao, setDescricao] = useState("")
  const [modalAberto, setModalAberto] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setModalAberto(true)
  }

  function confirmarCadastro() {
    const produto = { nome, preco: parseFloat(preco), descricao }
    console.log(produto)
    setModalAberto(false)
    setNome("")
    setPreco("")
    setDescricao("")
  }

  function cancelarCadastro() {
    setModalAberto(false)
  }

  return (
    <section className="cadastro">
      <h1>Cadastrar Novo Produto</h1>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço</label>
          <input
            id="preco"
            type="number"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <Botao type="submit">Salvar Produto</Botao>
      </form>

      <Modal
        aberto={modalAberto}
        titulo="Confirmação"
        mensagem="Deseja realmente cadastrar este produto?"
        onConfirmar={confirmarCadastro}
        onCancelar={cancelarCadastro}
      />
    </section>
  )
}
