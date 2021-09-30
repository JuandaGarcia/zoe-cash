import { createContext, FC, useReducer, Dispatch } from 'react'

import {
	ProductsActionType,
	ProductsInitialState,
	ProductsReducer,
	IProductsState,
} from './states/productsState'

interface IContext {
	productsState: IProductsState
	productsDispatch: Dispatch<ProductsActionType>
}

export const Context = createContext({} as IContext)

export const AppContextProvider: FC = ({ children }) => {
	const [productsState, productsDispatch] = useReducer(
		ProductsReducer,
		ProductsInitialState
	)

	console.log(productsState)

	return (
		<Context.Provider
			value={{
				productsState,
				productsDispatch,
			}}
		>
			{children}
		</Context.Provider>
	)
}
