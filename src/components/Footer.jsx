import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
	AiOutlineTwitter,
	AiOutlineInstagram,
	AiOutlineFacebook,
	AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="mt-10 bg-orange-400 w-screen">
			<div className="px-10 sm:px-40 flex justify-between py-5 items-center text-4xl">
				<NavLink to="/">Kuba Mrowiec</NavLink>
				<div className="flex sm:hidden gap-8 text-2xl">
					<div>&copy; 2023 WeatherGraph</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
