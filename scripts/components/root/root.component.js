import React from "react";
import UtilityServices from "./../../services/utility.service";
class RootComponent extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	render(){
		return (
			<section className="body-container">
				<section className="header">
					Header
				</section>

				<section className="content-container">
					Content Section
				</section>
			</section>
		);
	}

}

export default RootComponent;