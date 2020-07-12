import React, { useState, useEffect } from "react"

import { getTopStories } from "../../api/news-api"
import { Article } from "../../types"

import "./TopStory.scss"

const TopStory: React.FC = () => {
	const [story, setStory] = useState<Article | null>(null)

	useEffect(() => {
		;(async () => {
			const topStories = await getTopStories()
			if (topStories) {
				const story = topStories[0]
				setStory(story)
			} else {
				setStory(null)
			}
		})()
	}, [])

	if (story === null) {
		return (
			<div
				style={{
					padding: "2em",
				}}
			>
				<h2>Note:</h2>
				<p>
					The News API is expensive for a small project like this, try builing the project
					locally to view in all its glory! For instructions, please see the README.md
					file on{" "}
					<a
						href="https://github.com/thisisthemurph/UK-Today"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					.
				</p>
			</div>
		)
	} else {
		return (
			<a href={story.url} className="top-story">
				<img className="top-story__img" src={story.urlToImage} alt={story.title} />
				<h1 className="top-story__title">{story.title}</h1>
			</a>
		)
	}
}

export default TopStory
