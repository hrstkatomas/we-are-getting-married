import { useLayoutEffect } from "react";
import { applyTheme, getTheme } from "../utils/theme";

export const useTheme = () => {
	useLayoutEffect(() => applyTheme(getTheme()), []);
};
