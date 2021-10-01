import { useState } from "react"

const BuyProducts = ({buy, products}) => {
    const [cartTotal, setCartTotal] = useState(0);

    return(
        <div className="buyProducts">
            <div>
                <h3>Subtotal - R${buy.map((shop) => shop)
                .reduce((cartTotal, current) => cartTotal + parseFloat(current.price - current.discount), cartTotal)
                .toFixed(2)}</h3>
                <p>Economizou - R${buy.map((code) => code)
                .reduce((cartTotal, current) => (cartTotal + parseFloat(current.discount)), cartTotal)
                .toFixed(2)}</p>
            </div>
            <div>
                <h2>Carrinho:</h2>
                <ul>{buy.map((product) =>  (
                <li key={product.code}>
                <h3>{product.name}</h3>
                <h4>{product.description}</h4>
                <span>De R$ {product.price}</span>
                <p>R$ {(product.price-product.discount).toFixed(2)}</p>
            </li>
          ))}</ul>
            </div>
        </div>
    )
}

export default BuyProducts