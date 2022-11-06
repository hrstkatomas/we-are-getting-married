import { Resolution } from "../enums/Resolution";
import { useLayoutEffect, useState } from "react";

// according to https://tailwindcss.com/docs/container
// sm (640px)	max-width: 640px;
// md (768px)	max-width: 768px;
// lg (1024px)	max-width: 1024px;
// xl (1280px)	max-width: 1280px;
// 2xl (1536px)	max-width: 1536px;

export function useScreenSize(): Resolution {
	const [resolution, setResolution] = useState<Resolution>(Resolution.XXXL);

	useLayoutEffect(() => {
		const handleResolutionChange = () => {
			if (window.innerWidth < 640) return setResolution(Resolution.SM);
			if (window.innerWidth < 768) return setResolution(Resolution.MD);
			if (window.innerWidth < 1024) return setResolution(Resolution.LG);
			if (window.innerWidth < 1280) return setResolution(Resolution.XL);
			if (window.innerWidth < 1536) return setResolution(Resolution.XXL);
			return setResolution(Resolution.XXXL);
		};

		handleResolutionChange();
		window.addEventListener("resize", handleResolutionChange);
		return () =>
			window.removeEventListener("resize", handleResolutionChange);
	}, []);

	return resolution;
}

export function useAdaptiveResolution(configuration: {
	[key in Resolution]?: number;
}): number {
	const screenSize = useScreenSize();

	const [closestResolution] =
		Object.keys(configuration)
			.map((configResolution): [Resolution, number] => [
				Number(configResolution) as Resolution,
				Number(configResolution) - screenSize,
			])
			.find(([, distance]) => distance >= 0) || [];

	if (closestResolution === undefined) return 1;
	return configuration[closestResolution] ?? 1;
}
