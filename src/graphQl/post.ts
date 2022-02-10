import { apiKey } from "../constants/apiKey";
import { apiUrl } from "../constants/apiUrl";

export async function getData(query: string) {
	const results = await fetch(apiUrl, {
		method: 'POST',

		headers: {
			"Content-Type": "application/json",
			'X-API-KEY': apiKey
		},

		body: JSON.stringify({
			query
		})
	})
	const crypto = await results.json();
	console.log(crypto.data)
}