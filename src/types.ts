export type Currency = {
	node: {
		code: string
	}
}

export type Countries = {
	edges: Country[]
}

export type Country = {
	node: {
		currencies: {
			edges: Currency[]
		}
		flag: string,
		name: string,
	}
}