import { useEffect } from "react";
import "./App.css";

const BASE_URL = "https://rickandmortyapi.com/api";

function App() {
	const getCharacters = async () => {
		const response = await fetch(`${BASE_URL}/character`);
		const responseInJson = await response.json();
		console.log(responseInJson);
	};

	useEffect(() => {
		getCharacters();
	}, []);

	return <div className="App"></div>;
}

export default App;
