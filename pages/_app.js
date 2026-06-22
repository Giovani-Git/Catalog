import { useState } from "react"
import "../src/styles/globals.css"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

export default function App({ Component, pageProps }) {
  const [produtosCustom, setProdutosCustom] = useState([])

  function adicionarProduto(produto) {
    setProdutosCustom((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: produto.nome,
        price: produto.preco,
        description: produto.descricao,
        image: "https://via.placeholder.com/300",
      },
    ])
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <Component
          {...pageProps}
          produtosCustom={produtosCustom}
          adicionarProduto={adicionarProduto}
        />
      </main>
      <Footer />
    </>
  )
}
