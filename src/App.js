import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Window from "./components/Window/Window";
import ChatForm from "./components/Interface/ChatForm";
import { useState } from "react";
import Popup from "react-animated-popup";
import PopUpper from "./components/Interface/PopUpper";
function App() {
	const [emojiBuffer, setEmojiBuffer] = useState("");
	const [isEmojiWinVisible, setisEmojiWinVisible] = useState(true);
	function EmojiBufferHandler(emoji) {
		setEmojiBuffer(emoji);
		console.log("App got:" + emoji + "counter:" + emoji.counter);
	}

	const componentHandler = (component) => {
		switch (component) {
			case "emoji":
				if (isEmojiWinVisible) setisEmojiWinVisible(false);
				else setisEmojiWinVisible(true);
				break;
		}
	};
	return (
		<div className="App">
			<header className="App-header">
				<ChatForm
					buttonFired={componentHandler}
					emojiParameters={emojiBuffer}
				/>
				<PopUpper visible={isEmojiWinVisible}>
					<Window emojiBuffer={EmojiBufferHandler} />
				</PopUpper>
			</header>
		</div>
	);
}

export default App;
