import ProductItem from 'components/ProductItem/ProductItem'
import useInput from 'hooks/useInput'
import useProducts from 'hooks/useProducts'
import Search from 'lib/icons/Search'
import React, { forwardRef, InputHTMLAttributes, useState } from 'react'
import s from './Input.module.scss'

type TInput = InputHTMLAttributes<HTMLInputElement>

interface Props extends TInput {
	label: string
	type: 'all' | 'selected'
}

const Input = forwardRef<HTMLInputElement, Props>(
	({ label, type, ...props }, ref) => {
		const { products, clear } = useProducts()
		const [openMenu, setOpenMenu] = useState(false)

		const currentArray =
			type === 'all' ? products : products.filter(product => product.selected)

		const { value, handleChange, searchResult } = useInput(currentArray)

		return (
			<div onClick={() => setOpenMenu(true)} className={s.main_container}>
				<label>
					<span className={s.label__text}>{label}</span>
					<div className={s.container}>
						<div className={s.container__icon}>
							<Search />
						</div>
						<input
							className={`${s.input} ${s.icon}`}
							{...props}
							ref={ref}
							onChange={handleChange}
							value={value}
						/>
					</div>
				</label>
				{type === 'selected' && (
					<div className={s.list__buttons}>
						<button className={s.list__buttons__button} onClick={clear}>
							Limpiar
						</button>
						<button
							className={s.list__buttons__button}
							onClick={() => {
								alert(
									currentArray.length
										? 'Enviado'
										: 'No hay productos seleccionados'
								)
								clear()
							}}
						>
							Crear
						</button>
					</div>
				)}
				{openMenu && currentArray.length ? (
					<div className={s.list}>
						{value ? (
							<div>
								<p>Resultados para: {value}</p>
								{searchResult.length ? (
									searchResult.map(product => (
										<ProductItem key={product.id} product={product} />
									))
								) : (
									<p>No se encontraron productos.</p>
								)}
							</div>
						) : (
							currentArray.map(product => (
								<ProductItem key={product.id} product={product} />
							))
						)}
					</div>
				) : null}
			</div>
		)
	}
)

Input.displayName = 'Input'

export default Input
