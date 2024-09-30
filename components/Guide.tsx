import Image from 'next/image'
import React from 'react'
import Animation from './animation'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Animation duration={1} delay={0.2} direction={"x"} reverse={true}>
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
          <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
            We are here for you
          </p>
        </Animation>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <Animation duration={1} delay={0.2} direction={"x"} reverse={true}>
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          </Animation>
          <Animation duration={1} delay={0.2} direction={"x"}>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              Embark on an exciting journey where adventure and safety go hand in hand!
              Whether yo&apos;re exploring bustling cities or relaxing in serene landscapes,
              we ensure your trip is not only thrilling but also secure at every step.
            </p>
          </Animation>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/city.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide