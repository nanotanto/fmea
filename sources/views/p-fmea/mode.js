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
                                    id:"tbl_process_step",
                                    "columns": [
                                        { "id": "process_id", "header": "Process item", "fillspace": true, "hidden": false },
                                        { "id": "name", "header": "Process Step", "fillspace": true, "hidden": false }
                                    ],
                                    "view": "datatable",                                    
                                    scheme:{
                                        $init:function(row){
                                            row.process_id = (row.process || "") && row.process.name                                
                                        }
                                    },
                                    select:true
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
                            click: () => {
                                var id = $$("id").getValue();;
                                this.app.show("/top/p-fmea.structure?id="+id);
                            }
                        },
                        { "view": "label" },
                        { "label": "Next", "view": "button", "height": 0, "width": 100, "css": "webix_danger",
                            click: () => {
                                var id = $$("id").getValue();;
                                this.app.show("/top/p-fmea.risk?id="+id);
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
    init(){
        $$("tbl_process_step").load("http://localhost/process_steps");
    }
}