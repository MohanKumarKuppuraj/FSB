import React from "react";
//import "./styles/selection.style.css";

class Selection extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	componentWillReceiveProps(){

	}

	render(){
		return (
			<div className="selection-container">
				<span className="selection-title">{this.props.data.name}</span>
				<span className="selection-price">£{this.props.data.price}</span>
				<button disabled={this.props.data.active ===false || this.props.eventStatus === false}>Draw</button>
			</div>
		);
	}

}

export default Selection;