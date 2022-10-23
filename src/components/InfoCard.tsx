type InfoCardProps = {
	name: string;
	description: string;
};

export function InfoCard({ name, description }: InfoCardProps) {
	return (
		<div className="card bg-base-100 shadow-xl flex flex-col justify-center p-6 duration-500  shadow-xl motion-safe:hover:scale-105">
			<div className="card-body">
				<h2 className="card-title font-dancing-sript block text-center">{name}</h2>
				<p className={"text-justify"}>{description}</p>
			</div>
		</div>
	);
}
