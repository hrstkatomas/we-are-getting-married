import { useLayoutEffect, useState } from "react";
import cookie from "cookie";

const setThemeCookie = (theme: string): void => {
	document.cookie = cookie.serialize(COOKIE_KEY, theme);
};

const getPrefersDarkTheme = (): boolean => {
	return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const getThemeCookie = (): string => {
	const theme = cookie.parse(document.cookie)[COOKIE_KEY];
	if (theme) return theme;

	return getPrefersDarkTheme() ? DARK_THEME : LIGHT_THEME;
};

const applyTheme = (theme: string): void => {
	document.documentElement.setAttribute("data-theme", theme);
};

export const COOKIE_KEY = "theme";
export const LIGHT_THEME = "valentine";
const DARK_THEME = "dracula";

export const useTheme = () => {
	useLayoutEffect(() => applyTheme(getThemeCookie()), []);
};

export function DarkModeButton() {
	useTheme();

	const [toggle, setToggle] = useState(getThemeCookie() === DARK_THEME);

	useLayoutEffect(() => {
		const newTheme = toggle ? DARK_THEME : LIGHT_THEME;
		setThemeCookie(newTheme);
		applyTheme(newTheme);
	}, [toggle]);

	return <input type="checkbox" className="toggle" checked={toggle} onChange={() => setToggle(!toggle)} />;
}
