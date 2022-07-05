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
		this.selectSelection = this.selectSelection.bind(this);
	}

	async loadEvents(){
		var data = await UtilityServices.getSelections();
		this.setState({"allEvents":data,"selectedSubCategory":(data.category!==undefined && data.category.length>0 && data.category[0].subcat!==undefined && data.category[0].subcat.length>0)?data.category[0].subcat[0].id:-1})
	}

	changeSubCategory = function(subCategory){
		this.setState({"selectedSubCategory":subCategory.id});
	}

	selectSelection = function(categoryIndex,subCategoryIndex,eventIndex,selection){
		console.log("selection",selection);
		var allEvents = this.state.allEvents;
		for(var i in allEvents.category[categoryIndex].subcat[subCategoryIndex].event[eventIndex].selection){
			if(allEvents.category[categoryIndex].subcat[subCategoryIndex].event[eventIndex].selection[i].id === selection.id){
				allEvents.category[categoryIndex].subcat[subCategoryIndex].event[eventIndex].selection[i].isSelected = true;
			}else{
				allEvents.category[categoryIndex].subcat[subCategoryIndex].event[eventIndex].selection[i].isSelected = false;
			}
		}
		this.setState({allEvents:allEvents});
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
					selectSelection={this.selectSelection}
					selectedSubCategory={this.state.selectedSubCategory}
				></EventList>
			</section>
		);
	}

}

export default FSBEvents;