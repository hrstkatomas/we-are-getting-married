import { IParallax } from "@react-spring/parallax";
import { RefObject } from "preact/compat";
import { DarkModeButton } from "./DarkMode";
import { HamburgerIcon } from "./HamburgerIcon";

type NavigationProps = {
	parallaxRef: RefObject<IParallax>;
};

export function Navigation({ parallaxRef }: NavigationProps) {
	const pageLinks = [
		<li
			key={"whereAndWhen"}
			onClick={() => parallaxRef.current?.scrollTo(1)}
		>
			<a>Kdy a kde</a>
		</li>,
		<li key={"info"} onClick={() => parallaxRef.current?.scrollTo(1.45)}>
			<a>Info</a>
		</li>,
		<li
			key={"recapitulation"}
			onClick={() =>
				parallaxRef.current?.scrollTo(
					window.innerWidth < 768 ? 2.5 : 2.25,
				)
			}
		>
			<a>Rekapitulace</a>
		</li>,
	];

	return (
		<div className="navbar bg-base-300 pointer-events-auto h-20">
			<div className="navbar-start">
				<div className="dropdown">
					<HamburgerIcon />
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{pageLinks}
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl font-dancing-sript">
					Bude svatba
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">{pageLinks}</ul>
			</div>
			<div className="navbar-end">
				<DarkModeButton />
			</div>
		</div>
	);
}
