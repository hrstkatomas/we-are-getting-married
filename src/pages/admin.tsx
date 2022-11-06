import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { prisma } from "../server/db/client";

export const getServerSideProps: GetServerSideProps<{
	attendance: {
		id: number;
		author: string | null;
		going: boolean;
		numberOfAttendees: number;
		letter: string | null;
	}[];
}> = async () => {
	const responses = await prisma.attendance.findMany({
		include: {
			author: true,
		},
	});

	return {
		props: {
			attendance: responses.map(
				({
					id,
					author: { email },
					going,
					numberOfAttendees,
					letter,
				}) => ({
					id,
					author: email,
					going,
					numberOfAttendees,
					letter,
				}),
			),
		},
	};
};

function Admin({
	attendance,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<div className="overflow-x-auto">
			<table className="table w-full">
				<thead>
					<tr>
						<th>Kdo</th>
						<th>Přijde</th>
						<th>Kolik hostů</th>
						<th>Doplňkové info nebo blahopřání</th>
					</tr>
				</thead>
				<tbody>
					{attendance.map(
						({ id, author, going, numberOfAttendees, letter }) => (
							<tr key={id}>
								<th>{author}</th>
								<td>{going ? "✓" : "✗"}</td>
								<td>{going ? numberOfAttendees : 0}</td>
								<td>{letter}</td>
							</tr>
						),
					)}
				</tbody>
			</table>
		</div>
	);
}

export default Admin;
