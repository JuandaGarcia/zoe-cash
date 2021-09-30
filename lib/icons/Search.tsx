import { SVGProps } from 'react'

function Search(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			fill="none"
			stroke="#000"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="prefix__feather prefix__feather-search"
			{...props}
		>
			<circle cx={11} cy={11} r={8} />
			<path d="M21 21l-4.35-4.35" />
		</svg>
	)
}

export default Search
