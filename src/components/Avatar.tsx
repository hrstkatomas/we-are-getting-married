import Image, { StaticImageData } from "next/image";
import groomAvatar from "../../public/groomAvatar.jpg";

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
		<div className="flex items-center space-x-2 m-5">
			<div className="avatar">
				<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
					<Image src={image} alt={imageAlt} className="mask mask-squircle" />
				</div>
			</div>
			<div className={"text-left pl-3"}>
				<div className="text-base-content/70 text-sm">{title}</div>
				<div className="text-lg font-extrabold">{name}</div>
				<div className="text-base-content/70 text-sm">
					<a href={`tel:${telNoSpaces}`}>{phone}</a>
				</div>
				<div className="text-base-content/70 text-sm">
					<a href={`mailto:${email}`}>{email}</a>
				</div>
			</div>
		</div>
	);
}
