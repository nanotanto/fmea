import {JetView} from "webix-jet";

export default class AddProcessView extends JetView{
	config(){
		return {
            view:"popup",
            position:"center",
            width:900,
            height:300,
            select:true,
            body:{
                type:"wide", rows:[
                    {
                        "css": "webix_dark",
                        "view": "toolbar",
                        "height": 35,
                        "cols": [
                            { "view": "label", "label": "ADD PROCESS ITEM", "align": "center" },
                            //{ "icon": "wxi-close", "view": "icon", "height": 0, "width": 30 }
                        ]
                    },
                    {
                        view:"form",
                        hidden:true,
                        id:"form_product2",
                        rows:[
                            {id:"product_id", "name":"id", view:"text"}
                        ]
                    },
                    {
                        "autoheight": false,
                        "view": "form",
                        id:"form_process",
                        "rows": [
                            {
                                "cols": [
                                    { id:"id_product",name:"product_id", "label": "ID", "view": "text", "labelPosition": "top", hidden:true, },
                                    { "label": "Process Item Name :", "view": "text", "labelPosition": "top", "name": "name" },
                                    { "label": "Function of The Process Item (Your Plant) :", "view": "text", "labelPosition": "top", "name": "function" }
                                ]
                            },
                            {
                                "cols": [
                                    { "view": "label", "height": 0 },
                                    { "label": "Function of The Process Item (Ship to Plant) :", "view": "text", "labelPosition": "top", "name": "function2" }
                                ]
                            },
                            {
                                "cols": [
                                    { "view": "label", "height": 0 },
                                    { "label": "Function of The Process Item (End User) :", "view": "text", "labelPosition": "top", "name": "function3" }
                                ]
                            },
                            {paddingY:20,
                                "cols": [
                                    { "view": "template", "role": "placeholder", "gravity": 4, "borderless": true },
                                    { id:"btn_new_process", "label": "Add New", "view": "button", disabled:true,
                                        click:()=>{
                                            $$("form_process").clear();
                                            $$("btn_save_process").enable(); 
                                            $$("btn_new_process").disable();  
                                            var id = $$("product_id").getValue();
                                            $$("id_product").setValue(id);  
                                        }
                                    },                                    
                                    { id:"btn_save_process","label": "Save", "view": "button", "css": "webix_primary", "width": 100, 
                                    click:()=>{
                                        var id = $$("product_id").getValue();
                                        var data = $$("form_process").getValues();                                  
                                        webix.confirm("Do you wont to save data ?").then(function(result){
                                            webix.ajax().post("processes/save", data).then(() => {
                                                webix.message("Saved")
                                                $$("btn_save_process").disable();
                                                $$("btn_new_process").enable();         
                                                $$("tbl_process").clearAll();                  
                                                $$("tbl_process").load("/processes/show/"+id);
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
        var id = $$("product_id").getValue();
        $$("id_product").setValue(id);
    }
    urlChange(view, url){
        var id = url[0].params.id;
        $$("form_product2").load("/products/show/"+id);
    }
}