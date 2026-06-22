export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Catalogo Games. Todos os direitos reservados.</p>
        <p>Dados fornecidos pela Fake Store API.</p>
      </div>
    </footer>
  )
}
