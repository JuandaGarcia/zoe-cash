import useProducts from 'hooks/useProducts'
import { FC, LabelHTMLAttributes } from 'react'
import Product from 'utils/types/Product'
import s from './ProductItem.module.scss'

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
	product: Product
}

const ProductItem = ({ product, onClick }: Props) => {
	const { toggleProduct } = useProducts()

	return (
		<label onClick={onClick} className={s.product_item}>
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
