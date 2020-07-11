import React from "react"

import "./Footer.scss"

const F: React.FC = () => {
	return (
		<footer className="footer container">
			<div className="footer__links">
				<a href="/">Terms of Service</a>
				<a href="/">Privacy Notice</a>
			</div>
			<div className="footer__copyright">
				<p>© Copyright Gannett 2018</p>
			</div>
		</footer>
	)
}

export default F
