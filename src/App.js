import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Window from "./components/Window/Window";
import ChatForm from "./components/Interface/ChatForm";
import { useState } from "react";
function App() {
	const [emojiBuffer, setEmojiBuffer] = useState("");
	function EmojiBufferHandler(emoji) {
		setEmojiBuffer(emoji);
		console.log("App got:" + emoji + "counter:" + emoji.counter);
	}
	return (
		<div className="App">
			<header className="App-header">
				<ChatForm emojiParameters={emojiBuffer} />
				<Window emojiBuffer={EmojiBufferHandler} />
			</header>
		</div>
	);
}

export default App;
