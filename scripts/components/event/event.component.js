import React from "react";
import Selection from "./../selection/selection.component";
//import "./styles/event.style.css";

class Event extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	componentWillReceiveProps(){

	}

	render(){
		return (
			<div className={"event-container"+(this.props.eventObj.active?" active":" inactive")}>
				<h1>{this.props.eventObj.name}</h1>
				{(this.props.eventObj.selection!==undefined?this.props.eventObj.selection:[]).map(
					(selection,selectionIndex)=><div>
					<Selection data={selection}
					eventStatus={this.props.eventObj.active}
					></Selection>
					</div>
				)}
			</div>
		);
	}

}

export default Event;