type TitleProps = {
	children: React.ReactNode;
};
export function Title({ children }: TitleProps) {
	return (
		<h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold font-dancing-sript text-base-content">
			{children}
		</h1>
	);
}
