import {
	SignInButton,
	UserButton
} from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Image from "next/image"


const SignInBtn = () => {
	const { userId }: { userId: string | null } = auth()
	return (
		<>
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
		</>
	)
}

export default SignInBtn
