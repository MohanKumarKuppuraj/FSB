import React from "react";
import Categories from "./../categories/categories.component";
import EventList from "./../event-list/event-list.component";
import UtilityServices from "./../../services/utility.service";
//import "./styles/fsb.events.style.css";

class FSBEvents extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			"allEvents":{},
			"selectedSubCategory":-1
		};
		this.changeSubCategory = this.changeSubCategory.bind(this);
	}

	async loadEvents(){
		var data = await UtilityServices.getSelections();
		console.log("data in loadEvents",data);
		this.setState({"allEvents":data,"selectedSubCategory":(data.category!==undefined && data.category.length>0 && data.category[0].subcat!==undefined && data.category[0].subcat.length>0)?data.category[0].subcat[0].id:-1})
	}

	changeSubCategory = function(subCategory){
		this.setState({"selectedSubCategory":subCategory.id});
	}

	componentDidMount(){
		this.loadEvents();
	}

	componentWillReceiveProps(){

	}

	render(){
		return (
			<section className="fsb-events">
				<Categories allEvents={this.state.allEvents}
				changeSubCategory={this.changeSubCategory}
				selectedSubCategory={this.state.selectedSubCategory}
				></Categories>
				<EventList allEvents={this.state.allEvents}
					selectedSubCategory={this.state.selectedSubCategory}
				></EventList>
			</section>
		);
	}

}

export default FSBEvents;