import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import { ToggleDisplayProvider } from "./context/useToggleDisplay";
import { GlobalStyle } from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(


	<React.StrictMode>		
		<ToggleDisplayProvider>
			<AppRouter/>
			<GlobalStyle />
		</ToggleDisplayProvider>
	</React.StrictMode>
);