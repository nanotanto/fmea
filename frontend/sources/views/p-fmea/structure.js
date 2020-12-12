import {JetView} from "webix-jet";
import ElementWinView from "views/p-fmea/elementWin";

var url = window.location.protocol +"//"+ window.location.hostname+":"+window.location.port+window.location.pathname;

var saveProcess = webix.proxy("rest", "/processes/save", {
    meta: "csrf_field()", //some param
    save:function(view, params){
        params.data.meta = this.meta;
        return webix.proxy.rest.save.call(this, view, params);
    }
});

var saveStep = webix.proxy("rest", "/steps/save", {
    meta: "csrf_field()", //some param
    save:function(view, params){
        params.data.meta = this.meta;
        return webix.proxy.rest.save.call(this, view, params);
    }
});

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
                        //Tabel Process Item
                        {
                            "rows": [
                                {
                                    "css": "webix_dark",
                                    "view": "toolbar",
                                    "height": 34,
                                    "cols": [
                                        { "view": "label", "label": "Process Item" },
                                        { "view": "button", "label": "Add Process Item", "autowidth": true, "css": "webix_primary", click:function(){ 
                                            var _id = $$('tbl_process_all').getLastId();
                                            var product_id = $$("id").getValue();
                                            // var data = { id:_id+1, product_id:product_id }

                                            if ( _id === undefined) {
                                                var data = { id:1, product_id:product_id }
                                            } else {
                                                var data = { id:_id+1, product_id:product_id } 
                                            }

                                            $$('tbl_process').editStop();
                                            var id = $$('tbl_process').add(data, 0);
                                            $$("tbl_process_all").load("/processes"); 
                                            $$('tbl_process').editRow(id);   
                                        }}
                                    ]
                                },
                                {
                                    id:"tbl_process",
                                    "columns": [
                                        { id:"id", hidden:true},
                                        { id:"product_id", hidden:true},
                                        { "id": "name", "header": "Process Item Name", "width": 150, editor:"text" },
                                        { "id": "function", "header": "Function", "fillspace": true, editor:"text" },                        
                                        { header:"", template:"{common.trashIcon()}", width:40}
                                    ],
                                    "view": "datatable",
                                    responsive:true, 
                                    select:true,
                                    editable:true,
                                    editaction:"dblclick",
                                    save: saveProcess,
                                    onClick:{
                                        "wxi-trash":function(event, id, node){
                                            webix.confirm("Are you sure want to delete data ?").then(function(result){
                                                webix.ajax().post("processes/delete/"+id).then(() => webix.message("Deleted"));
                                                $$("tbl_process").remove(id);
                                            });
                                        }
                                    },
                                    on:{
                                        "onAfterSelect":function(id){
                                            $$("btn_add_step").enable();     
                                            $$("tbl_step").clearAll();                         
                                            $$("tbl_step").load("/steps/show/"+id);                                             
                                            $$("btn_add_element").disable();
                                        }
                                    }
                                },
                                {
                                    id:'tbl_process_all',
                                    "view": "datatable",
                                    columns:[{id:"id"}],
                                    hidden:true,
                                }
                            ]
                        },

                        //Tabel Process Step
                        {
                            "rows": [
                                {
                                    "css": "webix_dark",
                                    "view": "toolbar",
                                    "height": 34,
                                    "cols": [
                                        { "view": "label", "label": "Process Step" },
                                        { id:"btn_add_step", "view": "button", "label": "Add Process Step", "autowidth": true, "css": "webix_primary", disabled:true, click:function(){ 
                                            var _idstep = $$('tbl_step_all').getLastId();
                                            var Select_process = $$("tbl_process").getSelectedId();
                                            var process_id = Select_process['id'];
                                            //var data = { id:_idstep+1, process_id:process_id }

                                            if ( _idstep === undefined) {
                                                var data = { id:1, process_id:process_id }
                                            } else {
                                                var data = { id:_idstep+1, process_id:process_id }
                                            }

                                            $$('tbl_step').editStop();
                                            var id = $$('tbl_step').add(data, 0);
                                            $$("tbl_step_all").load("/steps"); 
                                            $$('tbl_step').editRow(id);                   
                                        }}
                                    ]
                                },
                                {
                                   id:"tbl_step",
                                    "columns": [
                                        { id:"id", hidden:true},
                                        { id:"process_id", hidden:true},
                                        { "id": "name", "header": "Process Step Name", "width": 150, "fillspace": false, editor:"text" },
                                        { "id": "function", "header": "Function", "fillspace": true, editor:"text"},
                                        { header:"", template:"{common.trashIcon()}", width:40}
                                    ],
                                    "view": "datatable",
                                    responsive:true, 
                                    select:true,
                                    editable:true,
                                    editaction:"dblclick",
                                    save: saveStep,
                                    onClick:{
                                        "wxi-trash":function(event, id, node){
                                            webix.confirm("Are you sure want to delete data ?").then(function(result){
                                                webix.ajax().post("steps/delete/"+id).then(() => webix.message("Deleted"));
                                                $$("tbl_step").remove(id);
                                            });
                                        }
                                    },
                                    on:{
                                        "onAfterSelect":function(id){
                                            $$("btn_add_element").enable();     
                                        }
                                    }
                                },                                
                                {
                                    id:'tbl_step_all',
                                    "view": "datatable",
                                    columns:[{id:"id"}],
                                    hidden:true,
                                },
                                {
                                    "css": "webix_dark",
                                    "view": "toolbar",
                                    "height": 34,
                                    "cols": [
                                        { "view": "label", "label": "Process Work Element 4M Type" },
                                        { id:"btn_add_element", "view": "button", "label": "Add Element", "autowidth": true, "css": "webix_primary", disabled:true,
                                            click:() => {          
                                                this.win.showWindow();  
                                                $$("tbl_process_step").clearAll();                                    
                                                var Select_process = $$("tbl_process").getSelectedItem();
                                                var process_id = Select_process['id'];
                                                $$("tbl_process_step").load('/steps/show/'+process_id)         
                                                $$("form_element").clear();                                        
                                           }
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
                            click: () => {
                                var id = $$("id").getValue();;
                                this.app.show("/top/p-fmea.planning?id="+id);
                            }
                        },
                        { "view": "label" },
                        { "label": "Next", "view": "button", "height": 0, "width": 100, "css": "webix_danger",
                            click: () => {
                                var id = $$("id").getValue();;
                                this.app.show("/top/p-fmea.mode?id="+id);
                            }
                        }
                    ],
                    //"padding": { "left": 10, "right": 10 }
                }
			]
        }
    }
    init(){
        this.win = this.ui(ElementWinView);        
        $$("tbl_process_all").load("/processes");
        $$("tbl_step_all").load("/steps");
    }
    urlChange(view, url){
        var id = url[0].params.id;
        $$("form_planning").load("/products/show/"+id);
        $$("tbl_process").load("/processes/show/"+id);
    }
}