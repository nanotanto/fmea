import {JetView} from "webix-jet";
 
var url = window.location.protocol +"//"+ window.location.hostname+":"+window.location.port+window.location.pathname;

export default class ShowView extends JetView{
	config(){
		return {
			type:"wide", rows:[
				{
                    "css": "webix_dark",
                    "view": "toolbar",
                    "height": 35,
                    "cols": [
                        { "view": "label", "label": "FMEA AIAG-VDA SPREADSHEET", "align": "center" },
                        { "icon": "wxi-close", "view": "icon", "height": 33, "width": 30, 
                            click: "location.href='#!/top/p-fmea'"
                        }
                    ]
                },
                {
                    "rows": [
                        { id:"frm_fmea", "view": "iframe" }
                    ]
                }
			]
		}
    }
    urlChange(view, url){
        var id = url[0].params.id;
        $$("frm_fmea").load("/fmea/"+id);
    }
}