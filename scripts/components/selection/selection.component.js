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
				<button 
				className={(this.props.data.isSelected === false || this.props.data.isSelected === undefined)?"not-selected":"selected"}
				onClick={(event)=>{this.props.selectSelection(this.props.categoryIndex,
					this.props.subCategoryIndex,
					this.props.eventIndex,this.props.data);}}
				disabled={this.props.data.active ===false || this.props.eventStatus === false}>
				 {(this.props.data.isSelected === false || this.props.data.isSelected === undefined)? "Bet":"Selected"}
				</button>
			</div>
		);
	}

}

export default Selection;