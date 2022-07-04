import React from "react";
import Header from "./../header/header.component";
import Footer from "./../footer/footer.component";
import FSBEvents from "./../fsb-events/fsb.events.component";
class RootComponent extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	render(){
		return (
			<section className="body-container">
				<Header></Header>
				<section className="content-container">
					<FSBEvents></FSBEvents>
				</section>
				<Footer></Footer>
			</section>
		);
	}

}

export default RootComponent;