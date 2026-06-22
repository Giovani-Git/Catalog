import Link from "next/link"

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-logo">
          🎮 Catalogo Games
        </Link>
        <nav className="header-nav">
          <Link href="/">Home</Link>
          <Link href="/cadastro">Cadastrar Produto</Link>
        </nav>
      </div>
    </header>
  )
}
