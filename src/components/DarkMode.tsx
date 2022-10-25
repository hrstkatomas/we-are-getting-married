import { useLayoutEffect, useState } from "react";

export class DarkMode {
	private static instance: DarkMode = new DarkMode();
	public static getInstance = (): DarkMode => this.instance;

	private readonly STORAGE_KEY = "theme";
	private readonly LIGHT_THEME = "valentine";
	private readonly DARK_THEME = "dracula";

	private storeValue = (theme: string): void => localStorage.setItem(this.STORAGE_KEY, theme);
	private getValue = (): string | null => localStorage.getItem(this.STORAGE_KEY);

	private udateHtmlsDataTheme = (theme: string): void => document.documentElement.setAttribute("data-theme", theme);

	private getPrefersDarkTheme = (): boolean =>
		window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

	private getTheme() {
		const storedValue = this.getValue();
		if (storedValue) return storedValue;

		const themeByPreference = this.getPrefersDarkTheme() ? this.DARK_THEME : this.LIGHT_THEME;
		this.storeValue(themeByPreference);
		return themeByPreference;
	}

	setTheme(): void {
		this.udateHtmlsDataTheme(this.getTheme());
	}

	toggleValue() {
		this.storeValue(this.getTheme() === this.LIGHT_THEME ? this.DARK_THEME : this.LIGHT_THEME);
		this.setTheme();
	}
}

export function DarkModeButton() {
	const darkMode = DarkMode.getInstance();
	const [toggle, setToggle] = useState(false);
	useLayoutEffect(() => darkMode.setTheme(), [darkMode]);
	useLayoutEffect(() => darkMode.toggleValue(), [toggle, darkMode]);

	return <input type="checkbox" className="toggle" checked={toggle} onChange={() => setToggle(!toggle)} />;
}
