export function Link({
	className,
	...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<a
			className={`link text-primary-focus ${className}`}
			target={"_blank"}
			{...props}
		/>
	);
}
