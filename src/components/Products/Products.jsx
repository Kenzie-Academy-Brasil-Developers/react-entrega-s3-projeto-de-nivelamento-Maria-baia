import { useState } from "react";
import BuyProducts from "../BuyProducts/BuyProducts";

const Products = () => {
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [buy, setBuy] = useState([])

  const addProduct = () => {
    setProducts([...products, {code,
    name,
    description,
    price,
    discount,}])
  }

  const buyProduct = (product) => {
    setBuy([...buy, product])
  }

    return(
        <div>
          <BuyProducts buy={buy} products={products}/>
          <div>
            <div className="buyProducts">
              <h2>Cadastre produtos</h2>
              <form>
                <input value={code} placeholder="Código"
                onChange={(event) => setCode(event.target.value)}></input>
                <input value={name} placeholder="Nome"
                onChange={(event) => setName(event.target.value)}></input>
                <input value={description} placeholder="Descrição"
                onChange={(event) => setDescription(event.target.value)}></input>
                <input value={price} placeholder="Preço"
                onChange={(event) => setPrice(event.target.value)}></input>
                <input value={discount} placeholder="Desconto"
                onChange={(event) => setDiscount(event.target.value)}></input>
                <button type='button' onClick={() => addProduct()}>Adicionar</button>
              </form>
            </div>
            <div className="buyProducts">
              <ul>{products.map((product, index) => (
                <li key={index}>
                  <h3>{product.name}</h3>
                  <h4>{product.description}</h4>
                  <span>De R$ {product.price}</span>
                  <p>R$ {(product.price-product.discount).toFixed(2)}</p>
                  <button type="button" onClick={() => buyProduct(product)}>Adicionar ao carrinho</button>
                </li>
              ))}</ul>
            </div>
          </div>
        </div>
    )
}

export default Products 