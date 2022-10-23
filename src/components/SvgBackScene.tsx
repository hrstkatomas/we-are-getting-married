import { svgFill } from "../utils/svgFillStyles";

export function SvgBackScene() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 750 500"
			preserveAspectRatio="xMidYMax slice"
			style={svgFill}
		>
			<path
				className={"fill-secondary-focus"}
				transform="matrix(1,0,0,1,0,0)"
				d="M264.94,449.2s61-16.39,94.07-37.28,61.37-37.2,73.53-36.12,69.9-40,80.18-42.62,13.55-.37,29,1.85,22-5.27,34.52,6.39,43.29,34.86,75.51,48.52c25.88,11,91.48,28.88,91.48,28.88l-31.58,67.73-326.93,9.27Z"
			/>
			<path
				className={"fill-secondary"}
				transform="matrix(1,0,0,1,0,0)"
				d="M.47,469.58V420s113.73-2.74,171.72-26.68,101.69-72.29,134.53-52,31.37-18.48,61.9,13.28S446.68,393.48,478,406.86s113.08,26.06,113.08,26.06l-59.28,53.4L272.55,485Z"
			/>
			<path
				className={"fill-secondary-focus"}
				transform="matrix(1,0,0,1,0,0)"
				d="M294.06,498.2l49.09-66.93s-64-6.48-93.59-31.29-63.47-49.78-87.15-41.46-81.7,4.44-98.73,15S.1,387.08.1,387.08l.37,60.18L209.75,498.2Z"
			/>
		</svg>
	);
}
