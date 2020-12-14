import {JetView} from "webix-jet";
 
var url = window.location.protocol +"//"+ window.location.hostname+":"+window.location.port+window.location.pathname;

export default class PlanningView extends JetView{
	config(){
		return {
			type:"wide", rows:[
				{
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "view": "label", "label": "PLANNING & PREPARATION", "align": "center" },
                        { "icon": "wxi-close", "view": "icon", "height": 33, "width": 30, 
                            click: "location.href='#!/top/p-fmea'"
                        }
                    ]
                },
                {   
                    "id":"form_planning",
                    "autoheight": false,
                    "view": "form",       
                    scroll:true,  
                    complexData:true,
                    "elements": [
                        {
                            "cols": [
                                {
                                    "rows": [
                                        { id:"id", name:"id", "label": "ID", "view": "text", "labelPosition": "top", hidden:true, },
                                        { name:"number", "label": "P-FMEA ID Number", "view": "text", "labelPosition": "top"},
                                        { name:"code", "label": "Product Code", "view": "text", "labelPosition": "top"},
                                        { name:"name", "label": "Product Name", "view": "text", "labelPosition": "top"},
                                        { name:"issued", "label": "Prepared By", "view": "text", "labelPosition": "top"},
                                        { name:"company","label": "Company Name", "view": "text", "labelPosition": "top"},
                                        { name:"location","label": "Manufacture Location", "view": "text", "labelPosition": "top"},
                                        { name:"customer","label": "Customer Name", "view": "text", "labelPosition": "top"},
                                        { "view": "template", "role": "placeholder", "borderless": true }
                                    ],
                                    "margin": 10,
                                    "padding": { "right": 20 },
                                    "borderless": true
                                },
                                {
                                    "rows": [
                                        { name:"model","label": "Model of Year/ Platform", "view": "text", "labelPosition": "top"},
                                        { name:"subject","label": "Subject", "view": "text", "labelPosition": "top"},
                                        { name:"start_date","label": "P-FMEA Start Date", "value": "2020-11-30 10:26:39", "view": "datepicker", "labelPosition": "top"},
                                        { name:"revision_date","label": "P-FMEA Revision Date", "value": "2020-11-30 10:26:39", "view": "datepicker", "labelPosition": "top" },
                                        { name:"team","label": "Cross-Function Team", "view": "text", "labelPosition": "top"},
                                        { name:"respons","label": "Process Responsibility", "view": "text", "labelPosition": "top"},
                                        {
                                            name:"level","label": "Confidentiality Level",
                                            "view": "select",
                                            "height": 50,
                                            "labelPosition": "top",
                                            options:["Business Use","Proprietary","Confidential"]
                                        },
                                        {
                                            "cols": [
                                                { "view": "template", "role": "placeholder", "borderless": true },
                                                { id:"btn_edit2", "label": "Edit", "view": "button", "css": "webix_primary", "width": 100,
                                                click:function(){
                                                    var form = this.getFormView();
                                                    if (form.validate()){
                                                        var id = $$("id").getValue();
                                                        var data = $$("form_planning").getValues();
                                                        webix.confirm("Do you wont to edit data ?").then(function(result){
                                                            webix.ajax().put("products/update/"+id, data).then(() => webix.message("Edited"));
                                                            //$$("btn_edit").disable();
                                                        });
                                                        
                                                        //webix.ajax().post("../backend/lumen/public/saveLog", data)
                                                    }
                                                    else
                                                      webix.message({ type:"error", text:"Form data is invalid" });
                                                  }
                                                }
                                            ]
                                        },
                                        { "view": "template", "role": "placeholder", "borderless": 1 }
                                    ],
                                    "margin": 10,
                                    "padding": { "left": 20 },
                                    "borderless": true
                                }
                            ],
                            "borderless": true
                        }
                    ],           
                    rules:{
                        "number":webix.rules.isNotEmpty,
                        "code":webix.rules.isNotEmpty,
                        "name":webix.rules.isNotEmpty,
                        "issued":webix.rules.isNotEmpty,
                        "company":webix.rules.isNotEmpty,
                        "location":webix.rules.isNotEmpty,
                        "customer":webix.rules.isNotEmpty,
                        "model":webix.rules.isNotEmpty,
                        "subject":webix.rules.isNotEmpty,
                        "start_date":webix.rules.isNotEmpty,
                        "team":webix.rules.isNotEmpty,
                        "level":webix.rules.isNotEmpty
                    },
                    "padding": { "top": 30 }
                },
                {
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "label": "Back", "view": "button", "height": 0, "width": 100,
                            click: () => {
                                this.app.show("/top/p-fmea");
                            }
                        },
                        { "view": "label" },
                        { "label": "Next", "view": "button", "height": 0, "width": 100, "css": "webix_danger", 
                            click: () => {
                                var id = $$("id").getValue();
                                this.app.show("/top/p-fmea.structure?id="+id);
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
    }
}