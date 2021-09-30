import Product from 'utils/types/Product'
import { ChangeEvent, useState } from 'react'

const useInput = (productList: Product[]) => {
	const [value, setValue] = useState('')
	const [searchResult, setSearchResult] = useState<Product[]>([])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		setValue(value)

		const newResult = productList.filter(project => {
			return project.name.toLowerCase().includes(value.toLowerCase())
		})

		setSearchResult(newResult)
	}

	return { value, handleChange, searchResult }
}

export default useInput
