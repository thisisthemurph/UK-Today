import React from "react"

import TopStory from "../components/TopStory"
import StoryList from "../components/StoryList"

const Home = () => {
	return (
		<main className="page container">
			<TopStory />
			<StoryList />
		</main>
	)
}

export default Home
