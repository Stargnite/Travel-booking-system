import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Animation from './animation'

const Hero = () => {
	return (
		<section className='max-container 
		 md:flexCenter padding-container gap-10 py-10  lg:gap-[18%] lg:py-20 xl:flex-row'>
			<div className="hero-map" />
			<div className="absolute h-[87vh] w-screen inset-0 bg-black opacity-70"></div>
			<div className="relative z-20 flex flex-1 flex-col xl:w-1/2 mb-24">
				<Image
					src="/camp.svg"
					alt='camp'
					width={50}
					height={50}
					className='absolute left-[30px] top-[-30px] w-10 
					lg:w-[50px]'
				/>
				<Animation duration={1} delay={0.2} direction={"x"}>
					<h1 className='lg:bold-52 text-[35px] font-[900] text-center md:text-start p-0 m-0 leading-[100%] lg:leading-[120%] text-white'>Book Your <span className='text-green-50'> Dream Getaway</span> Today</h1>
				</Animation>
				<Animation duration={1} delay={0.4} direction={"x"}>
					<p className='regular-16 my-8 text-gray-10 xl:max-w-[520px] text-center md:text-start'>
						Discover amazing destinations and book your next adventure with ease.
						We can help you on an adventure around the world with just the click of a few buttons.
					</p>
				</Animation>
				{/* <div className="flex md:flex-row lg:flex-col items-center"> */}
				<Animation duration={1} delay={0.6} direction={"x"}>
					<div className="mb-8 flex-wrap lg:flex-nowrap gap-5 hidden md:flex ">
						<div className="flex items-center gap-2">
							{Array(5).fill(1).map((_, index) => (
								<Image
									src="/star.svg"
									key={index}
									alt="star"
									width={24}
									height={24}
								/>
							))}
						</div>
						<p className='bold-16 lg:bold-20 text-blue-200'>
							198k
							<span className='regular-16  lg:regular-20 ml-1'>Excellent Reviews</span>
						</p>
					</div>
				</Animation>
				<div className="flex w-full flex-col gap-3 sm:flex-row items-center">
					<Animation duration={1} delay={0.7} direction={"y"}>
						<Link href="/booking-form">
							<Button
								type="button"
								title="Book A Flight"
								variant='lg:btn_green border-green-50 bg-green-50 px-8 py-5 text-white w-full min-w-[250px]'
							/>
						</Link>
					</Animation>
					<Animation duration={1} delay={0.9} direction={"y"}>
						<Button
							type="button"
							title="How we work"
							icon='/play.svg'
							variant='lg:btn_white_text border-gray-50 bg-gray-50 px-8 py-5 text-white w-full min-w-[250px]'
						/>
					</Animation>
				</div>
			</div>

			<div className="relative flex flex-1 items-start mx-5 lg:mx-auto">
				<Animation duration={1} delay={0.5} direction={"y"}>
					<div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

						<div className="flex flex-col">
							<div className="flexBetween">
								<p className="regular-16 text-gray-20">Destination</p>
								<Image src="/close.svg" alt="close" width={24} height={24} />
							</div>
							<p className="bold-20 text-white">United states</p>
						</div>

						<div className="flexBetween">
							<div className="flex flex-col">
								<p className="regular-16 block text-gray-20">Distance</p>
								<p className="bold-20 text-white">152.38 mi</p>
							</div>
							<div className="flex flex-col">
								<p className="regular-16 block text-gray-20">Elevation</p>
								<p className="bold-20 text-white">2.540 km</p>
							</div>
						</div>
					</div>
				</Animation>
			</div>
		</section>
	)
}

export default Hero
