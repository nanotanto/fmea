import {JetView} from "webix-jet";

export default class RiskView extends JetView{
	config(){
		return {
			type:"wide", rows:[
				{
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "view": "label", "label": "RISK ANALYSIS", "align": "center" },
                        { "icon": "wxi-close", "view": "icon", "height": 0, "width": 30,
                            click: "location.href='#!/top/p-fmea'"
                        }
                    ]
                },
                {
                    id:"form_planning",
                    "autoheight": false,
                    "view": "form",
                    "rows": [
                        {
                            "cols": [
                                {
                                    "rows": [
                                        { id:"id", name:"id", "label": "ID", "view": "text", "labelWidth": 150, "height": 0, hidden:true },
                                        { name:"number", "label": "P-FMEA ID Number", "view": "text", "labelWidth": 150, "height": 0, readonly:true },
                                        { name:"code", "label": "Product Code", "view": "text", "labelWidth": 150, "height": 0, readonly:true },
                                        { name:"name", "label": "Product Name", "view": "text", "labelWidth": 150, "height": 0, readonly:true }
                                    ],
                                    "padding": { "right": 20 },
                                    "borderless": true
                                },
                                {
                                    "rows": [
                                        { name:"model", "label": "Model of Year/ Platform", "view": "text", "labelWidth": 150, "height": 0, readonly:true },
                                        { name:"subject", "label": "Subject", "view": "text", "labelWidth": 150, "height": 0, readonly:true },
                                        {
                                            name:"start_date", "label": "P-FMEA Start Date",
                                            "value": "2020-11-30 10:26:39",
                                            "view": "datepicker",
                                            "height": 0,
                                            "labelWidth": 150, readonly:true
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
                    "rows": [
                        {
                            "css": "webix_dark",
                            "view": "toolbar",
                            "height": 34,
                            "cols": [
                                { "view": "label", "label": "Failure Mode" }
                            ]
                        },
                        {
                            //"url": "demo->5fc4769724ab0800183ea11e",
                            "columns": [
                                { "id": "process_id", "header": "Process Item", "width": 150, "fillspace": false, "hidden": false },
                                { "id": "sub_process_id", "header": "Process Step", "width": 150, "fillspace": false, "hidden": false },
                                { "id": "category", "header": "Category", "width": 150, "fillspace": false, "hidden": false },
                                { "id": "name", "header": "Failure Mode (FM)", "width": 150, "fillspace": false, "hidden": false },
                                { "id": "in", "header": [{ text:"<center>Failure Effects (FE)</center>", colspan:3 },"Effect In Line"], "fillspace": true, "hidden": false },
                                { "id": "next", "header": [{},"Effect to Next Process"], "fillspace": true, "hidden": false },
                                { "id": "end", "header": [{},"Effect to Customer/ End User"], "fillspace": true, "hidden": false },
                                { "id": "s", "header": ["Severity","<center>S</center>"], "width": 60, "fillspace": false, "hidden": false }
                            ],
                            "view": "datatable"
                        },
                        {
                            "css": "webix_dark",
                            "view": "toolbar",
                            "height": 34,
                            "cols": [
                                { "view": "label", "label": "Current Condition" },
                                { "view": "button", "label": "Add Current Condition", "autowidth": true, "css": "webix_primary" }
                            ]
                        },
                        {
                            //"url": "demo->5fc449cb24ab0800183e9782",
                            "columns": [
                                { "id": "element", "header": "Work Element", "sort": "string", "fillspace": false, "hidden": false },
                                { "id": "cause", "header": "Failure Cause (FC)", "sort": "string", "fillspace": true, "hidden": false },
                                { "id": "prevention", "header": "Prevention Control (PC) of FC", "fillspace": true, "sort": "string", "hidden": false },
                                { "id": "o", "header": "O", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "detection", "header": "Detection Controls (DC) of FC or FM", "sort": "string", "fillspace": true, "hidden": false },
                                { "id": "d","header": "D", "sort": "string", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "ap", "header": "AP", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "spec", "header": "Spec. Char.", "sort": "string", "fillspace": false, "hidden": false }
                            ],
                            "view": "datatable",
                            "height": 120
                        }
                    ]
                },
                {
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "label": "Back", "view": "button", "height": 0, "width": 100,
                            click: () => {
                                var id = $$("id").getValue();;
                                this.app.show("/top/p-fmea.mode?id="+id);
                            }
                        },
                        { "view": "label" },
                        { "label": "Next", "view": "button", "height": 0, "width": 100, "css": "webix_danger",
                            click: () => {
                                var id = $$("id").getValue();;
                                this.app.show("/top/p-fmea.optimization?id="+id);
                            }
                        }
                    ],
                    //"padding": { "left": 10, "right": 10 }
                }
			]
		}
	}
    urlChange(view, url){
        var id = url[0].params.id;
        $$("form_planning").load("http://localhost/products/show/"+id);
    }
}