import { svgFill } from "../utils/svgFillStyles";

export function SvgMiddleScene() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 750 500"
			preserveAspectRatio="xMidYMax slice"
			style={svgFill}
		>
			<path
				className={"fill-primary"}
				d="M749.55,500V398.27l-38.48-6.67s-29.86,12.13-63,11.53-39.61-7.26-70.33-13.41-72.58,21.4-105.61,21.4-75.5-17.78-110.64-17.78c-24.85,0-90.08,20.12-110.82,18.48s-51.11-20.42-82-6.26S.47,409.26.47,409.26V500Z"
				transform="matrix(1,0,0,1,0,0)"
			/>
		</svg>
	);
}
