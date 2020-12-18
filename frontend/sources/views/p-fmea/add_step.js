import {JetView} from "webix-jet";

export default class AddStepView extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            width:900,
            height:270,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "ADD PROCESS STEP", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    {
                        "autoheight": false,
                        "view": "form",
                        id:"form_step",
                        "rows": [
                            {
                                "rows": [
                                    { id:"id_process",name:"process_id", "label": "ID", "view": "text", "labelPosition": "top", hidden:true, },
                                    { cols:[
                                        { "label": "Process Step :", "view": "text", "labelPosition": "top", "name": "name" },
                                        {}
                                    ]},
                                    { "label": "Function of Process Step :", "view": "text", "labelPosition": "top", "name": "function" }
                                ]
                            },
                            {paddingY:20,
                                "cols": [
                                    { "view": "template", "role": "placeholder", "gravity": 4, "borderless": true },
                                    { id:"btn_new_step", "label": "Add New", "view": "button", disabled:true,
                                        click:()=>{
                                            $$("form_step").clear();
                                            $$("btn_save_step").enable(); 
                                            $$("btn_new_step").disable();  
                                            var Select_process = $$("tbl_process").getSelectedId();
                                            var process_id = Select_process['id'];
                                            $$("id_process").setValue(process_id);  
                                        }
                                    },                                    
                                    { id:"btn_save_step","label": "Save", "view": "button", "css": "webix_primary", "width": 100, 
                                    click:()=>{
                                        var Select_process = $$("tbl_process").getSelectedId();
                                        var process_id = Select_process['id'];
                                        var data = $$("form_step").getValues();                                  
                                        webix.confirm("Do you wont to save data ?").then(function(result){
                                            webix.ajax().post("steps/save", data).then(() => {
                                                webix.message("Saved")
                                                $$("btn_save_step").disable();
                                                $$("btn_new_step").enable();         
                                                $$("tbl_step").clearAll();                  
                                                $$("tbl_step").load("/steps/show/"+process_id);
                                            });
                                            
                                        });
                                    }
                                }
                                ]
                            }
                        ]
                    }
                ]
            }
		}
    }
    showWindow(){
        this.getRoot().show();        
        var Select_process = $$("tbl_process").getSelectedId();
        var process_id = Select_process['id'];
        $$("id_process").setValue(process_id);  
    }
}