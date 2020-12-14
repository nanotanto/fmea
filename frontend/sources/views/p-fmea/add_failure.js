import {JetView} from "webix-jet";

export default class AddFailureView extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            width:900,
            height:400,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "ADD FAILURE MODE", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    {
                        "rows": [
                            {   
                                id:"form_mode",
                                "autoheight": false,
                                "view": "form",
                                "rows": [
                                    { id:"id_step","label": "ID", "view": "text", "name": "step_id", hidden:true },
                                    {
                                        "cols": [
                                            { "label": "Failure Mode (FM) :", "view": "text", "name": "name" },
                                            { "label": "Category :", "options": ["","Product","Process"], "view": "select", "name": "category" }
                                        ]
                                    },
                                    { "label": "Failure Effects (FE) In Line :", "view": "text", "name": "effect_in" },
                                    { "label": "Failure Effects (FE) to Next Process :", "view": "text", "name": "effect_next" },
                                    { "label": "Failure Effects (FE) to Customer/ End User :", "view": "text", "name": "effect_end" },
                                    {
                                        "cols": [
                                            { "label": "Severity", "options": ["1","2","3","4","5","6","7","8","9","10"], "view": "select", "name": "s" },
                                            { "view": "template", "role": "placeholder", "borderless": true, "gravity": 5 }
                                        ]
                                    },
                                    { "view": "template", "role": "placeholder", "borderless": 1, "height": 20 },
                                    {
                                        "cols": [
                                            { "view": "template", "role": "placeholder", "gravity": 3, "borderless": true },
                                            { id:"btn_new_mode","label": "Add New", "view": "button",disabled:true,
                                                click:()=>{
                                                    $$("form_mode").clear();
                                                    $$("btn_save_mode").enable(); 
                                                    $$("btn_new_mode").disable();  
                                                    var Select_process = $$("tbl_process_step2").getSelectedItem();
                                                    var step_id = Select_process['id'];
                                                    $$("id_step").setValue(step_id);  
                                                }
                                            },
                                            { id:"btn_save_mode", "view": "button", "label": "Save", "css": "webix_primary", 
                                                click:()=>{
                                                    var Select_step = $$("tbl_process_step2").getSelectedId();
                                                    var step_id = Select_step['id'];
                                                    var data = $$("form_mode").getValues();                                  
                                                    webix.confirm("Do you wont to save data ?").then(function(result){
                                                        webix.ajax().post("modes/save", data).then(() => {
                                                            webix.message("Saved")
                                                            $$("btn_save_mode").disable();
                                                            $$("btn_new_mode").enable();         
                                                            $$("tbl_mode").clearAll();                  
                                                            $$("tbl_mode").load("/modes/show/"+step_id);
                                                        });
                                                        
                                                    });
                                                }
                                            }
                                        ]
                                    }
                                ],
                                "elementsConfig": { "required": false, "labelPosition": "top" }
                                //"scroll": "y"
                            }
                        ]
                    }

                ]
            }
		}
    }
    showWindow(){
        this.getRoot().show();        
        var Select_process = $$("tbl_process_step2").getSelectedItem();
        var step_id = Select_process['id'];
        $$("id_step").setValue(step_id);  
    }
}