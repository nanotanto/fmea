import {JetView} from "webix-jet";

export default class OptimizationView extends JetView{
	config(){
		return {
			type:"wide", rows:[
				{
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "view": "label", "label": "OPTIMIZATION", "align": "center" },
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
                                { "view": "label", "label": "Current Condition"}
                            ]
                        },
                        {
                            //"url": "demo->5fc449cb24ab0800183e9782",
                            "columns": [
                                { "id": "process_id", "header": "Process Item",  "fillspace": false, "hidden": false },
                                { "id": "sub_process_id", "header": "Process Step", "fillspace": false, "hidden": false },
                                { "id": "mode_id", "header": "Failure Mode (FM)", "fillspace": false, "hidden": false },
                                { "id": "category", "header": "Category", "fillspace": false, "hidden": false },
                                { "id": "s", "header": "S", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "element", "header": "Work Element", "sort": "string", "fillspace": false, "hidden": false },
                                { "id": "cause", "header": "Failure Cause (FC)", "sort": "string", "fillspace": true, "hidden": false },
                                { "id": "prevention", "header": "Prevention Control (PC)", "fillspace": true, "sort": "string", "hidden": false },
                                { "id": "o", "header": "O", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "detection", "header": "Detection Controls (DC)", "sort": "string", "fillspace": true, "hidden": false },
                                { "id": "d", "header": "D","sort": "string", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "ap", "header": "AP", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "spec", "header": "Spec. Char.", "sort": "string", "fillspace": false, "hidden": false }
                            ],
                            "view": "datatable"
                        },
                        {
                            "css": "webix_dark",
                            "view": "toolbar",
                            "height": 34,
                            "cols": [
                                { "view": "label", "label": "Action" },
                                { "view": "button", "label": "Add Action", "autowidth": true, "css": "webix_primary" }
                            ]
                        },
                        {
                            //"url": "demo->5fc449cb24ab0800183e9782",
                            "columns": [
                                { "id": "cause", "header": "Failure Cause (FC)", "fillspace": false, "sort": "string", "hidden": false },
                                {
                                    "id": "plan_prevention",
                                    "header": "Prevention Action Plan",
                                    "sort": "string",
                                    "fillspace": false,
                                    "hidden": false,
                                    "width": 250
                                },
                                {
                                    "id": "plan_detection",
                                    "header": "Detection Action Plan",
                                    "sort": "string",
                                    "fillspace": false,
                                    "hidden": false,
                                    "width": 250
                                },
                                { "id": "pic", "header": "Responsible", "sort": "string", "fillspace": false, "hidden": false },
                                { "id": "target_date", "header": "Target Date", "sort": "string", "fillspace": false, "hidden": false },
                                { "id": "status", "header": "Status", "sort": "string", "fillspace": false, "hidden": false },
                                { "id": "prevention", "header": "Prevention Action Taken", "fillspace": false, "hidden": false, "width": 250 },
                                { "id": "detection", "header": "Detection Action Taken", "fillspace": false, "hidden": false, "width": 250 },
                                { "id": "finish_date", "header": "Finish Date", "fillspace": false, "hidden": false },
                                { "id": "s", "header": "S", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "o", "header": "O", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "d", "header": "D", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "ap", "header": "AP", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "spec", "header": "Spec. Char.", "width": 100, "fillspace": false, "hidden": false }
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
                                this.app.show("/top/p-fmea.risk?id="+id);
                            }
                        },
                        { "view": "label" },
                        { "label": "Finish", "view": "button", "height": 0, "width": 100, "css": "webix_danger",
                        click: () => {
                            var id = $$("id").getValue();;
                            this.app.show("/top/p-fmea");
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