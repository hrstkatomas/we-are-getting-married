import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";
import { Title } from "../components/Title";
import { useTheme } from "../hooks/useTheme";
import { LinkToHome } from "../components/NavLinks";
import { AttendanceForm } from "../components/AttendanceForm";
import { SignIn } from "../components/SignIn";

function Attendance() {
	useTheme();

	const { data: session } = useSession();

	const response = trpc.useQuery(["attendance.givenAnswer"]);
	const attendance = response.data?.attendance || null;

	const step1Done = Boolean(session);
	const step2Done = Boolean(session && attendance);

	return (
		<main>
			<div
				className={
					"container mx-auto flex flex-col items-center justify-center p-4"
				}
			>
				<Title>Tady, prosím, potvrď svou účast</Title>
				<div>
					<ul className="steps steps-vertical lg:steps-horizontal m-10">
						<li
							className={`step ${
								step1Done ? "step-primary" : ""
							} mx-0 lg:mx-10`}
							data-content={step1Done ? "✓" : undefined}
						>
							Registrovat se
						</li>
						<li
							className={`step ${
								step2Done ? "step-primary" : ""
							}`}
							data-content={step2Done ? "✓" : undefined}
						>
							Potvrdit účast
						</li>
						<li className={`step`}>Dorazit na svatbu</li>
					</ul>
				</div>

				<div className="flex flex-col w-full lg:w-1/2">
					<div className="card bg-base-300 rounded-box shadow-xl">
						<div className="card-body">
							<h2 className="card-title">Registrace</h2>
							<SignIn session={session} />
						</div>
					</div>

					{step1Done && <div className="divider"></div>}

					{step1Done && (
						<div className="grid card bg-base-300 rounded-box shadow-xl">
							<div className="card-body">
								<AttendanceForm
									attendance={attendance}
									refetch={() => response.refetch()}
								/>
							</div>
						</div>
					)}

					{step2Done && <div className="divider"></div>}

					{step2Done && (
						<div className={"flex justify-center"}>
							<LinkToHome />
						</div>
					)}
				</div>
			</div>
		</main>
	);
}

export default Attendance;
