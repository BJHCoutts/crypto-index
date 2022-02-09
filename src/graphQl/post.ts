import axios from "axios"
import { apiUrl } from "../constants/apiUrl"

const api = axios.create({
  baseURL: apiUrl as string,
  timeout: 6000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

interface PostInput {
	query: string,
	output?: string,
}

export const post = async <T> (postInput: PostInput, input={}):Promise<T> => {

	const { query, output } = postInput
	
	try {
	
		const res = await api.post('/graphql', {
			query,
			variables: { ...input },
		})
		
		if (res.status === 200) {
			if (res.data.errors) {
	
				console.error(`This is a 200 Post ${query} error`)
				res.data.errors.forEach((error: Error) => {
					console.error(error.message)
				});
	
			}
	
			return res.data.data[output]
	
		} else {
			console.error(`This is a status !== 200 error Post ${query} error`)
			throw new Error(res.data.response)
	
		}
	} catch (error) {
		console.error(`Post Catch error for ${output} error: ${error}`)
	}
}