import React from "react"
import { Link } from "react-router-dom"

import "./Header.scss"

const Header: React.FC = () => {
	return (
		<header className="header">
			<Link className="header__logo" to="/">
				UK TODAY
			</Link>
		</header>
	)
}

export default Header
