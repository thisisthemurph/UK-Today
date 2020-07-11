import React from "react"

const LearnMore = () => {
	return (
		<main className="page container">
			<div className="page__content">
				<h1 className="heading-large">UK Today Network Online Experience</h1>

				<p className="text-section">
					It appears you are visiting from an unknown location on the planet Earth.
				</p>

				<p className="text-section">
					This project is a clone of the{" "}
					<a href="http://eu.usatoday.com" target="_blank" rel="noopener noreferrer">
						EU USA TODAY
					</a>{" "}
					website, using the{" "}
					<a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
						News API
					</a>{" "}
					to fetch regular news updates from The UK.
				</p>

				<p className="text-section">
					This simple project has been built using React, SCSS and data from the people
					over at News API.
				</p>

				<p className="text-section">
					If you would like to contact me, you can get in touch through my{" "}
					<a
						href="https://github.com/thisisthemurph"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>{" "}
					account.
				</p>
			</div>
		</main>
	)
}

export default LearnMore
