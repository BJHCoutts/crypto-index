export const get = async (apiUrl:string) => {

	try {

		const res = await fetch(apiUrl)

		if (res.status === 200) {

			const results = await res.json()
	
			return results

		}else {
			console.error('Status !== 200')
		}

	} catch (error) {
		console.error(error.message)
	}
}