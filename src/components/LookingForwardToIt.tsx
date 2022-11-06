import { Title } from "./Title";
import { Link } from "./Link";
import { GithubIcon } from "./GithubIcon";

export function LookingForwardToIt() {
	return (
		<div className="bg-base-300 flex flex-col items-center  justify-center p-10">
			<Title>Těšíme se na Vás!</Title>
			<p>
				<Link
					href={
						"https://github.com/hrstkatomas/we-are-getting-married"
					}
				>
					<GithubIcon />
				</Link>
			</p>
		</div>
	);
}
