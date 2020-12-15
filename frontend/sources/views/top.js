import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView{
	config(){

		const header = {
			view:"toolbar", height:50,
			css:"webix_dark", padding:{ left:8 },
			elements:[
				{ view:"label", label:"FMEA AIAG-VDA Software" },				
				{ $template:"Separator" },
				{ value: "Logout", view: "button", width:60, id: "logout", click: () => {
					this.app.show("/logout");
				}}

				/*wjet::Topbar*/
			]
		};

		// const menu = {
		// 	view:"sidebar", id:"top:menu", 
		// 	width:180, layout:"y", select:true,
		// 	template:"<span style='padding-left:10px' class='webix_icon #icon#'></span> #value# ",
		// 	data:[
		// 		//{ value:"DashBoard", id:"start", icon:"wxi-plus-square" },
		// 		{ value:"P-FMEA",		 id:"p-fmea",  icon:"wxi-columns" },
		// 		//{ value:"Settings",  id:"settings",  icon:"wxi-pencil" },
		// 		/*wjet::Menu*/
		// 	]
		// };

		const ui = {
			rows:[
				header,
				{ type:"space", cols:[
					//menu,
					{ $subview:true } 
					
				]}
			]
		};

		return ui;
	}

	// init(){
	// 	this.use(plugins.Menu, "top:menu");
	// }
}