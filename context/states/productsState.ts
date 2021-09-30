import productList from 'utils/ProductList'
import Product from 'utils/types/Product'

export interface IProductsState {
	products: Product[]
}

export const ProductsInitialState: IProductsState = {
	products: productList,
}

export type ProductsActionType =
	| { type: 'clear' }
	| { type: 'toggle-product'; payload: Product }

export const ProductsReducer = (
	state: IProductsState,
	action: ProductsActionType
): IProductsState => {
	switch (action.type) {
		case 'toggle-product':
			const newArray = state.products.map(product =>
				product.id === action.payload.id
					? { ...product, selected: !product.selected }
					: product
			)

			return {
				...state,
				products: newArray,
			}
		case 'clear':
			return {
				...ProductsInitialState,
			}
		default:
			return state
	}
}
