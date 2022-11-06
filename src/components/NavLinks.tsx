import Link from "next/link";
import { trpc } from "../utils/trpc";

export function LinkToAttendance() {
	const response = trpc.useQuery(["attendance.givenAnswer"]);
	const attendance = response.data?.attendance || null;

	const tooltip = attendance
		? "Tvou odpověď už známe, můžeš ji však ještě upravit."
		: "Stiskem tlačítka přejdeš na další stránku, kde potvrdíš rezervaci.";

	return (
		<div className="tooltip mt-4" data-tip={tooltip}>
			<Link href={"/attendance"} legacyBehavior>
				<a
					className={`btn ${
						attendance ? "btn-success" : "btn-active"
					}`}
				>
					{attendance
						? attendance.going
							? "✓ Účast potvrzena"
							: "Mrzí nás, že nepřijdeš"
						: "Potvrdit účast"}
				</a>
			</Link>
		</div>
	);
}

export function LinkToHome() {
	return (
		<Link href={"/"} legacyBehavior>
			<a className={"btn btn-success"}>
				Vše je potvrzeno, můžem jít zpět na přehled.
			</a>
		</Link>
	);
}
