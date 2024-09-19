import Image from 'next/image';
import React from 'react'

type ButtonProps = {
	type: "button" | "submit";
	title: string;
	icon?: string;
	variant: string;
	full?: boolean;
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
	return (
		<button
		className={`flexCenter gap-3 rounded-full border ${variant}`}
		 type={type}>
			{icon && <Image src={icon} alt={title} height={24} width={24} />}
			<label className='bol-16 whitespace-nowrap'>{title}</label>
		</button>
	)
}

export default Button
