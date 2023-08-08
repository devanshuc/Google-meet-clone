import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

import "./App.css";
import { AppBar, Typography } from "@mui/material";

function App() {
	return (
		<div>
			<AppBar position="static" color="inherit">
				<Typography variant="h2" align="center">
					AirMeet
				</Typography>
			</AppBar>
			<VideoPlayer />
			<Options>
				<Notifications />
			</Options>
		</div>
	);
}

export default App;
