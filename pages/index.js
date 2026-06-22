import { useState, useEffect } from "react"
import Card from "../src/components/Card"

export default function Home({ produtosCustom }) {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((dados) => {
        setProdutos(dados)
        setCarregando(false)
      })
      .catch(() => setCarregando(false))
  }, [])

  if (carregando) {
    return <div className="loading">Carregando...</div>
  }

  const todosProdutos = [...produtosCustom, ...produtos]

  return (
    <section className="home">
      <h1 className="home-title">Catálogo de Produtos</h1>
      <div className="produtos-grid">
        {todosProdutos.map((produto) => (
          <Card
            key={produto.id}
            id={produto.id}
            title={produto.title}
            image={produto.image}
            price={produto.price}
          />
        ))}
      </div>
    </section>
  )
}
