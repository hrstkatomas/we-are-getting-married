import { useEffect } from "react";
import { applyTheme, getTheme } from "../utils/theme";

export const useTheme = () => {
	useEffect(() => applyTheme(getTheme()), []);
};
