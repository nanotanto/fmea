//const url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;
const url = "http://localhost/"

export const data_product = new webix.DataCollection({ 
	
	url:url+"products"

});

export function getRecords(){ return data_product; };