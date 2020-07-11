import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Banner from "./components/Banner"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import LearnMore from "./pages/LearnMore"

import "./App.scss"

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Banner />
				<Header />

				<Switch>
					<Route path="/learn-more">
						<LearnMore />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>

				<Footer />
			</div>
		</Router>
	)
}

export default App
