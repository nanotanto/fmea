import {JetView} from "webix-jet";
import ElementWinView from "views/p-fmea/elementWin";

var saveProcess = webix.proxy("rest", "http://localhost:80/processes/save", {
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
                                            var data = { id:_id+1, product_id:product_id }
                                            $$('tbl_process').editStop();
                                            var id = $$('tbl_process').add(data, 0);
                                            $$("tbl_process_all").load("http://localhost/processes"); 
                                            $$('tbl_process').editRow(id);                   
                                        }}
                                    ]
                                },
                                {
                                    id:"tbl_process",
                                    "columns": [
                                        { id:"id", hidden:true},
                                        { id:"product_id", hidden:true},
                                        { "id": "name", "header": "Process Item Name", "width": 200, editor:"text" },
                                        { "id": "function", "header": "Function", "fillspace": true, editor:"text" },                        
                                        {id:"trash", header:"", template:"{common.trashIcon()}", width:40}
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
                                                webix.ajax().post("http://localhost/processes/delete/"+id).then(() => webix.message("Deleted"));
                                                $$("tbl_process").remove(id);
                                            });
                                        }
                                    },
                                },
                                {
                                    id:'tbl_process_all',
                                    "view": "datatable",
                                    columns:[{id:"id"}],
                                    hidden:true,
                                }
                            ]
                        },
                        {
                            "rows": [
                                {
                                    "css": "webix_dark",
                                    "view": "toolbar",
                                    "height": 34,
                                    "cols": [
                                        { "view": "label", "label": "Process Step" },
                                        { "view": "button", "label": "Add Process Step", "autowidth": true, "css": "webix_primary" }
                                    ]
                                },
                                {
                                   // "url": "demo->5fc4769724ab0800183ea11e",
                                    "columns": [
                                        { "id": "name", "header": "Process Step Name", "width": 200, "fillspace": false, "hidden": false },
                                        { "id": "function", "header": "Function", "fillspace": true, "hidden": false }
                                    ],
                                    "view": "datatable"
                                },
                                {
                                    "css": "webix_dark",
                                    "view": "toolbar",
                                    "height": 34,
                                    "cols": [
                                        { "view": "label", "label": "Process Work Element 4M Type" },
                                        { "view": "button", "label": "Add Element", "autowidth": true, "css": "webix_primary", 
                                            click:() => this.win.showWindow()
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
        $$("tbl_process_all").load("http://localhost/processes");
    }
    urlChange(view, url){
        var id = url[0].params.id;
        $$("form_planning").load("http://localhost/products/show/"+id);
        $$("tbl_process").load("http://localhost/processes/show/"+id);
    }
}