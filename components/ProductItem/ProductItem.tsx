import useProducts from 'hooks/useProducts'
import Product from 'utils/types/Product'
import s from './ProductItem.module.scss'

const ProductItem = ({ product }: { product: Product }) => {
	const { toggleProduct } = useProducts()

	return (
		<label className={s.product_item}>
			<input
				type="checkbox"
				checked={product.selected}
				onChange={() => toggleProduct(product)}
			/>
			<span>{product.name}</span>
		</label>
	)
}

export default ProductItem
