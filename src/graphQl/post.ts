import { apiUrl } from "../constants/apiUrl";

export const post = async (query: string) => {

	try {

		const res = await fetch(apiUrl, {
			method: 'POST',
	
			headers: {
				"Content-Type": "application/json",
			},
	
			body: JSON.stringify({
				query
			})
		})

		if (res.status === 200) {
			const results = await res.json()
	
			return results.data

		}else {
			console.error('Status !== 200')
		}

	} catch (error) {
		console.error(error.message)
	}
}