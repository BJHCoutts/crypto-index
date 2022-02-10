export const countriesQuery = `
	query {
		countries {
			edges {
				node {
					name
					flag
					currencies {
						edges {
							node {
								code
							}
						}
					}
				}
			}
		}
	}
`