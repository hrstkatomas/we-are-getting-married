import { IParallax } from "@react-spring/parallax";
import { RefObject } from "preact/compat";

type NavigationProps = {
	parallaxRef: RefObject<IParallax>;
};

export function Navigation({ parallaxRef }: NavigationProps) {
	return (
		<div className="text-md breadcrumbs h-20 flex flex-col items-center justify-center bg-base-300 pointer-events-auto">
			<ul>
				<li onClick={() => parallaxRef.current?.scrollTo(1)}>
					<a>Kdy a kde</a>
				</li>
				<li onClick={() => parallaxRef.current?.scrollTo(1.45)}>
					<a>Info</a>
				</li>
				<li onClick={() => parallaxRef.current?.scrollTo(window.innerWidth < 768 ? 2.7 : 2.25)}>
					<a>Rekapitulace</a>
				</li>
			</ul>
		</div>
	);
}