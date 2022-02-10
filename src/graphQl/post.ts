import { apiUrl } from "../constants/apiUrl";

export const post = async (query: string) => {
	const res = await fetch(apiUrl, {
		method: 'POST',

		headers: {
			"Content-Type": "application/json",
		},

		body: JSON.stringify({
			query
		})
	})
	
	const results = await res.json()
	
	return results.data
}