import React, { useState } from "react";

const ThemeContext = React.createContext({
	theme: "",
	setTheme: (theme) => {},
});

export const ThemeContextProvider = (props) => {
	const [currentTheme, setCurrentTheme] = useState("light");

	const setThemeHandler = (newTheme) => {
		setCurrentTheme(newTheme);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme: currentTheme,
				setTheme: setThemeHandler,
			}}
		>
      {props.children}
    </ThemeContext.Provider>
	);
};

export default ThemeContext;
