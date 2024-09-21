import React from 'react'

const page = () => {
	return (
		<section className='flexCenter'>
			<h1></h1>
			<div className="my-10 mx-2 md:m-20 bg-gray-10 p-10 shadow-md rounded w-full max-w-[1000px] lg:mx-auto">
				<form className='flex flex-col gap-5 '>
					<section className='flex flex-col md:grid grid-cols-2 gap-5 flexBetween'>
						<div className="flex flex-col gap-2 w-full">
							<label className='text-gray-50'>First name</label>
							<input className="flex h-10 rounded-md border px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
								type="text"
								name="name"
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className='text-gray-50'>Last name</label>
							<input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
								type="text"
								name="name"
							/>
						</div>
					</section>

					<section className='flex flex-col md:grid grid-cols-2 gap-5 flexBetween'>
						<div className="flex flex-col gap-2 w-full">
							<label className='text-gray-50'>Email</label>
							<input className="flex h-10 rounded-md border px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
								type="text"
								name="name"
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className='text-gray-50'>Destination</label>
							<input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300"
								type="text"
								name="name"
							/>
						</div>
					</section>

					<button className='w-full bg-slate-700 py-2 text-white rounded-md hover:bg-slate-600'>Submit</button>
				</form>
			</div>
		</section>
	)
}

export default page
