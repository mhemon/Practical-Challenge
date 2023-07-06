import { getStoredCart } from "../utils/AddToDB"

export const productsAndCartData = async () => {
  const productsData = await fetch('https://practical-challenge-server.vercel.app/productswithouttoken')
  const products = await productsData.json() 
  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundProduct = products.find(product => product.id === id)
    if (foundProduct) {
      const quantity = savedCart[id]
      foundProduct.quantity = quantity
      initialCart.push(foundProduct)
    }
  }

  return { products, initialCart }
}
