import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
	AiOutlineTwitter,
	AiOutlineInstagram,
	AiOutlineFacebook,
	AiOutlineYoutube,
} from "react-icons/ai";

const Navbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		const isVisible =
			prevScrollPos > currentScrollPos;

		setPrevScrollPos(currentScrollPos);
		setVisible(isVisible);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	return (
		<nav
			className={`${`bg-blue-500 text-white transition-all duration-300 ${
				visible ? "opacity-100" : "opacity-0"
			} `} w-screen fixed top-0`}
		>
			<div className="h-14 bg-gray-50 flex justify-between items-center sm:px-10 px-40 text-4xl text-black">
				<NavLink to="/">WeatherGraph</NavLink>
				<div className="flex sm:hidden gap-8 text-2xl">
					<AiOutlineInstagram className="cursor-pointer" />
					<AiOutlineFacebook className="cursor-pointer" />
					<AiOutlineTwitter className="cursor-pointer" />
					<AiOutlineYoutube className="cursor-pointer" />
				</div>
			</div>
			<div className="h-14 flex justify-between bg-orange-400 sm:px-10 px-40 pr-[50%] items-center text-3xl">
				<NavLink to="/forecast">Forecasts</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
