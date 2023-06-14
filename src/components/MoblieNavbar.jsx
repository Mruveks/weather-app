import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import WeatherGraph from "../assets/WeatherGraph.png";
import "../css/animations.css";
const MobileNavbar = () => {
	const [navHeight, setNavHeight] = useState("h-0");

	const [isRotated, setIsRotated] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsRotated(!isRotated);
		setIsOpen(!isOpen);
	};
	function openNav() {
		handleClick();
		if (navHeight === "h-fit") {
			setNavHeight("h-0");
		} else setNavHeight("h-fit");
	}

	return (
		<nav
			className="bg-blue-500 text-white transition-all overflow-y-hidden duration-300 opacity-100
			w-screen fixed top-0 sm:block hidden"
		>
			<div className="h-28 bg-gray-50 flex justify-between items-center px-10  text-4xl text-black">
				<NavLink to="/">
					<img src={WeatherGraph} alt="logo" />
				</NavLink>
				<div className="bg-gray-300 rounded-lg p-1">
					<AiOutlineMenu
						onClick={() => {
							openNav();
						}}
						className={`box ${isRotated ? "rotate" : ""} ${
							isOpen ? "" : "rotate-back"
						} cursor-pointer transition duration-300`}
					/>
				</div>
			</div>
			<div
				className={` ${navHeight} transition-all ${isOpen ? "py-2" : ""} space-y-2 duration-300 grid justify-between bg-orange-400 px-10 items-center text-4xl`}
			>
				<NavLink
					to="/forecast"
					className="hover:text-black"
					onClick={() => {
						openNav();
					}}
				>
					Forecast
				</NavLink>
				<NavLink
					to="/historical"
					className="hover:text-black"
					onClick={() => {
						openNav();
					}}
				>
					Historical Data
				</NavLink>
				<NavLink
					to="/forecast"
					className="hover:text-black"
					onClick={() => {
						openNav();
					}}
				>
					Map
				</NavLink>
			</div>
		</nav>
	);
};

export default MobileNavbar;
