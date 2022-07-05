import React from "react";
//import "./styles/event-list.style.css";
import Event from "./../event/event.component";
class EventList extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	componentWillReceiveProps(){

	}

	render(){
		return (
			<div className="event-list">
					{(this.props.allEvents.category!==undefined?this.props.allEvents.category:[]).map((category,categoryIndex)=>
					<div>
					{
						(category.subcat!==undefined?category.subcat:[]).map((subCategory,subCategoryIndex)=>
						{
						if(String(subCategory.id) === String(this.props.selectedSubCategory)){
						return (<div>
							{(subCategory.event!==undefined?subCategory.event:[]).map((event,eventIndex)=>
							<Event 
							categoryIndex={categoryIndex}
							subCategoryIndex={subCategoryIndex}
							eventIndex = {eventIndex}
							selectSelection={this.props.selectSelection}
							eventObj={event}></Event>
							)}
						</div>)
						}else{
							return null
						}
						}
					)}
					</div>
				)}
			</div>
		);
	}

}

export default EventList;