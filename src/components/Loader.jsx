import React from "react";
import { Audio } from "react-loader-spinner";

const Loader = () => {
	return (
		<div className="flex flex-row justify-center items-center w-full">
			<Audio
				height="60"
				width="60"
				color="#8884d8"
				ariaLabel="audio-loading"
				wrapperStyle={{}}
				wrapperClass="wrapper-class"
				visible={true}
			/>
		</div>
	);
};

export default Loader;
