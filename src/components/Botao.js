export default function Botao({ children, onClick, type = "button", className = "" }) {
  return (
    <button type={type} onClick={onClick} className={`botao ${className}`}>
      {children}
    </button>
  )
}
