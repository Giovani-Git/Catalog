import Link from "next/link"
import Img from "./Img"

export default function Card({ id, title, image, price }) {
  return (
    <div className="card">
      <div className="card-image">
        <Img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">R$ {price.toFixed(2)}</p>
        <Link href={`/produto/${id}`} className="botao">
          Ver Detalhes
        </Link>
      </div>
    </div>
  )
}
