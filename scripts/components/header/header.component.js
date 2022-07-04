import React from "react";
//import "./styles/header.style.css";

class Header extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	componentWillReceiveProps(){

	}

	render(){
		return (
			<div className="header">
				<img className="logo" src="/images/fsb.logo.png"></img>
			</div>
		);
	}

}

export default Header;