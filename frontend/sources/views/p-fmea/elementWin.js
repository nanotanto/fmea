//import { $$ } from "webix";
import { DataLoader } from "webix";
import {JetView} from "webix-jet";

var url = window.location.protocol +"//"+ window.location.hostname+":"+window.location.port+window.location.pathname;

export default class ElementWinView extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            width:900,
            height:600,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "ADD ELEMENTS", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    {
                        "cols": [
                            {
                                "rows": [
                                    { "type": "header", "template": "Structure of Process", "view": "template" },
                                    {
                                        id:"tbl_process_step",
                                        "columns": [
                                            { id:"id", hidden:true},
                                            { "id": "process_id", "header": "Process Item", "fillspace": true, "hidden": false },
                                            { "id": "name", "header": "Process Step", "fillspace": true, "hidden": false }
                                        ],
                                        "view": "datatable",
                                        select:true,
                                        scheme:{
                                            $init:function(row){
                                                row.process_id = (row.process || "") && row.process.name                                
                                            }
                                        },
                                        on:{
                                            "onAfterSelect":function(id){                                                
                                                $$("form_element").clear();     

                                                webix.ajax().get("elements/show/"+id,
                                                    function (text,data,xhr){                                                    
                                                    var dt = data.json();
                                                    if (dt['length']===0) {
                                                        $$("step_id").setValue(id);
                                                        $$("btn_edit").hide();
                                                        $$("btn_save").show();
                                                    } else {
                                                        $$("form_element").load("/elements/show/"+id);
                                                        $$("btn_edit").show();
                                                        $$("btn_save").hide();
                                                    }
                                                })

                                                var Select_process = $$("tbl_process_step").getSelectedItem();
                                                var step_name = Select_process['name'];
                                                $$("_lbl").setValue("<h3>Process Work Element of "+step_name+"</h3>");
                                                
                                            }
                                        }
                                    }
                                ],
                                "width": 350
                            },
                            {
                                "autoheight": false,
                                "view": "form",
                                id:"form_element",
                                "rows": [
                                    { id:"_lbl", view:'label', label:"<h3>Process Work Element</h3>", height:70, hidden:false},
                                    {
                                        "cols": [
                                            {
                                                "rows": [                                                    
                                                    { id:"_id", name:"id", "label": "ID", "view": "text", "labelPosition": "top", hidden:true },
                                                    { id:"step_id", name:"step_id", "label": "Step_id", "view": "text", "labelPosition": "top", hidden:true },                                                    
                                                    { name:"man", "label": "Man", "view": "text", "labelPosition": "top" },
                                                    { name:"machine", "label": "Machine", "view": "text", "labelPosition": "top" },
                                                    { name:"material", "label": "Material", "view": "text", "labelPosition": "top" },
                                                    { name:"method", "label": "Method", "view": "text", "labelPosition": "top" },
                                                    { name:"measure", "label": "Measurement", "view": "text", "labelPosition": "top" },
                                                    { name:"enviro", "label": "Environment", "view": "text", "labelPosition": "top" },
                                                    { "view": "template", "role": "placeholder", "borderless": true }
                                                ],
                                                //"margin": 10,
                                                "padding": { "right": 10 },
                                                "borderless": true,
                                                "width": 150
                                            },
                                            {
                                                "rows": [
                                                    { name:"func_man", "label": "Function of Man", "view": "text", "labelPosition": "top" },
                                                    { name:"func_machine", "label": "Function of Machine", "view": "text", "labelPosition": "top" },
                                                    { name:"func_material", "label": "Function of Material", "view": "text", "labelPosition": "top" },
                                                    { name:"func_method", "label": "Function of Method", "view": "text", "labelPosition": "top" },
                                                    { name:"func_measure", "label": "Function of Measurement", "view": "text", "labelPosition": "top" },
                                                    { name:"func_enviro", "label": "Function of Environment", "view": "text",  "labelPosition": "top" },
                                                    {
                                                        "cols": [
                                                            { "view": "template", "role": "placeholder", "borderless": true },
                                                            { id:"btn_edit","label": "Edit", "view": "button", "css": "webix_primary", "width": 100, hidden:true,
                                                                click:()=>{
                                                                    var id = $$("_id").getValue();
                                                                    var data = $$("form_element").getValues();
                                                                    webix.confirm("Do you wont to edit data ?").then(function(result){
                                                                        webix.ajax().put("elements/save/"+id, data).then(() => webix.message("Edited"));
                                                                        //$$("btn_edit").disable();
                                                                    });
                                                                }
                                                            },
                                                            { id:"btn_save","label": "Save", "view": "button", "css": "webix_primary", "width": 100, hidden:true,
                                                                click:()=>{
                                                                    var data = $$("form_element").getValues();                                                                    webix.confirm("Do you wont to save data ?").then(function(result){
                                                                        webix.ajax().post("elements/save", data).then(() => webix.message("Saved"));
                                                                        $$("btn_save").hide();
                                                                        $("btn_edit").show();
                                                                    });
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    { "view": "template", "role": "placeholder", "borderless": 1 }
                                                ],
                                                //"margin": 10,
                                                "padding": { "left": 10 },
                                                "borderless": true,
                                                "width": 0
                                            }
                                        ],
                                        "borderless": true
                                    }
                                ],
                                //"padding": { "top": 30 },
                                "width": 0
                            }
                        ]
                    }
                ]
            }
		}
    }
    showWindow(){
        this.getRoot().show();
    }
}