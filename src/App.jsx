import axios from "axios";
import { useContext, useEffect, useState, Fragment } from "react";
import classes from "./App.module.css";

import Profile from "./components/Profile/Profile";
import ThemeContext, { ThemeContextProvider } from "./context/theme-context";

const BASE_URL = "https://rickandmortyapi.com/api";

function App() {
	const [characterList, setCharacterList] = useState([]);

	const themeContext = useContext(ThemeContext);

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
		<Fragment>
			<div
				className={`${
					themeContext.theme === "light" ? classes["light"] : classes["dark"]
				}`}
			>
				<button
					onClick={() => {
						themeContext.setTheme(
							themeContext.theme === "light" ? "dark" : "light"
						);
					}}
				>
					Change theme to {themeContext.theme === "light" ? "dark" : "light"}
				</button>
				{characterList.length > 0 &&
					characterList.map((character) => (
						<Profile key={character.id} character={character} />
					))}
			</div>
		</Fragment>
	);
}

export default App;
