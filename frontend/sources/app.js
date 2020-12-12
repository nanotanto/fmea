import "./styles/app.css";
import { JetApp, plugins } from "webix-jet";
import session from "models/session";

export default class App extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			debug 	: !PRODUCTION,
			start 	: "/top/p-fmea"
		};

		super({ ...defaults, ...config });

		/*wjet::plugin*/
		this.use(plugins.User, { model: session });
	}
}

export {App};