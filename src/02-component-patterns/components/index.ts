import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductCardHOCPros } from '../interfaces/interfaces'

import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'
import { ProductTitle } from './ProductTitle'

export { ProductImage } from './ProductImage'
export { ProductButtons } from './ProductButtons'
export { ProductTitle } from './ProductTitle'

export const ProductCard: ProductCardHOCPros = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

export default ProductCard
