class UtilityService{

getSelections = async function(){
	var fetchResponse =	await fetch("/api/selections");
	var data  = await fetchResponse.json();
	return data;
}



}

var UtilityServices = new UtilityService();
export default UtilityServices;