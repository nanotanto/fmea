import {JetView} from "webix-jet";

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
                    //"url": "demo->5fc44d5824ab0800183e97c9",
                    "columns": [
                        { "id": "number", "header": "P-FMEA ID Number", "fillspace": false, "hidden": false, "width": 200 },
                        { "id": "product", "header": "Product Name", "fillspace": true, "hidden": false },
                        { "id": "prepared", "header": "Prepared By", "fillspace": false, "hidden": false, "width": 200 },
                        { "id": "action", "header": "", "fillspace": false, "hidden": false, "width": 100 }
                    ],
                    "view": "datatable"
                },
                {
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 34,
                    "cols": [
                        { "view": "label", "label": "Set up", "align": "center" },
                        { "label": "Planning & Preparation", "view": "button", "height": 32,
                            click: "location.href='#!/top/p-fmea.planning'"
                        },
                        { "label": "Structure & Function Analysis", "view": "button", "height": 32,
                            click: "location.href='#!/top/p-fmea.structure'"
                        },
                        { "label": "Failure Analysis", "view": "button", "height": 32,
                            click: "location.href='#!/top/p-fmea.mode'"
                        },
                        { "label": "Risk Analysis", "view": "button", "height": 32,
                            click: "location.href='#!/top/p-fmea.risk'"
                        },
                        { "label": "Optimization", "view": "button", "height": 32,
                            click: "location.href='#!/top/p-fmea.optimization'"
                        }
                    ],                    
                    "padding": { "left": 10, "right": 10 }
                }
			]
		}
	}
}