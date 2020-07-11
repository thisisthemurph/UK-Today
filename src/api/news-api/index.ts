import client from "../api-client"
import { Article } from "../../types"

export const getTopStories = async (): Promise<Article[] | null> => {
	const topStories = await client(`top-headlines?country=gb`)
	return topStories?.articles || null
}
