import React from 'react'
import Image from 'next/image'
import CardContent from '../../components/CardContent'

const page = () => {
  return (
    <div className="w-full h-full bg-gray-900/90">
      <div className="flex flex-col md:flex-row gap-0 items-center justify-between">
        <div className="textpart w-full md:w-1/2 flex flex-col items-start justify-center px-20 min-h-[216px]">
          <div className="mini-title text-sm font-light uppercase">
            Unique Living
          </div>
          <div className="title text-3xl font-extrabold font-serif my-4">
            How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!
          </div>
          <div className="subtitle font-light text-sm">
            At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...
          </div>
        </div>
        <div className="imgpart w-full md:w-1/2">
          <Image
            src="/Rectangle 5.svg"
            alt="Unique Living Banner"
            className='object-contain'
            layout='responsive'
            height={600}
            width={600}
          />
        </div>
      </div>

    <div className="cardPart flex flex-wrap w">
      <CardContent />
    </div>

    </div>
  )
}

export default page;