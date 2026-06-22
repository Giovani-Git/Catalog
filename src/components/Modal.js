import Botao from "./Botao"

export default function Modal({ aberto, titulo, mensagem, onConfirmar, onCancelar }) {
  if (!aberto) return null

  return (
    <div className="modal-overlay" onClick={onCancelar}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{titulo}</h2>
        <p className="modal-message">{mensagem}</p>
        <div className="modal-actions">
          <Botao className="botao-cancelar" onClick={onCancelar}>
            Cancelar
          </Botao>
          <Botao className="botao-confirmar" onClick={onConfirmar}>
            Confirmar
          </Botao>
        </div>
      </div>
    </div>
  )
}
