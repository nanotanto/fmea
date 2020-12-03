import {JetView} from "webix-jet";

export default class PlanningView extends JetView{
	config(){
		return {
			type:"wide", rows:[
				{
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "view": "label", "label": "PLANNING & PREPARATION", "align": "center" },
                        { "icon": "wxi-close", "view": "icon", "height": 33, "width": 30, 
                            click: "location.href='#!/top/p-fmea'"
                        }
                    ]
                },
                {   
                    "id":"form_planning",
                    url:"http://localhost/products/show/1",
                    "autoheight": false,
                    "view": "form",
                    "rows": [
                        {
                            "cols": [
                                {
                                    "rows": [
                                        { name:"number", "label": "P-FMEA ID Number", "view": "text", "labelPosition": "top" },
                                        { "label": "Product Code", "view": "text", "labelPosition": "top" },
                                        { name:"name", "label": "Product Name", "view": "text", "labelPosition": "top" },
                                        { name:"issued", "label": "Prepared By", "view": "text", "labelPosition": "top" },
                                        { "label": "Company Name", "view": "text", "labelPosition": "top" },
                                        { "label": "Manufacture Location", "view": "text", "labelPosition": "top" },
                                        { "label": "Customer Name", "view": "text", "labelPosition": "top" },
                                        { "view": "template", "role": "placeholder", "borderless": true }
                                    ],
                                    "margin": 10,
                                    "padding": { "right": 20 },
                                    "borderless": true
                                },
                                {
                                    "rows": [
                                        { "label": "Model of Year/ Platform", "view": "text", "labelPosition": "top" },
                                        { "label": "Subject", "view": "text", "labelPosition": "top" },
                                        { "label": "P-FMEA Start Date", "value": "2020-11-30 10:26:39", "view": "datepicker", "labelPosition": "top" },
                                        { "label": "P-FMEA Revision Date", "value": "2020-11-30 10:26:39", "view": "datepicker", "labelPosition": "top" },
                                        { "label": "Cross-Function Team", "view": "text", "labelPosition": "top" },
                                        { "label": "Process Responsibility", "view": "text", "labelPosition": "top" },
                                        {
                                            "label": "Confidentiality Level",
                                            "options": [],
                                            "view": "select",
                                            "height": 50,
                                            "labelPosition": "top"
                                        },
                                        {
                                            "cols": [
                                                { "view": "template", "role": "placeholder", "borderless": true },
                                                { "label": "Save", "view": "button", "css": "webix_primary", "width": 100 }
                                            ]
                                        },
                                        { "view": "template", "role": "placeholder", "borderless": 1 }
                                    ],
                                    "margin": 10,
                                    "padding": { "left": 20 },
                                    "borderless": true
                                }
                            ],
                            "borderless": true
                        }
                    ],
                    "padding": { "top": 30 }
                },
                {
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "label": "Back", "view": "button", "height": 0, "width": 100,
                            click: "location.href='#!/top/p-fmea'"
                        },
                        { "view": "label" },
                        { "label": "Next", "view": "button", "height": 0, "width": 100, "css": "webix_danger", 
                            click: "location.href='#!/top/p-fmea.structure'"
                        }
                    ],
                    //"padding": { "left": 10, "right": 10 }
                }
			]
		}
	}
}