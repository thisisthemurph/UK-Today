import React, { useState, useEffect } from "react"

import StoryListItem from "./StoryListItem"
import { getTopStories } from "../../api/news-api"
import { Article } from "../../types"

import "./StoryList.scss"

const StoryList: React.FC = () => {
	const [article, setArticles] = useState<Article[]>([])

	useEffect(() => {
		;(async () => {
			const topStories = await getTopStories()
			if (topStories) {
				const articles = topStories.splice(1, 11)
				setArticles(articles)
			} else {
				setArticles([])
			}
		})()
	}, [])
	return (
		<main className="story-list">
			{article.map((article, idx) => {
				return <StoryListItem key={idx} article={article} />
			})}
		</main>
	)
}

export default StoryList
