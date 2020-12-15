import {JetView} from "webix-jet";

export default class AddActionView extends JetView{
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
                            { "view": "label", "label": "ADD ACTION", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    { id:"form_action","autoheight": false, "view": "form", "elementsConfig": { "required": false, "labelPosition": "top" },
	"rows": [
		{ id:"id_mode","view": "text", "label": "Mode ID", "name": "mode_id", hidden:true },
		{ id:"id_current","view": "text", "label": "Mode ID", "name": "current_id", hidden:true },
		{ id:"element_name","view": "text", "label": "Mode ID", "name": "element", hidden:true },
		{ id:"mode_name","view": "text", "label": "Failure Mode (FM)", "name": "mode", readonly:true },
		
		{ id:"cause_name", "label": "Failure Cause (FC)", "view": "text", "name": "cause", readonly:true },
		{ "label": "Prevention Action Plan", "view": "text", "name": "prevention" },		
		{ "label": "Detection Action Plan", "view": "text", "name": "detection" },
        {
			"cols": [
				{ "label": "Responsible Person's Name", "view": "text", "name": "pic" },
				{ "view": "label", "height": 0 }
			]
        },
        {
			"cols": [
				{ "label": "Target Date", "view": "datepicker", "name": "target_date" },
				{ "view": "label", "height": 0, "gravity": 3 }
			]
        },
		{
			"cols": [
				{ "label": "Status", "options": ["","Open","Closed"], "view": "select", "name": "status" },
				{ "view": "label", "gravity": 3 }
			]
		},
        { "label": "Prevention Action Taken", "view": "text", "name": "prevention_act" },		
		{ "label": "Detection Action Taken", "view": "text", "name": "detection_act" },
        {
			"cols": [
				{ "label": "Completion Date", "view": "datepicker", "name": "finish_date" },
				{ "view": "label", "height": 0, "gravity": 3 }
			]
        },
		{
			"cols": [
				{ id:"o2","label": "Occurrence (O)", "options":['1','2','3','4','5','6','7','8','9','10'], "view": "select", "name": "o" },
				{ "view": "label", "height": 0, "gravity": 3 }
			]
        },
        {
			"cols": [
				{ id:"d2","label": "Detection (D)", "options": ['1','2','3','4','5','6','7','8','9','10'], "view": "select", "name": "d" },
				{ "view": "label", "height": 0, "gravity": 3 }
			]
		},
		{
			"cols": [
				{ "label": "Action Priority (AP)", "options": ["","Low","Medium","High"], "view": "select", "name": "ap" },
				{ "view": "label", "gravity": 3 }
			]
		},
		{
			"cols": [
				{ "label": "Special Characteristic", "options": ["","Safety","Emission","Regulation"], "view": "select", "name": "sc" },
				{ "view": "label", "height": 0, "gravity": 3 }
			]
		},
		{
			"cols": [
				{ "view": "template", "role": "placeholder", "gravity": 3, "borderless": true },
                { id:'btn_new_action',"label": "Add New", "view": "button", disabled:true,
                    click:()=>{
                        $$("form_action").clear();
                        $$("btn_save_action").enable(); 
                        $$("btn_new_action").disable();                         
                        var Select_mode = $$("tbl_currents_all").getSelectedItem();
                        var mode_id = Select_mode['id'];
                        var mode_name = Select_mode['mode'];
                        var current_id = Select_mode['current_id'];
                        var element_name = Select_mode['element'];
                        var cause_name = Select_mode['cause'];
                        $$("id_mode").setValue(mode_id);  
                        $$("mode_name").setValue(mode_name); 
                        $$("id_current").setValue(current_id);  
                        $$("element_name").setValue(element_name); 
                        $$("cause_name").setValue(cause_name); 
                        $$("o2").setValue(1); 
                        $$("d2").setValue(1); 

                    }
                },
                { id:"btn_save_action","view": "button", "css": "webix_primary", "label": "Save",
                    click:()=>{                                               
                        var Select_mode = $$("tbl_currents_all").getSelectedItem();
                        var mode_id = Select_mode['id'];
                        var data = $$("form_action").getValues(); 
                        webix.confirm("Do you wont to save data ?").then(function(result){
                            webix.ajax().post("actions/save", data).then(() => {
                                webix.message("Saved")
                                $$("btn_save_action").disable();
                                $$("btn_new_action").enable();         
                                $$("tbl_action").clearAll();                  
                                $$("tbl_action").load("/actions/show/"+mode_id);
                            });
                            
                        });  
                    }
                }
			]
		}
	],
	"scroll": "y"
}

                ]
            }
		}
    }
    showWindow(){
        this.getRoot().show();                
                            
        var Select_mode = $$("tbl_currents_all").getSelectedItem();
        var mode_id = Select_mode['id'];
        var mode_name = Select_mode['mode'];
        var current_id = Select_mode['current_id'];
        var element_name = Select_mode['element'];
        var cause_name = Select_mode['cause'];
        $$("id_mode").setValue(mode_id);  
        $$("mode_name").setValue(mode_name); 
        $$("id_current").setValue(current_id);  
        $$("element_name").setValue(element_name); 
        $$("cause_name").setValue(cause_name); 

    }
}