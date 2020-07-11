import React from "react"

import { Article } from "../../types"

import moment from "moment"

interface StoryProps {
	article: Article
}

const StoryListItem: React.FC<StoryProps> = ({ article }: StoryProps) => {
	const publishedAt = moment(new Date(article.publishedAt)).format("h:mm A MMM D, YYYY")

	/**
	 * Removes the ` - author` text from the end of the given headline
	 * @param headline the headline/title to be formatted
	 */
	const formatHeadline = (headline: string): string => {
		const ocurrances: number = (headline.match(/\s-\s/g) || []).length

		if (ocurrances >= 1) {
			let parts: string[] = headline.split(" - ", ocurrances)
			return parts.join(" - ")
		}

		return headline
	}

	return (
		<a target="_blank" rel="noopener noreferrer" href={article.url} className="story-item">
			<h2 className="story-item__title">{formatHeadline(article.title)}</h2>
			<span className="story-item__date">{publishedAt}</span>
			<img className="story-item__img" src={article.urlToImage} alt={article.title} />
		</a>
	)
}

export default StoryListItem
