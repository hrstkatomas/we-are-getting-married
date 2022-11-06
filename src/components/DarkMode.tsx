import { useEffect, useState } from "react";
import { applyTheme, getTheme } from "../utils/theme";
import { setThemeCookie } from "../utils/cookies";
import { useTheme } from "../hooks/useTheme";
import { Theme } from "../enums/Theme";

export function DarkModeButton() {
	useTheme();

	const [toggle, setToggle] = useState(getTheme() === Theme.DARK_THEME);

	useEffect(() => {
		const newTheme = toggle ? Theme.DARK_THEME : Theme.LIGHT_THEME;
		setThemeCookie(newTheme);
		applyTheme(newTheme);
	}, [toggle]);

	return (
		<input
			type="checkbox"
			className="toggle"
			checked={toggle}
			onChange={() => setToggle(!toggle)}
		/>
	);
}
