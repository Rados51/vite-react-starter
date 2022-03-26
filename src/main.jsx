import { Provider } from "jotai";
import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "@/css/main.scss";

const entry = document.getElementById("app");

render(
	<StrictMode>
		<Provider>
			<App />
		</Provider>
	</StrictMode>,
	entry,
);
