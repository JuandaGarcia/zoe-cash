import type { NextPage } from 'next'
import Input from 'components/Input/Input'
import s from 'styles/pages/Home.module.scss'

const Home: NextPage = () => {
	return (
		<main className={s.home}>
			<h1 className={s.home__title}>Configuración líneas de producción</h1>
			<section>
				<Input label="Buscar" placeholder="Buscar producto..." type="all" />
			</section>
			<section>
				<Input
					label="Buscar"
					placeholder="Buscar producto..."
					type="selected"
				/>
			</section>
		</main>
	)
}

export default Home
