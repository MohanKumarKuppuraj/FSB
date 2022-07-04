import React from "react";
//import "./styles/footer.style.css";

class Footer extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	componentWillReceiveProps(){

	}

	render(){
		return (
			<div className="footer">
				<p>FSB is licensed and regulated by the GB Gambling Commission having been granted licences for Casino, Gambling software, General Betting Standard - Real Events and Pool betting. Details of its current licensed status as recorded on the Gambling Commission's website can be found here.
				FSB Technology (UK) Limited has been granted a Recognition Notice (Type 2 Gaming Supply) from the Malta Gaming Authority (reference RN/128/2019).
				</p>
			</div>
		);
	}

}

export default Footer;