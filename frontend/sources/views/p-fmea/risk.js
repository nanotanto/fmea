import {JetView} from "webix-jet";
import AddConditionView from "views/p-fmea/add_condition"

var saveCurrent = webix.proxy("rest", "/currents/save", {
    meta: "csrf_field()", //some param
    save:function(view, params){
        params.data.meta = this.meta;
        return webix.proxy.rest.save.call(this, view, params);
    }
});

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
                            id:"tbl_modes_all",
                            "columns": [
                                { id:"id", hidden:true},
                                { "id": "item", "header": "Process Item", "width": 150, "fillspace": false, "hidden": false },
                                { "id": "step", "header": "Process Step", "width": 150, "fillspace": false, "hidden": false },
                                { "id": "mode", "header": "Failure Mode (FM)", "width": 150, "fillspace": false, "hidden": false },
                                { "id": "category", "header": "Category", "width": 150, "fillspace": false, "hidden": false },
                                { "id": "in", "header": [{ text:"<center>Failure Effects (FE)</center>", colspan:3 },"Effect to Your Plant"], "fillspace": true, "hidden": false },
                                { "id": "next", "header": [{},"Effect to Ship to Plant"], "fillspace": true, "hidden": false },
                                { "id": "end", "header": [{},"Effect to End User"], "fillspace": true, "hidden": false },
                                { "id": "s", "header": ["Severity","<center>(S)</center>"], "width": 60, "fillspace": false, "hidden": false }
                            ],
                            ready:function(){ 
                                this.adjustColumn("item"); 
                                this.adjustColumn("step"); 
                                this.adjustColumn("mode"); 
                                this.adjustColumn("category"); 
                                this.adjustColumn("in"); 
                                this.adjustColumn("next"); 
                                this.adjustColumn("end"); 
                            },
                            "view": "datatable",
                            select:true,
                            on:{
                                "onAfterSelect":function(id){
                                    $$("tbl_current").clearAll();     
                                    $$("tbl_current").load("/currents/show/"+id);                                 
                                    $$("btn_add_current").enable();     
                                }
                            }
                        },
                        {
                            "css": "webix_dark",
                            "view": "toolbar",
                            "height": 34,
                            "cols": [
                                { "view": "label", "label": "Current Condition" },
                                { id:"btn_add_current","view": "button", "label": "Add Current Condition", "autowidth": true, "css": "webix_primary", disabled:true, 
                                    click:()=> this.winCondition.showWindow()

                                    // click:function(){
                                    //     var _idcurrent = $$('tbl_current_all').getLastId();
                                    //     var Select_mode = $$("tbl_modes_all").getSelectedId();
                                    //     var mode_id = Select_mode['id'];
                                    //     //var data = { id:_idcurrent+1, mode_id:mode_id, o:1, d:1 }

                                    //     if ( _idcurrent === undefined) {
                                    //         var data = { id:1, mode_id:mode_id, o:1, d:1 }
                                    //     } else {
                                    //         var data = { id:_idcurrent+1, mode_id:mode_id, o:1, d:1 }
                                    //     }

                                    //     $$('tbl_current').editStop();
                                    //     var id = $$('tbl_current').add(data, 0);
                                    //     $$("tbl_current_all").load("/currents"); 
                                    //     $$('tbl_current').editRow(id); 
                                        
                                    // }
                                }
                            ]
                        },
                        {
                            id:"tbl_current",
                            "columns": [
                                { id:"id", hidden:true},
                                { id:"mode_id", hidden:true},
                                { "id": "element",editor:"select",options:["Man","Machine","Material",'Method','Measurement','Environment'],"header": "Work Element", "sort": "string", "fillspace": false, "hidden": false },
                                { "id": "cause",editor:"text", "header": "Failure Cause (FC)", "sort": "string", "fillspace": true, "hidden": false },
                                { "id": "prevention",editor:"text", "header": "Prevention Control (PC) of FC", "fillspace": true, "sort": "string", "hidden": false },
                                { "id": "o",editor:"select",options:[1,2,3,4,5,6,7,8,9,10], "header": "O", "width": 50, "fillspace": false, "hidden": false },
                                { "id": "detection", editor:"text", "header": "Detection Controls (DC) of FC or FM", "sort": "string", "fillspace": true, "hidden": false },
                                { "id": "d",editor:"select",options:[1,2,3,4,5,6,7,8,9,10],"header": "D", "sort": "string", "width": 50, "fillspace": false, "hidden": false },
                                { "id": "ap",editor:"select",options:["Low","Medium","High"], "header": "AP", "width": 100, "fillspace": false, "hidden": false },
                                { "id": "sc",editor:"select",options:["Safety","Emission","Regulation"],  "header": "Spec. Char.", "sort": "string", "fillspace": false, "hidden": false },
                                { header:"", template:"{common.trashIcon()}", width:40}
                            ],
                            ready:function(){ 
                                this.adjustColumn("element"); 
                                this.adjustColumn("cause"); 
                                this.adjustColumn("prevention"); 
                                this.adjustColumn("detection"); 
                                this.adjustColumn("ap"); 
                                this.adjustColumn("sc"); 
                            },
                            "view": "datatable",
                            "height": 120,
                            select:true,
                            editable:true,
                            editaction:"dblclick",
                            save: saveCurrent,
                            onClick:{
                                "wxi-trash":function(event, id, node){
                                    webix.confirm("Are you sure want to delete data ?").then(function(result){
                                        webix.ajax().post("currents/delete/"+id).then(() => webix.message("Deleted"));
                                        $$("tbl_current").remove(id);
                                    });
                                }
                            }
                        },                                
                        {
                            id:'tbl_current_all',
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
        $$("form_planning").load("/products/show/"+id);
        $$("tbl_modes_all").load("/modesAll/"+id);
    }
    init(){
        $$("tbl_current_all").load("/currents");
        this.winCondition = this.ui(AddConditionView);  
    }
}