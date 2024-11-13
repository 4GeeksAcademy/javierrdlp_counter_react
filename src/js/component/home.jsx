import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import watchImage from "../../img/watch.png";
import Digit from "./Digit"
import DigitWatch from "./DigitWatch";

//create your first component
const Home = ({seconds}) => {
	return (
		<div className="text-center">			
			<div className="row mt-5 bg-dark">
				<div className="col-2"></div>
				<DigitWatch url={watchImage}/>				
				<Digit numero= {seconds[0]} />
				<Digit numero= {seconds[1]} />
				<Digit numero= {seconds[2]} />
				<Digit numero= {seconds[3]} />
				<Digit numero= {seconds[4]} />
				<Digit numero= {seconds[5]} />
				<div className="col-2"></div>			
			</div>			
		</div>
	);
};

export default Home;
