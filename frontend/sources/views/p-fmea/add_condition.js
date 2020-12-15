import {JetView} from "webix-jet";

export default class AddConditionView extends JetView{
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
                            { "view": "label", "label": "ADD CURRENT CONDITION", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    { id:"form_condition","autoheight": false, "view": "form", "elementsConfig": { "required": false, "labelPosition": "top" },
	"rows": [
		{ id:"id_mode","view": "text", "label": "Mode ID", "name": "mode_id", hidden:true },
		{ id:"mode_name","view": "text", "label": "Failure Mode (FM)", "name": "mode",readonly:true },
		{
			"cols": [
				{ "label": "Work Element", "options": ["","Man","Machine","Material",'Method','Measurement','Environment'], "view": "select", "name": "element" },
				{ "view": "label", "gravity": 3 }
			]
		},
		{ "label": "Failure Cause (FC)", "view": "text", "name": "cause" },
		{ "label": "Prevention Control (PC) of FC", "view": "text", "name": "prevention" },
		{
			"cols": [
				{ id:"o","label": "Occurrence (O)", "options":['1','2','3','4','5','6','7','8','9','10'], "view": "select", "name": "o" },
				{ "view": "label", "height": 0, "gravity": 3 }
			]
		},
		{ "label": "Detection Control (DC) of FC or FM", "view": "text", "name": "detection" },
		{
			"cols": [
				{ id:"d","label": "Detection (D)", "options": ['1','2','3','4','5','6','7','8','9','10'], "view": "select", "name": "d" },
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
                { id:'btn_new_condition',"label": "Add New", "view": "button", disabled:true,
                    click:()=>{
                        $$("form_condition").clear();
                        $$("btn_save_condition").enable(); 
                        $$("btn_new_condition").disable();                         
                        var Select_mode = $$("tbl_modes_all").getSelectedItem();
                        var mode_id = Select_mode['id'];
                        var mode_name = Select_mode['mode'];
                        $$("id_mode").setValue(mode_id);  
                        $$("mode_name").setValue(mode_name);  
                        $$("o").setValue(1);  
                        $$("d").setValue(1);  

                    }
                },
                { id:"btn_save_condition","view": "button", "css": "webix_primary", "label": "Save",
                    click:()=>{                                               
                        var Select_mode = $$("tbl_modes_all").getSelectedItem();
                        var mode_id = Select_mode['id'];
                        var data = $$("form_condition").getValues(); 
                        webix.confirm("Do you wont to save data ?").then(function(result){
                            webix.ajax().post("currents/save", data).then(() => {
                                webix.message("Saved")
                                $$("btn_save_condition").disable();
                                $$("btn_new_condition").enable();         
                                $$("tbl_current").clearAll();                  
                                $$("tbl_current").load("/currents/show/"+mode_id);
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
        var Select_mode = $$("tbl_modes_all").getSelectedItem();
        var mode_id = Select_mode['id'];
        var mode_name = Select_mode['mode'];
        $$("id_mode").setValue(mode_id);  
        $$("mode_name").setValue(mode_name);  
    }
}