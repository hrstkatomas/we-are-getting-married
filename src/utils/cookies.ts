import cookie from "cookie";
import { Theme } from "../enums/Theme";

export const COOKIE_KEY = "theme";

export const setThemeCookie = (theme: string): void => {
	document.cookie = cookie.serialize(COOKIE_KEY, theme);
};

export const getThemeCookie = (): Theme | undefined => {
	const theme = cookie.parse(document.cookie)[COOKIE_KEY];
	return theme ? (theme as Theme) : undefined;
};
