import {JetView} from "webix-jet";

export default class ElementView extends JetView{
	config(){
		return {
			type:"wide", rows:[
				{
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "view": "label", "label": "ADD ELEMENTS", "align": "center" },
                        { "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                    ]
                },
                {
                    "cols": [
                        {
                            "rows": [
                                { "type": "header", "template": "Structure of Process", "view": "template" },
                                {
                                    //"url": "demo->5fc449cb24ab0800183e9782",
                                    "columns": [
                                        { "id": "process_id", "header": "Main Process Name", "fillspace": true, "hidden": false },
                                        { "id": "name", "header": "Sub Process Name", "fillspace": true, "hidden": false }
                                    ],
                                    "view": "datatable"
                                }
                            ],
                            "width": 418
                        },
                        {
                            "autoheight": false,
                            "view": "form",
                            "rows": [
                                {
                                    "cols": [
                                        {
                                            "rows": [
                                                { "label": "Man", "view": "text", "labelPosition": "top" },
                                                { "label": "Machine", "view": "text", "labelPosition": "top" },
                                                { "label": "Material", "view": "text", "labelPosition": "top" },
                                                { "label": "Method", "view": "text", "labelPosition": "top" },
                                                { "label": "Measurement", "view": "text", "labelPosition": "top" },
                                                { "label": "Environment", "view": "text", "labelPosition": "top" },
                                                { "view": "template", "role": "placeholder", "borderless": true }
                                            ],
                                            "margin": 10,
                                            "padding": { "right": 20 },
                                            "borderless": true,
                                            "width": 222
                                        },
                                        {
                                            "rows": [
                                                { "label": "Function of Man", "view": "text", "labelPosition": "top" },
                                                { "label": "Function of Machine", "view": "text", "labelPosition": "top" },
                                                { "label": "Function of Material", "view": "text", "labelPosition": "top" },
                                                { "label": "Function of Method", "view": "text", "height": 50, "labelPosition": "top" },
                                                { "label": "Function of Measurement", "view": "text", "labelPosition": "top" },
                                                { "label": "Function of Environment", "view": "text", "height": 50, "labelPosition": "top" },
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
                                            "borderless": true,
                                            "width": 0
                                        }
                                    ],
                                    "borderless": true
                                }
                            ],
                            "padding": { "top": 30 },
                            "width": 0
                        }
                    ]
                }
			]
		}
	}
}