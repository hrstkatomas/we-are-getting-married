import { getThemeCookie } from "./cookies";
import { Theme } from "../enums/Theme";

export const getPrefersDarkTheme = (): boolean => {
	return (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	);
};

export const getTheme = (): Theme => {
	const theme = getThemeCookie();
	if (theme) return theme as Theme;

	return getPrefersDarkTheme() ? Theme.DARK_THEME : Theme.LIGHT_THEME;
};

export const applyTheme = (theme: string): void => {
	document.documentElement.setAttribute("data-theme", theme);
};
