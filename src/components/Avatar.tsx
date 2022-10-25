import Image, { StaticImageData } from "next/image";
import { Link } from "./Link";

type AvatarProps = {
	image: string | StaticImageData;
	imageAlt: string;
	title: string;
	name: string;
	phone: string;
	email: string;
};
export function Avatar({ image, imageAlt, title, name, phone, email }: AvatarProps) {
	const telNoSpaces = phone.replace(/\s/g, "");

	return (
		<div className="flex items-center space-x-2 m-4">
			<div className="avatar">
				<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
					<Image src={image} alt={imageAlt} className="mask mask-squircle" />
				</div>
			</div>
			<div className={"text-left pl-3"}>
				<div className="text-base-content/70 text-sm">{title}</div>
				<div className="text-lg font-extrabold">{name}</div>
				<div className="text-base-content/70 text-sm">
					<Link href={`tel:${telNoSpaces}`}>{phone}</Link>
				</div>
				<div className="text-base-content/70 text-sm">
					<Link href={`mailto:${email}`}>{email}</Link>
				</div>
			</div>
		</div>
	);
}
