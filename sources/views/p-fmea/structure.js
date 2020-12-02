import {JetView} from "webix-jet";
import ElementWinView from "views/p-fmea/elementWin";


export default class StructureView extends JetView{
	config(){
		return {
			type:"wide", rows:[
				{
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "view": "label", "label": "STRUCTURE & FUNCTION ANALYSIS", "align": "center" },
                        { "icon": "wxi-close", "view": "icon", "height": 0, "width": 30, 
                            click: "location.href='#!/top/p-fmea'"
                        }
                    ]
                },
                {
                    "autoheight": false,
                    "view": "form",
                    "rows": [
                        {
                            "cols": [
                                {
                                    "rows": [
                                        { "label": "P-FMEA ID Number", "view": "text", "labelWidth": 150, "height": 0 },
                                        { "label": "Product Code", "view": "text", "labelWidth": 150, "height": 0 },
                                        { "label": "Product Name", "view": "text", "labelWidth": 150, "height": 0 }
                                    ],
                                    "padding": { "right": 20 },
                                    "borderless": true
                                },
                                {
                                    "rows": [
                                        { "label": "Model of Year/ Platform", "view": "text", "labelWidth": 150, "height": 0 },
                                        { "label": "Subject", "view": "text", "labelWidth": 150, "height": 0 },
                                        {
                                            "label": "P-FMEA Start Date",
                                            "value": "2020-11-30 10:26:39",
                                            "view": "datepicker",
                                            "height": 0,
                                            "labelWidth": 150
                                        }
                                    ],
                                    "padding": { "left": 20 },
                                    "borderless": true
                                }
                            ],
                            "borderless": true,
                            "height": 0
                        }
                    ],
                    "height": 109
                },
                {
                    "cols": [
                        {
                            "rows": [
                                {
                                    "css": "webix_dark",
                                    "view": "toolbar",
                                    "height": 34,
                                    "cols": [
                                        { "view": "label", "label": "Process Item" },
                                        { "view": "button", "label": "Add Process Item", "autowidth": true, "css": "webix_primary" }
                                    ]
                                },
                                {
                                    //"url": "demo->5fc4769724ab0800183ea11e",
                                    "columns": [
                                        { "id": "name", "header": "Process Item Name", "width": 200, "fillspace": false, "hidden": false },
                                        { "id": "function", "header": "Function", "fillspace": true, "hidden": false }
                                    ],
                                    "view": "datatable"
                                }
                            ]
                        },
                        {
                            "rows": [
                                {
                                    "css": "webix_dark",
                                    "view": "toolbar",
                                    "height": 34,
                                    "cols": [
                                        { "view": "label", "label": "Process Step" },
                                        { "view": "button", "label": "Add Process Step", "autowidth": true, "css": "webix_primary" }
                                    ]
                                },
                                {
                                   // "url": "demo->5fc4769724ab0800183ea11e",
                                    "columns": [
                                        { "id": "name", "header": "Process Step Name", "width": 200, "fillspace": false, "hidden": false },
                                        { "id": "function", "header": "Function", "fillspace": true, "hidden": false }
                                    ],
                                    "view": "datatable"
                                },
                                {
                                    "css": "webix_dark",
                                    "view": "toolbar",
                                    "height": 34,
                                    "cols": [
                                        { "view": "label", "label": "Process Work Element 4M Type" },
                                        { "view": "button", "label": "Add Element", "autowidth": true, "css": "webix_primary", 
                                            click:() => this.win.showWindow()
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {   
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "label": "Back", "view": "button", "height": 0, "width": 100,
                            click: "location.href='#!/top/p-fmea.planning'"
                        },
                        { "view": "label" },
                        { "label": "Next", "view": "button", "height": 0, "width": 100, "css": "webix_danger",
                            click: "location.href='#!/top/p-fmea.mode'"
                        }
                    ],
                    //"padding": { "left": 10, "right": 10 }
                }
			]
        }
    }
    init(){
        this.win = this.ui(ElementWinView);
    }
}