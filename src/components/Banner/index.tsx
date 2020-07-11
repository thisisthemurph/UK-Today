import React from "react"
import { Link } from "react-router-dom"

import "./Banner.scss"

const Banner: React.FC = () => {
	return (
		<div className="banner">
			<div className="container">
				<p className="banner__text">Welcome to UK TODAY NETWORK'S ONLINE EXPERIENCE</p>
				<Link to="/learn-more" className="banner__btn">
					Learn More
				</Link>
			</div>
		</div>
	)
}

export default Banner
