import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				{/* <Route path="teams" element={<Teams />}>
						<Route path=":teamId" element={<Team />} />
						<Route path="new" element={<NewTeamForm />} />
						<Route index element={<LeagueStandings />} />
					</Route> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
