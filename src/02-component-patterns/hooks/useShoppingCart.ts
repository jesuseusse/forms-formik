import { useState } from 'react'
import { ProductInCart, Product } from '../interfaces/interfaces'

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({
    count,
    product
  }: {
    count: number
    product: Product
  }) => {
    // console.log({ count })

    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0
      }
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart
        return rest
      }

      return {
        ...oldShoppingCart,
        [product.id]: productInCart
      }
    })
  }

  return { shoppingCart, onProductCountChange }
}
