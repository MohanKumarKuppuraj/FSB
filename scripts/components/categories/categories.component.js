import React from "react";

//import "./styles/categories.style.css";

class Categories extends React.Component{

	constructor(props){
		super(props);
	}

	loadEvents = function(){

	}

	componentDidMount(){

	}

	componentWillReceiveProps(){

	}

	render(){
		return (
			<div className="categories">
				{(this.props.allEvents.category!==undefined?this.props.allEvents.category:[]).map((category,categoryIndex)=>
					<div className="main-category">
					<h1>{category.name}</h1>
					<div className="sub-category">
					{category.subcat.map((subCategory,subCategoryIndex)=>
						<h2
						onClick = {()=>{
							this.props.changeSubCategory(subCategory);
						}}
						 className={String(this.props.selectedSubCategory) === String(subCategory.id)?"selected":""}>{subCategory.name}</h2>
						)}
					</div>
					</div>
				)}
			</div>
		);
	
	}

}

export default Categories;