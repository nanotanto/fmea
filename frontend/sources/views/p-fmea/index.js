import {JetView} from "webix-jet";

var url = window.location.protocol +"//"+ window.location.hostname+":"+window.location.port+window.location.pathname;

export default class IndexView extends JetView{
	config(){
		return {
			type:"wide", rows:[
				{
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 34,
                    "cols": [
                        { "view": "button", "label": "New P-FMEA", "autowidth": true, "height": 0, "css":"webix_primary",
                        click: "location.href='#!/top/p-fmea.new_planning'"
                        }
                    ]
                },
                {
                    id:"tbl_fmea",
                    "view": "datatable", 
                    "columns": [
                        {id:"eye", header:"", template:"<span class='webix_icon wxi-file'></span>", width:40},
                        { "id": "number", "header": "P-FMEA ID Number", "fillspace": false, "width": 200},
                        { "id": "name", "header": "Product Name", "fillspace": true },
                        { "id": "issued", "header": "Prepared By", "fillspace": false, "width": 200 },                        
                        {id:"trash", header:"", template:"{common.trashIcon()}", width:40}
                    ],
					onClick:{
						"wxi-trash":function(event, id, node){
                            webix.confirm("Are you sure want to delete data ?").then(function(result){
                                webix.ajax().post("products/delete/"+id).then(() => webix.message("Deleted"));
                                $$("tbl_fmea").remove(id);
                            });
                        },
                        "wxi-file":function(event, id, node){
                            //webix.confirm("Do you want to open spreadsheet FMEA data ?").then(function(result){                                
                            //});
                        }                    
                    },                
                    url: "products",
                    select:true,
                    on:{
                        "onAfterSelect":function(){
                            $$("btn_planning").enable();
                            $$("btn_structure").enable();
                            $$("btn_failure").enable();
                            $$("btn_risk").enable();
                            $$("btn_optimization").enable();
                        }
                    }

                },
                {
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 34,
                    "cols": [
                        { "view": "label", "label": "Set up", "align": "center" },
                        { id:"btn_planning", "label": "Planning & Preparation", "view": "button", "height": 32, disabled:true,
                            click: () => {
                                var id = $$("tbl_fmea").getSelectedId();
                                this.app.show("/top/p-fmea.planning?id="+id);
                            }
                        },
                        { id:"btn_structure", "label": "Structure & Function Analysis", "view": "button", "height": 32, disabled:true,
                            click: () => {
                                var id = $$("tbl_fmea").getSelectedId();
                                this.app.show("/top/p-fmea.structure?id="+id);
                            }
                        },
                        { id:"btn_failure", "label": "Failure Analysis", "view": "button", "height": 32, disabled:true,
                            click: () => {
                                var id = $$("tbl_fmea").getSelectedId();
                                this.app.show("/top/p-fmea.mode?id="+id);
                            }
                        },
                        { id:"btn_risk", "label": "Risk Analysis", "view": "button", "height": 32, disabled:true,
                            click: () => {
                                var id = $$("tbl_fmea").getSelectedId();
                                this.app.show("/top/p-fmea.risk?id="+id);
                            }
                        },
                        { id:"btn_optimization", "label": "Optimization", "view": "button", "height": 32, disabled:true,
                            click: () => {
                                var id = $$("tbl_fmea").getSelectedId();
                                this.app.show("/top/p-fmea.optimization?id="+id);
                            }
                        }
                    ],                    
                    "padding": { "left": 10, "right": 10 }
                }
			]
		}
    }    
}