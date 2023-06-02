import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Forecast from "./pages/Forecast";
import Footer from "./components/Footer";
import HistoricalWeatherData from "./pages/HistoricalWeatherData";

function App() {
	return (
		<div className="text-white grid overflow-x-hidden mt-28">
			<Navbar />

			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/forecast" element={<Forecast />} />
					<Route path="/historical" element={<HistoricalWeatherData />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
