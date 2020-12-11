import {JetView} from "webix-jet";

var saveAction = webix.proxy("rest", "http://localhost:80/actions/save", {
    meta: "csrf_field()", //some param
    save:function(view, params){
        params.data.meta = this.meta;
        return webix.proxy.rest.save.call(this, view, params);
    }
});

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
                            id:"tbl_currents_all",
                            "columns": [
                                { id:"id", hidden:true},
                                { id:"current_id", hidden:true},
                                { "id": "item", "header": "Process Item",  "fillspace": false, "hidden": false },
                                { "id": "step", "header": "Process Step", "fillspace": false, "hidden": false },
                                { "id": "mode", "header": "Failure Mode (FM)", "fillspace": false, "hidden": false },
                                { "id": "category", "header": "Category", "fillspace": false, "hidden": false },
                                { "id": "s", "header": "S", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "element", "header": "Work Element", "sort": "string", "fillspace": false, "hidden": false },
                                { "id": "cause", "header": "Failure Cause (FC)", "sort": "string", "fillspace": true, "hidden": false },
                                { "id": "prevention", "header": "Prevention Control (PC)", "fillspace": true, "sort": "string", "hidden": false },
                                { "id": "o", "header": "O", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "detection", "header": "Detection Controls (DC)", "sort": "string", "fillspace": true, "hidden": false },
                                { "id": "d", "header": "D","sort": "string", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "ap", "header": "AP", "width": 70, "fillspace": false, "hidden": false },
                                { "id": "sc", "header": "Spec. Char.", "sort": "string", "fillspace": false, "hidden": false }
                            ],
                            "view": "datatable",
                            select:true,
                            on:{
                                "onAfterSelect":function(id){
                                    $$("tbl_action").clearAll();     
                                    $$("tbl_action").load("http://localhost/actions/show/"+id);                                 
                                    $$("btn_add_action").enable();     
                                }
                            }
                        },
                        {
                            "css": "webix_dark",
                            "view": "toolbar",
                            "height": 34,
                            "cols": [
                                { "view": "label", "label": "Action" },
                                { id:"btn_add_action", "view": "button", "label": "Add Action", "autowidth": true, "css": "webix_primary", disabled:true, click:function(){
                                    var _idaction = $$('tbl_action_all').getLastId();
                                    var Select_mode = $$("tbl_currents_all").getSelectedItem();
                                    var mode_id = Select_mode['id'];
                                    var current_id = Select_mode['current_id'];
                                    var element = Select_mode['element'];
                                    var o = Select_mode['o'];
                                    var d = Select_mode['d'];
                                    var s = Select_mode['s'];
                                    //var data = { id:_idaction+1, mode_id:mode_id, current_id:current_id, element:element, s:0, o:0, d:0 }

                                    if ( _idaction === undefined) {
                                        var data = { id:1, mode_id:mode_id, current_id:current_id, element:element, s:s, o:o, d:d }
                                    } else {
                                        var data = { id:_idaction+1, mode_id:mode_id, current_id:current_id, element:element, s:s, o:o, d:d }
                                    }


                                    $$('tbl_action').editStop();
                                    var id = $$('tbl_action').add(data, 0);
                                    $$("tbl_action_all").load("http://localhost/actions"); 
                                    $$('tbl_action').editRow(id); 
                                    console.log(current_id);
                                    console.log(element);
                                    console.log(Select_mode);
                                    }
                                }
                            ]
                        },
                        {
                            id:"tbl_action",
                            "columns": [                                
                                { id:"id", hidden:true},
                                { id:"mode_id", hidden:true},
                                { id:"current_id", hidden:true},
                                { id:"element", hidden:true},
                                { "id": "cause", editor:"text", "header": "Failure Cause (FC)", "fillspace": false, "sort": "string", "hidden": false },
                                {
                                    "id": "prevention",editor:"text", 
                                    "header": "Prevention Action Plan",
                                    "sort": "string",
                                    "fillspace": false,
                                    "hidden": false,
                                    "width": 250
                                },
                                {
                                    "id": "detection",editor:"text", 
                                    "header": "Detection Action Plan",
                                    "sort": "string",
                                    "fillspace": false,
                                    "hidden": false,
                                    "width": 250
                                },
                                { "id": "pic", editor:"text", "header": "Responsible", "sort": "string", "fillspace": false, "hidden": false },
                                { "id": "target_date",editor:"date",  "header": "Target Date", "sort": "string", "fillspace": false, "hidden": false },
                                { "id": "status",editor:"select",options:["Open","Closed"], "header": "Status", "sort": "string", "fillspace": false, "hidden": false },
                                { "id": "prevention_act", editor:"text","header": "Prevention Action Taken", "fillspace": false, "hidden": false, "width": 250 },
                                { "id": "detection_act", editor:"text","header": "Detection Action Taken", "fillspace": false, "hidden": false, "width": 250 },
                                { "id": "finish_date", editor:"date","header": "Finish Date", "fillspace": false, "hidden": false },
                                //{ "id": "s",editor:"select",options:[1,2,3,4,5,6,7,8,9,10], "header": "S", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "o",editor:"select",options:[1,2,3,4,5,6,7,8,9,10], "header": "O", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "d",editor:"select",options:[1,2,3,4,5,6,7,8,9,10], "header": "D", "width": 35, "fillspace": false, "hidden": false },
                                { "id": "ap",editor:"select",options:["Low","Medium","High"], "header": "AP", "width": 70, "fillspace": false, "hidden": false },
                                { "id": "sc", editor:"select",options:["Safety","Emission","Regulation"], "header": "Spec. Char.", "width": 80, "fillspace": false, "hidden": false },
                                { header:"", template:"{common.trashIcon()}", width:40}
                            ],
                            "view": "datatable",
                            "height": 120,
                            select:true,
                            editable:true,
                            editaction:"dblclick",
                            save: saveAction,
                            onClick:{
                                "wxi-trash":function(event, id, node){
                                    webix.confirm("Are you sure want to delete data ?").then(function(result){
                                        webix.ajax().post("http://localhost/actions/delete/"+id).then(() => webix.message("Deleted"));
                                        $$("tbl_action").remove(id);
                                    });
                                }
                            }
                        },                                                     
                        {
                            id:'tbl_action_all',
                            "view": "datatable",
                            columns:[{id:"id"}],
                            hidden:true,
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
    init(){
        $$("tbl_currents_all").load("http://localhost/currentsAll");
        $$("tbl_action_all").load("http://localhost/actions");
    }
}