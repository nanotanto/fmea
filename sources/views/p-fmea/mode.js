import {JetView} from "webix-jet";

export default class ModeView extends JetView{
	config(){
		return {
			type:"wide", rows:[
				{
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "view": "label", "label": "FAILURE ANALYSIS", "align": "center" },
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
                                        { "view": "label", "label": "Structure of Process" }
                                    ]
                                },
                                {
                                    //"url": "demo->5fc4769724ab0800183ea11e",
                                    "columns": [
                                        { "id": "process_id", "header": "Process item", "fillspace": true, "hidden": false },
                                        { "id": "name", "header": "Process Step", "fillspace": true, "hidden": false }
                                    ],
                                    "view": "datatable"
                                }
                            ],
                            "width": 350
                        },
                        {
                            "rows": [
                                {
                                    "css": "webix_dark",
                                    "view": "toolbar",
                                    "height": 34,
                                    "cols": [
                                        { "view": "label", "label": "Failure Mode" },
                                        { "view": "button", "label": "Add Failure Mode", "autowidth": true, "css": "webix_primary" }
                                    ]
                                },
                                {
                                    //"url": "demo->5fc4769724ab0800183ea11e",
                                    "columns": [
                                        { "id": "category", "header": "Category", "width": 150, "fillspace": false, "hidden": false },
                                        { "id": "name", "header": "Failure Mode (FM)", "width": 150, "fillspace": false, "hidden": false },
                                        { "id": "in", "header": [{ text:"<center>Failure Effects (FE)</center>", colspan:3 },"Effect In Line"], "fillspace": true, "hidden": false },
                                        { "id": "next", "header": [{},"Effect to Next Process"], "fillspace": true, "hidden": false },
                                        { "id": "end", "header": [{},"Effect to Customer/ End User"], "fillspace": true, "hidden": false },
                                        { "id": "s", "header": ["Severity","<center>(S)</center>"], "width": 60, "fillspace": false, "hidden": false }
                                    ],
                                    "view": "datatable"
                                }
                            ],
                            "width": 0
                        }
                    ]
                },
                {
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "label": "Back", "view": "button", "height": 0, "width": 100,
                            click: "location.href='#!/top/p-fmea.structure'"
                        },
                        { "view": "label" },
                        { "label": "Next", "view": "button", "height": 0, "width": 100, "css": "webix_danger",
                            click: "location.href='#!/top/p-fmea.risk'"
                        }
                    ],
                    //"padding": { "left": 10, "right": 10 }
                }
			]
		}
	}
}