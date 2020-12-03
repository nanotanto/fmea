import {JetView} from "webix-jet";
import {data_product} from "models/products";

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
                        click: "location.href='#!/top/p-fmea.planning'"
                        }
                    ]
                },
                {
                    id:"tbl_fmea",
                    "view": "datatable", 
                    "columns": [
                        { "id": "number", "header": "P-FMEA ID Number", "fillspace": false, "hidden": false, "width": 200 },
                        { "id": "name", "header": "Product Name", "fillspace": true, "hidden": false },
                        { "id": "issued", "header": "Prepared By", "fillspace": false, "hidden": false, "width": 200 },
                        { "id": "action", "header": "", "fillspace": false, "hidden": false, "width": 100 }
                    ],
                    data: data_product,
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
                            const id = $$("tbl_fmea").getSelectedId();
                            this.app.show("/top/p-fmea.planning?id="+id);
                        }
                        },
                        { id:"btn_structure", "label": "Structure & Function Analysis", "view": "button", "height": 32, disabled:true,
                            click: "location.href='#!/top/p-fmea.structure'"
                        },
                        { id:"btn_failure", "label": "Failure Analysis", "view": "button", "height": 32, disabled:true,
                            click: "location.href='#!/top/p-fmea.mode'"
                        },
                        { id:"btn_risk", "label": "Risk Analysis", "view": "button", "height": 32, disabled:true,
                            click: "location.href='#!/top/p-fmea.risk'"
                        },
                        { id:"btn_optimization", "label": "Optimization", "view": "button", "height": 32, disabled:true,
                            click: "location.href='#!/top/p-fmea.optimization'"
                        }
                    ],                    
                    "padding": { "left": 10, "right": 10 }
                }
			]
		}
    }    
}
