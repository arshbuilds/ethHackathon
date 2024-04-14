import React from 'react'
import Image from 'next/image'
import space from '@/public/cardImage.jpg'
import CardSymbol from '@/public/cardsymbols.svg'

type Props = {}

const ImageInfo = (props: Props) => {
  return (
    <div className='flex flex-col p-4 bg-none'>
        <Image src={space} alt="space" className='w-full rounded-xl' />
        <div className='flex items-center flex-col mt-4'>
            <Image src={CardSymbol} alt="symbol" className='w-12'/>
            <div className='mt-4'>
                <span className='font-heads text-2xl my-4'>Catch The Smartlance way</span>
                <p>Smartlance provides a nexus where expert freelancers and satisfied clients collide. Get swept up in the tide of advancement with us.</p>
            </div>
        </div>
    </div>
  )
}

export default ImageInfo