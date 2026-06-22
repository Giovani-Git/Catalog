import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Img from "../../src/components/Img"
import Botao from "../../src/components/Botao"

export default function DetalhesProduto() {
  const router = useRouter()
  const { id } = router.query
  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    if (!id) return
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((dados) => {
        setProduto(dados)
        setCarregando(false)
      })
      .catch(() => setCarregando(false))
  }, [id])

  if (carregando) {
    return <div className="loading">Carregando...</div>
  }

  if (!produto) {
    return <div className="loading">Produto não encontrado.</div>
  }

  return (
    <section className="detalhes">
      <div className="detalhes-container">
        <div className="detalhes-image">
          <Img src={produto.image} alt={produto.title} />
        </div>
        <div className="detalhes-info">
          <h1>{produto.title}</h1>
          <p className="detalhes-preco">R$ {produto.price.toFixed(2)}</p>
          <p className="detalhes-categoria">Categoria: {produto.category}</p>
          <p className="detalhes-descricao">{produto.description}</p>
          <Link href="/">
            <Botao>Voltar</Botao>
          </Link>
        </div>
      </div>
    </section>
  )
}
