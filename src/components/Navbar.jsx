import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
	AiOutlineTwitter,
	AiOutlineInstagram,
	AiOutlineFacebook,
	AiOutlineYoutube,
} from "react-icons/ai";
import WeatherGraph from "../assets/WeatherGraph.png";

const Navbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		const isVisible = prevScrollPos > currentScrollPos;

		setPrevScrollPos(currentScrollPos);
		setVisible(isVisible);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	return (
		<nav
			className={`${`bg-blue-500 text-white transition-all z-10 duration-300 ${
				visible ? "opacity-100" : "opacity-0"
			} `} w-screen fixed top-0`}
		>
			<div className="h-14 bg-gray-50 flex justify-between items-center sm:px-10 px-40 text-4xl text-black">
				<NavLink to="/">
					<img src={WeatherGraph} alt="logo"/>
				</NavLink>{" "}
				<div className="flex sm:hidden gap-8 text-2xl">
					<AiOutlineInstagram className="cursor-pointer" />
					<AiOutlineFacebook className="cursor-pointer" />
					<AiOutlineTwitter className="cursor-pointer" />
					<AiOutlineYoutube className="cursor-pointer" />
				</div>
			</div>
			<div className="h-14 flex justify-between bg-orange-400 sm:px-10 px-40 pr-[50%] items-center text-4xl">
				<NavLink to="/forecast" className="hover-underline-animation">Forecast</NavLink>
				<NavLink to="/historical" className="hover-underline-animation">Historical Weather Data</NavLink>
				<NavLink to="/forecast" className="hover-underline-animation">Map</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
