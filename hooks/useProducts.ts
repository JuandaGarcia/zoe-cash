import Product from 'utils/types/Product'
import { useContext } from 'react'
import { Context } from 'context/AppContext'

const useProducts = () => {
	const { productsState, productsDispatch } = useContext(Context)
	const { products } = productsState

	const toggleProduct = (product: Product) =>
		productsDispatch({ type: 'toggle-product', payload: product })

	const clear = () => productsDispatch({ type: 'clear' })

	return { products, toggleProduct, clear }
}

export default useProducts
