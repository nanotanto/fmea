import {JetView} from "webix-jet";
import AddFailureView from "views/p-fmea/add_failure"

var saveMode = webix.proxy("rest", "/modes/save", {
    meta: "csrf_field()", //some param
    save:function(view, params){
        params.data.meta = this.meta;
        return webix.proxy.rest.save.call(this, view, params);
    }
});

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
                                    id:"tbl_process_step2",
                                    "columns": [
                                        { id:"id", hidden:true},
                                        { "id": "process_id", "header": "Process item", "fillspace": true, "hidden": false },
                                        { "id": "name", "header": "Process Step", "fillspace": true, "hidden": false }
                                    ],
                                    ready:function(){ 
                                        this.adjustColumn("process_id"); 
                                        this.adjustColumn("name"); 
                                    },
                                    "view": "datatable",                                    
                                    // scheme:{
                                    //     $init:function(row){
                                    //         //row.process_id = (row.process || "") && row.process.name                                
                                    //     }
                                    // },
                                    select:true,                                    
                                    on:{
                                        "onAfterSelect":function(id){        
                                            //var Select_process = $$("tbl_process_step2").getSelectedId();
                                            //var step_id = Select_process['id'];
                                            $$("tbl_mode").clearAll();     
                                            $$("tbl_mode").load("/modes/show/"+id);  
                                            $$("btn_add").enable();                                      
                                        }
                                    }
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
                                        { id:"btn_add","view": "button", "label": "Add Failure Mode", "autowidth": true, "css": "webix_primary", disabled:true,
                                            click:()=> this.winFailure.showWindow()

                                            // click:function(){ 
                                            //     var _idmode = $$('tbl_mode_all').getLastId();
                                            //     var Select_process = $$("tbl_process_step2").getSelectedItem();
                                            //     var step_id = Select_process['id'];
                                            //     //var data = { id:_idmode+1, step_id:step_id, s:1 }

                                            //     if ( _idmode === undefined) {
                                            //         var data = { id:1, step_id:step_id, s:1 }
                                            //     } else {
                                            //         var data = { id:_idmode+1, step_id:step_id, s:1 }
                                            //     }


                                            //     $$('tbl_mode').editStop();
                                            //     var id = $$('tbl_mode').add(data, 0);
                                            //     $$("tbl_mode_all").load("/modes"); 
                                            //     $$('tbl_mode').editRow(id);                   
                                            // } 
                                        }
                                    ]
                                },
                                {
                                    id:"tbl_mode",
                                    "columns": [
                                        { id:"id", hidden:true},
                                        { id:"step_id", hidden:true},
                                        { "id": "name", editor:"text", "header": "Failure Mode (FM)", "width": 150, "fillspace": false, "hidden": false },
                                        { "id": "category", editor:"select",options:["Product","Process"], "header": "Category", "width": 80, "fillspace": false, "hidden": false },
                                        { "id": "effect_in", editor:"text", "header": [{ text:"<center>Failure Effects (FE)</center>", colspan:3 },"Effect to Your Plant"], "fillspace": true, "hidden": false },
                                        { "id": "effect_next", editor:"text", "header": [{},"Effect to Ship to Plant"], "fillspace": true, "hidden": false },
                                        { "id": "effect_end", editor:"text", "header": [{},"Effect to End User"], "fillspace": true, "hidden": false },
                                        { "id": "s", editor:"select",options:[1,2,3,4,5,6,7,8,9,10], "header": ["Severity","<center>(S)</center>"], "width": 60, "fillspace": false, "hidden": false },
                                        { header:"", template:"{common.trashIcon()}", width:40}
                                    ],
                                    ready:function(){ 
                                        this.adjustColumn("name"); 
                                        this.adjustColumn("category"); 
                                        this.adjustColumn("effect_in"); 
                                        this.adjustColumn("effect_next"); 
                                        this.adjustColumn("effect_end"); 
                                    },
                                    "view": "datatable",
                                    select:true,
                                    editable:true,
                                    editaction:"dblclick",
                                    save: saveMode,
                                    onClick:{
                                        "wxi-trash":function(event, id, node){
                                            webix.confirm("Are you sure want to delete data ?").then(function(result){
                                                webix.ajax().post("modes/delete/"+id).then(() => webix.message("Deleted"));
                                                $$("tbl_mode").remove(id);
                                            });
                                        }
                                    }
                                }
                                // /,                                
                                // {
                                //     id:'tbl_mode_all',
                                //     "view": "datatable",
                                //     columns:[{id:"id"}],
                                //     hidden:true,
                                // }
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
        $$("form_planning").load("/products/show/"+id);
        $$("tbl_process_step2").load("/process_steps/"+id);
        $$("tbl_mode").load("/modes/"+id);
    }
    init(){
        //$$("tbl_mode_all").load("/modes/");
        this.winFailure = this.ui(AddFailureView);  
    }
}