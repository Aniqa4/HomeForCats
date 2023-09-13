'use client'
import React, { useEffect, useState } from 'react'
import HomeLayouts from '../HomeLayouts'
import Title from '@/app/Components/Title'
import Image from 'next/image';

interface PropType{
  _id:string,
  animal_type:string,
  age:string,
  breed:string,
  type:string,
  description:string
}

export default function Page() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://all-paws-matter-server.vercel.app/up-for-adoption')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <HomeLayouts>
      <Title title='Up for adoption' />
      <div className='grid grid-cols-6 gap-5 mx-10 mb-20'>
        {
          data.map((x:PropType) =>
            <div key={x._id} className='grid gap-2 text-gray-600 text-sm'>
              <Image src="https://i.ibb.co/kX163fp/blank-profile-picture-973460-1280.webp" alt='' width={500} height={500} />
              <div className='grid gap-2'>
                <p className='text-base font-semibold'>{x.animal_type}</p>
                <h1>age: {x.age}</h1>
                <p>Breed: {x.breed}</p>
                <p className={x.type==='up for adoption'?'text-green-700':'text-red-600'}>Status: {x.type}</p>
                <p>{x.description}</p>
                <button className=' bg-emerald-700 text-white hover:bg-emerald-500 py-2'>Apply</button>
              </div>
            </div>)
        }
      </div>
    </HomeLayouts>
  )
}
