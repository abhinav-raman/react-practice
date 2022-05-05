import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./App.module.css";

import Profile from "./components/Profile/Profile";

const BASE_URL = "https://rickandmortyapi.com/api";

function App() {
	const [characterList, setCharacterList] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get(`${BASE_URL}/character`);
				setCharacterList(data.results);
			} catch (error) {
				throw new Error("Fetching characters failed!!");
			}
		};
		getData();
	}, []);

	return (
		<div className={classes["App"]}>
			{characterList.length > 0 &&
				characterList.map((character) => (
					<Profile key={character.id} character={character} />
				))}
		</div>
	);
}

export default App;
