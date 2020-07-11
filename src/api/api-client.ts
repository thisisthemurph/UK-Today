const BASE_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

interface APIResult {
	status: string
	totalResults: number
	articles: [any]
}

const client = async (endpoint: string): Promise<APIResult | null> => {
	const config = {
		method: "GET",
		headers: {
			"X-Api-key": API_KEY || "",
		},
	}

	try {
		const res = await fetch(`${BASE_URL}${endpoint}`, config)

		if (res) {
			const data = res.json()

			if (res.ok) {
				return data
			} else {
				console.log("There is an issue with the response")
				return Promise.reject(data)
			}
		}

		return null
	} catch (err) {
		console.error("There has been an error with the request")
		console.error(err)

		return null
	}
}

export default client
