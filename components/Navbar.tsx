import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"

import {
	SignInButton,
	UserButton
} from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

const Navbar = () => {
	const { userId }: { userId: string | null } = auth()

	return (
		<nav className="flexBetween max-container padding-container relative z-30 py-5 ">
			<Link href={"/"}>
				<Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
			</Link>

			<ul className="hidden h-full gap-12 lg:flex">
				{NAV_LINKS.map((link) => (
					<Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
						{link.label}
					</Link>
				))}
			</ul>
			<div className="lg:flexCenter hidden">

				{!userId ? (
					<SignInButton>
						<button
							className={`flexCenter gap-3 rounded-full border btn_dark_green`}
							type="button">
							<Image src="/user.svg" alt="avatar" height={24} width={24} />
							<label className='bol-16 whitespace-nowrap'>
								Sign in
							</label>
						</button>
					</SignInButton>
				) : (<UserButton />)}

			</div>

			<Image
				src="menu.svg"
				alt="menu"
				width={32}
				height={32} className="inline-block cursor-pointer lg:hidden"
			/>
		</nav>
	)
}

export default Navbar
